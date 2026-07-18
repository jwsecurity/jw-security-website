import { NextResponse } from "next/server";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function POST(req) {
	try {
		const formData = await req.formData();
		const file = formData.get("image");

		if (!file) {
			return NextResponse.json({ error: "No file provided" }, { status: 400 });
		}

		if (file.size > 2 * 1024 * 1024) {
			return NextResponse.json(
				{ error: "File size must be less than 2MB" },
				{ status: 400 },
			);
		}

		if (!file.type.startsWith("image/")) {
			return NextResponse.json(
				{ error: "File must be an image" },
				{ status: 400 },
			);
		}

		const url = await uploadToCloudinary(file, "profile-images");

		return NextResponse.json({ url });
	} catch (error) {
		console.error("Upload error:", error);
		return NextResponse.json(
			{ error: "Failed to upload image to Cloudinary" },
			{ status: 500 },
		);
	}
}
