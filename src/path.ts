export const path = {
    home() {
        return '/';
    },
    topicShow({ topicSlug }: { topicSlug: string }) {
        return `/topic/${topicSlug}`;
    },
    postCreate({ topicSlug }: { topicSlug: string }) {
        return `/topic/${topicSlug}/posts/new`;
    },
    postShow({ topicSlug, postId }: { topicSlug: string; postId: string }) {
        return `/topic/${topicSlug}/posts/${postId}`;
    },
};
