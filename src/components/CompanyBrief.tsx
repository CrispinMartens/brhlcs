import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Placeholder from '@/public/assets/images/shield_placeholder.png';

function CompanyBrief() {
  return (
    <div>
      <section>
        <div className="grid gap-48 md:grid-cols-2">
          <div className="m-auto text-center">
            <p className="uppercase tracking-wider">
              Ihr Barkeeping Service aus Baar, ZG
            </p>
            <h2 className="py-8">Barkeeping, Catering und Mixkurse</h2>
            <p className="text-2xl">
              Wir mixen vor Ort auf Ihrer Veranstaltung, mit Handwerkskunst,
              exzellentem Service und einer Prise Show.
            </p>

            <div className="py-8">
              <Link href="/kontakt">
                <button className="bg-baarblue text-white">
                  Buchungsanfrage
                </button>
              </Link>
            </div>
          </div>

          <div>
            <Image src={Placeholder} alt="Baraholics" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompanyBrief;
