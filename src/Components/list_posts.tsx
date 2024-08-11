import { Card } from "./card.tsx";

export function listPosts({ post }) {
    return (
        <a>
            <Card>
                <header className='flex justify-between pb-1 flex-wrap'>
                    <h2 className='text-2xl font-sans'>{post.title}</h2>

                </header>

                <p>{post.description}</p>
                <footer className='pt-4 flex gap-1 flex-wrap'>
                    {post.tags}
                </footer>
            </Card>
        </a>
    )
}
