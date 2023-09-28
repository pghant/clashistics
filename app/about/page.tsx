import Link from 'next/link';

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            This is the about page
            <Link href="/">Back to home</Link>
        </main>
    );
}