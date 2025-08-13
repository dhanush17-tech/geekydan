import { ImageResponse } from "next/og";
import { getPostBySlug } from "../../../../lib/api";

export const runtime = "edge";

export const alt = "Blog Post";
export const size = {
  width: 1200,
  height: 630, // Standard Twitter card size
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug);
   
    return new ImageResponse(
      (
        <div>
          <h1>Hello</h1>
        </div>
      )
    );
  } catch (error) {
    console.error("Failed to generate Twitter image:", error);
    return new Response("Failed to generate Twitter image", { status: 500 });
  }
}
