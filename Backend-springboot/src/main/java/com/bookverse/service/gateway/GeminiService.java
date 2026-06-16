package com.bookverse.service.gateway;

import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

/**
 * Service to interact with the Google Gemini API to generate book recommendations.
 */
@Service
@Slf4j
public class GeminiService {

    @Value("${gemini.api.key:}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    /**
     * Get book ID recommendations from Gemini based on user history and catalog.
     *
     * @param historyPrompt Description of the user's borrowed books history.
     * @param catalogPrompt List of candidates from the library catalog.
     * @return List of book IDs recommended by the model.
     */
    public List<Long> getRecommendations(String historyPrompt, String catalogPrompt) {
        List<Long> recommendedIds = new ArrayList<>();
        
        // Handle empty/unconfigured API key gracefully
        if (apiKey == null || apiKey.trim().isEmpty() || apiKey.contains("your_gemini_api_key")) {
            log.warn("Gemini API key is not configured. Skipping Gemini recommendations.");
            return recommendedIds;
        }

        try {
            String url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey;

            String prompt = "You are a library recommendation assistant. Based on the user's reading history, choose the 4 most relevant books from the provided catalog.\n" +
                    "Return the result STRICTLY as a JSON array of long integers representing the book IDs, e.g. [1, 2, 3, 4]. Do not return any markdown code block wraps (like ```json), explanations, or notes. Just the raw JSON array.\n\n" +
                    "User Reading History:\n" + historyPrompt + "\n\n" +
                    "Available Catalog:\n" + catalogPrompt;

            JSONObject requestBody = new JSONObject();
            JSONArray contentsArray = new JSONArray();
            JSONObject contentsObj = new JSONObject();
            JSONArray partsArray = new JSONArray();
            JSONObject partsObj = new JSONObject();

            partsObj.put("text", prompt);
            partsArray.put(partsObj);
            contentsObj.put("parts", partsArray);
            contentsArray.put(contentsObj);
            requestBody.put("contents", contentsArray);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            HttpEntity<String> entity = new HttpEntity<>(requestBody.toString(), headers);
            String response = restTemplate.postForObject(url, entity, String.class);

            if (response != null) {
                JSONObject jsonResponse = new JSONObject(response);
                JSONArray candidates = jsonResponse.getJSONArray("candidates");
                if (candidates.length() > 0) {
                    JSONObject firstCandidate = candidates.getJSONObject(0);
                    JSONObject content = firstCandidate.getJSONObject("content");
                    JSONArray parts = content.getJSONArray("parts");
                    if (parts.length() > 0) {
                        String text = parts.getJSONObject(0).getString("text").trim();
                        log.info("Gemini raw response: {}", text);

                        // Strip markdown wraps if the model ignores the instruction
                        if (text.startsWith("```json")) {
                            text = text.substring(7);
                        } else if (text.startsWith("```")) {
                            text = text.substring(3);
                        }
                        if (text.endsWith("```")) {
                            text = text.substring(0, text.length() - 3);
                        }
                        text = text.trim();

                        JSONArray idsArray = new JSONArray(text);
                        for (int i = 0; i < idsArray.length(); i++) {
                            recommendedIds.add(idsArray.getLong(i));
                        }
                    }
                }
            }
        } catch (Exception e) {
            log.error("Failed to generate recommendations from Gemini API: {}", e.getMessage());
        }

        return recommendedIds;
    }
}
