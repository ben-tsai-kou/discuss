'use server';

export const createTopic = async (formData: FormData) => {
    const name = formData.get('name');
    const description = formData.get('description');
};
