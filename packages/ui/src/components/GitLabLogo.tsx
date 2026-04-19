import { cn } from '../lib/cn';

interface GitLabLogoProps {
  className?: string;
}

export function GitLabLogo({ className }: GitLabLogoProps) {
  return (
    <svg
      className={cn('size-5', className)}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#E24329"
        d="M24 44l6.7-20.6H17.3L24 44z"
      />
      <path
        fill="#E24329"
        d="M24 44l-6.7-20.6H8.4L24 44z"
      />
      <path
        fill="#FC6D26"
        d="M8.4 23.4L4.2 36.4c-.4 1.1.1 2.3 1.1 2.9L24 44 8.4 23.4z"
      />
      <path
        fill="#E24329"
        d="M8.4 23.4h8.9L13.3 9.5c-.3-1-1.7-1-2 0L8.4 23.4z"
      />
      <path
        fill="#E24329"
        d="M24 44l6.7-20.6h8.9L24 44z"
      />
      <path
        fill="#FC6D26"
        d="M39.6 23.4l4.2 13c.4 1.1-.1 2.3-1.1 2.9L24 44l15.6-20.6z"
      />
      <path
        fill="#E24329"
        d="M39.6 23.4h-8.9l3.9-13.9c.3-1 1.7-1 2 0l3 13.9z"
      />
    </svg>
  );
}
