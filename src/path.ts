export const path = {
    home() {
        return '/';
    },
    topicShow({ topicSlug }: { topicSlug: string }) {
        return `/topics/${topicSlug}`;
    },
    postCreate({ topicSlug }: { topicSlug: string }) {
        return `/topics/${topicSlug}/posts/new`;
    },
    postShow({ topicSlug, postId }: { topicSlug: string; postId: string }) {
        return `/topics/${topicSlug}/posts/${postId}`;
    },
};
