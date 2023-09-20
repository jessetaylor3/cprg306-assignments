import Link from 'next/link';

const StudentInfo = () => {
    return (
        <div>
            <p>Jesse</p>
            <p>CPRG 306 E</p>
            <Link href = "https://github.com/jessetaylor3/cprg306-assignments.git">
                My GitHub Repository
            </Link>
        </div>
    );
};

export default StudentInfo;