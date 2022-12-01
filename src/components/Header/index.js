import React, { useState, useCallback } from 'react';
import Link from 'next/link';

import Logo from 'images/logo.svg';

export default function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  return (
    <header className="max-w-full lg:max-w-7x1 mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="w-28">
          <Logo className="logo-style-1" />
        </div>

        <button
          className={[
            'w-auto items-center justify-center lg:hidden p-2 appeareance-none z-50',
            menu ? 'text-white fixed right-4' : 'relative text-inherit',
          ].join('')}
          onClick={toggleMenu}
        >
          <span className="material-icons">{menu ? 'close' : 'menu'}</span>
        </button>

        <div
          className={[
            'lg:flex w-auto lg:opacity-100 lg:visible lg:h-auto z-20',
            menu
              ? 'flex items-center justify-center h-screen w-full inset-0 opacity-100 visible fixed bg-black'
              : 'hidden opacity-0 h-0 invisible',
          ].join(' ')}
        >
          <ul className="flex itmes-center flex-col lg:flex-row gap-y-6 lg-gap-y-0">
            <li className="">
              <Link href="/destinations" legacyBehavior>
                <a className="px-9 text-gray-800">Destinations</a>
              </Link>
            </li>
            <li className="">
              <Link href="/hotels" legacyBehavior>
                <a className="px-9 text-gray-800">Hotels</a>
              </Link>
            </li>
            <li className="">
              <Link href="/flights" legacyBehavior>
                <a className="px-9 text-gray-800">Flights</a>
              </Link>
            </li>
            <li className="">
              <Link href="/Bbookings" legacyBehavior>
                <a className="px-9 text-gray-800">Bookings</a>
              </Link>
            </li>
            <li className="">
              <Link href="/login" legacyBehavior>
                <a className="px-9 text-gray-800">Login</a>
              </Link>
            </li>
            <li className="">
              <Link href="/sign-up" legacyBehavior>
                <a className="px-5 text-gray-800 py-1 border border-gray-800 rounded-md mx-3">
                  Sign up
                </a>
              </Link>
            </li>
            <li className="">
              <button className="px-9 text-gray-800 relative">
                EN
                <span className="absolute w-2 h-2 border-gray-800 border-b  border-r transform rotate-45 translate-ml-2"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
