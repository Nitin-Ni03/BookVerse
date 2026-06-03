export const uploadToCloudinary = async (pics) => {
  const cloud_name = "dxoqwusir";

  if (pics) {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", cloud_name);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        {
          method: "post",
          body: data,
        }
      );

      if (!res.ok) {
        const errorData = await res.text();
        console.error("Cloudinary error:", errorData);
        throw new Error(`Upload failed: ${res.statusText}`);
      }

      const fileData = await res.json();
      console.log("url : ", fileData);
      return fileData.url;
    } catch (error) {
      console.error("Error in uploadToCloudinary:", error);
      return null;
    }
  } else {
    console.log("error: no file provided");
    return null;
  }
};