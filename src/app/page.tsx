import TopicCreateForm from '@/components/topic/topic-create-form';
import TopicList from '@/components/topic/topic-list';
import { Separator } from '@/components/ui/separator';

export default async function Home() {
    return (
        <div className="grid grid-cols-4 gap-4 p-4 items-center">
            <div className="col-span-3">
                <h1 className="text-xl m-2">Top Posts</h1>
            </div>
            <div className="border shadow py-3 px-2">
                <div className="flex justify-center">
                    <TopicCreateForm />
                </div>
                <div className="pt-3">
                    <Separator />
                </div>
                <h3 className="text-center">Topics</h3>
                <TopicList />
            </div>
        </div>
    );
}
