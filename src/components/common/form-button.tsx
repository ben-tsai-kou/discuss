'use client';

import { VariantProps } from 'class-variance-authority';
import { Button } from '../ui/button';
import { Spinner } from '../ui/spinner';

type ButtonProps = VariantProps<typeof Button>;

type Props = {
    children: React.ReactNode;
    isLoading: boolean;
    variant?: ButtonProps['variant'];
    size?: ButtonProps['size'];
    className?: string;
};

export default function FormButton({
    children,
    isLoading,
    variant,
    size,
    className = '',
}: Props) {
    return (
        <Button
            type="submit"
            variant={variant}
            size={size}
            className={className}
            disabled={isLoading}
        >
            {isLoading && <Spinner />}
            {children}
        </Button>
    );
}
