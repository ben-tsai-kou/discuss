import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '../ui/textarea';
import { createTopic } from '@/actions';

export default function TopicCreateForm() {
    const [formState, action] = React.useActionState(createTopic, {
        errors: {},
    });

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-500">
                    Create a Topic
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <form action={action}>
                    <div className="flex flex-col gap-4 p-4">
                        <h3 className="text-lg">Create a Topic</h3>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" placeholder="Name" />
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Describe your topic"
                            name="description"
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
