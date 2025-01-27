import Link from 'next/link';
import PostShow from '@/components/posts/post-show';
import CommentList from '@/components/comments/comment-list';
import CommentCreateForm from '@/components/comments/comment-create-form';
import { path } from '@/path';

interface PostShowPageProps {
    params: Promise<{
        slug: string;
        postId: string;
    }>;
}

export default async function PostShowPage({ params }: PostShowPageProps) {
    const { slug, postId } = await params;

    return (
        <div className="space-y-3">
            <Link
                className="underline decoration-solid"
                href={path.topicShow({ topicSlug: slug })}
            >
                {'< '}Back to {slug}
            </Link>
            {/* <PostShow /> */}
            {/* <CommentCreateForm postId={postId} startOpen /> */}
            {/* <CommentList comments={comments} /> */}
        </div>
    );
}
