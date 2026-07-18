import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: "df3zl5udv",
	api_key: "747571165331315",
	api_secret: "pU5CrnGyn7MEw__uFII2vTKbjJY",
});

export async function uploadToCloudinary(file, folder) {
	const bytes = await file.arrayBuffer();
	const buffer = Buffer.from(bytes);

	return new Promise((resolve, reject) => {
		cloudinary.uploader
			.upload_stream(
				{
					folder: folder,
					resource_type: "auto",
				},
				(error, result) => {
					if (error || !result) {
						reject(error || new Error("Upload failed"));
					} else {
						resolve(result.secure_url);
					}
				},
			)
			.end(buffer);
	});
}

export async function deleteFromCloudinary(imageUrl) {
	if (!imageUrl) return;

	try {
		const match = imageUrl.match(/\/upload\/(?:v\d+\/)?([^\.]+)/);
		if (match && match[1]) {
			const publicId = match[1];
			await cloudinary.uploader.destroy(publicId);
		}
	} catch (error) {
		console.error("Failed to delete image from Cloudinary:", error);
	}
}
