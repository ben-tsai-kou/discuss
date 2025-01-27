import { db } from '@/db';
import { path } from '@/path';
import Link from 'next/link';
import { Badge } from '../ui/badge';

export default async function TopicList() {
    const topics = await db.topic.findMany();

    const renderTopics = topics.map((topic) => {
        return (
            <div key={topic.id}>
                <Link href={path.topicShow({ topicSlug: topic.slug })}>
                    <Badge>{topic.slug}</Badge>
                </Link>
            </div>
        );
    });

    return <div className="flex flex-row flex-wrap gap-2">{renderTopics}</div>;
}
