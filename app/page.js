import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-start justify-center p-24">
            <h2 className="mb-6 text-2xl font-semibold">
                CPRG 306: Web Development 2 - Assignments
            </h2>
            <StudentInfo className="mb-6" />
            <div className="space-y-3">
                <Link href="/week2" className="text-blue-500 hover:underline hover:text-blue-600">
                    Week 2
                </Link>
                <br/>
                <Link href="/week3" className="text-blue-500 hover:underline hover:text-blue-600">
                    Week 3
                </Link>
            </div>
        </main>
    );
}

