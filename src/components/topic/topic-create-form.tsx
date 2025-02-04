'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { startTransition, useActionState } from 'react';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '../ui/textarea';
import { createTopic } from '@/actions';
import FormButton from '../common/form-button';

export default function TopicCreateForm() {
    const [formState, action, isPending] = useActionState(createTopic, {
        errors: {},
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        startTransition(() => {
            action(formData);
        });
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-500">
                    Create a Topic
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4 p-4">
                        <h3 className="text-lg">Create a Topic</h3>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Name"
                            className={`${
                                formState.errors.name
                                    ? 'border border-red-600'
                                    : ''
                            }`}
                        />
                        {formState.errors.name && (
                            <p className="text-red-600">
                                {formState.errors.name?.join(', ')}
                            </p>
                        )}
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Describe your topic"
                            name="description"
                            className={`${
                                formState.errors.description
                                    ? 'border border-red-600'
                                    : ''
                            }`}
                        />
                        {formState.errors.description && (
                            <p className="text-red-600">
                                {formState.errors.description?.join(', ')}
                            </p>
                        )}

                        {formState.errors._form && (
                            <div className="rounded p-2 bg-red-200 border border-red-400">
                                {formState.errors._form?.join(', ')}
                            </div>
                        )}

                        <FormButton
                            isLoading={isPending}
                            variant="outline"
                            className="bg-gray-300"
                        >
                            Submit
                        </FormButton>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
}
