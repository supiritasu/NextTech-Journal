'use client';

import Link from "next/link";
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';

const Header: React.FC = () => {
  const { user, isLoading } = useUser();

  return (
    <header className="bg-gray-900 text-gray-400 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Image 
            src="/favicon/NextTech_Icon.svg"
            width={80}
            height={80}
            alt="SVG Icon"
          />
          <span className="ml-3 text-2xl font-bold">NextTech</span>
        </Link>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link href="/about" className="mr-5 hover:text-white">
            About
          </Link>
          <Link href="/posts" className="mr-5 hover:text-white">
            Blog
          </Link>
          {/* <Link href="/contact" className="mr-5 hover:text-white">
            Contact
          </Link> */}
          <Link href="/policy" className="mr-5 hover:text-white">
            Policy
          </Link>
        </nav>

        <div className="flex items-center gap-4">
      {isLoading ? (
        <div className="text-sm text-gray-400">Loading...</div>
      ) : user ? (
        <div className="flex items-center gap-4">
          {user.picture && (
            <Image
              src={user.picture}
              alt={user.name || 'User avatar'}
              width={40}
              height={40}
              className="rounded-full border-2 border-gray-700"
            />
          )}
          <Link 
            href="/api/auth/logout"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Log out
          </Link>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link
            href="/api/auth/login"
            className="inline-flex items-center px-5 py-2 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Sign in
          </Link>
          {/* <Link
            href="/api/auth/signup"
            className="inline-flex items-center px-5 py-2 text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            Sign up
          </Link> */}
    </div>
  )}
</div>

      </div>
    </header>
  );
};

export default Header;
