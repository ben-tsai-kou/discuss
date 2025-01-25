import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '../ui/textarea';
import { createTopic } from '@/actions';

export default function TopicCreateForm() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-500">
                    Create a Topic
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <form action={createTopic}>
                    <div className="flex flex-col gap-4 p-4">
                        <h3 className="text-lg">Create a Topic</h3>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Name" />
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Describe your topic"
                        />
                        <Button
                            type="submit"
                            variant="outline"
                            className="bg-gray-300"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
}
