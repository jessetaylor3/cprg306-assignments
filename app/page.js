import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <a>
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    CPRG 306: Web Development 2 - Assignments
                </h2>
                <StudentInfo />
                <Link href = "/week2">Week 2</Link>
            </a>
        </main>
    );
}
