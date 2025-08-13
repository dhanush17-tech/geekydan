import matter from "gray-matter";

// In-memory cache for posts
let postsCache: any[] | null = null;

export async function getPostBySlug(slug: string) {
    if (!postsCache) {
        // Fetch all posts from the API route
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        postsCache = await response.json();
    }

    // Find the post with matching slug
    const post = postsCache?.find((p) => p.slug === slug);
    if (!post) {
        throw new Error(`Post not found: ${slug}`);
    }

    return post;
}   