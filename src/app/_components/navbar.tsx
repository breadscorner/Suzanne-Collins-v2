import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 md:my-8">
      <div className="flex items-center space-x-4">
        <Link href="/" className="md:text-lg hover:font-semibold font-thin leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
            Reviews
        </Link>
        <Link href="#biography" className="md:text-lg hover:font-semibold font-thin leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
            Biography
        </Link>
        <Link href="#literature" className="md:text-lg hover:font-semibold font-thin leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
            Literature
        </Link>
        <Link href="#interview" className="md:text-lg hover:font-semibold font-thin leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
            Interview
        </Link>
      </div>
      <div className="flex items-center -mr-2">
      </div>
    </nav>
  );
}