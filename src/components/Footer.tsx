import Link from 'next/link';
import React from 'react';

import InstagramLogo from './atoms/InstagramLogo';
import LogoBlack from './atoms/LogoBlack';

function Footer() {
  return (
    <div>
      <div className="relative z-10 max-w-full bg-transparent pt-24">
        <div className="py-32 md:mx-16 md:flex">
          <div className="m-auto w-full md:w-4/12">
            <LogoBlack />
          </div>
          <div className="w-full md:w-4/12">
            <Link href="/kontakt">
              <h2 className="mb-5 border-baarblue text-5xl normal-case">
                Kontakt
              </h2>
            </Link>
            <Link href="/datenschutz">
              <h2 className="mb-5 text-5xl normal-case">Datenschutz</h2>
            </Link>
            <Link href="/impressum">
              <h2 className="text-5xl normal-case">Impressum</h2>
            </Link>
          </div>
          <div className="m-auto w-full md:w-4/12">
            <h2 className="text-5xl normal-case">info@baraholics.ch</h2>
            <h2 className="text-5xl normal-case">+41 76 500 00 01</h2>
          </div>
        </div>

        <div className="group md:mx-16">
          <div className="flex border-t border-baarblue p-8">
            <div className="w-10/12">
              <div className="m-auto">
                <h4>{new Date().getFullYear()}, Baaraholics</h4>
              </div>
            </div>

            <div className=" mx-auto w-2/12">
              <a href="https://www.instagram.com/baraholics/">
                <div className="flex">
                  <InstagramLogo />
                  <h4 className="m-auto">Follow Us on Instagram</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
