import Link from 'next/link';
import React from 'react';

function kontakt() {
  return (
    <div>
      <section>
        <div className="flex pt-24">
          <div className="m-auto">
            <div className="text-center">
              <div className="mx-auto max-w-5xl">
                <h1>Wir freuen uns über Ihre Anfrage:</h1>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-32 pt-16">
              <div className="group cursor-pointer rounded-xl border border-neutral-300 p-24 text-center duration-200 ease-in-out hover:bg-baarblue">
                <h2 className="mb-5">☎️</h2>
                <h2 className="mb-5 group-hover:text-white">
                  Baraholics anrufen
                </h2>
                <p className="group-hover:text-white">
                  Sie erreichen uns telefonisch unter der:
                </p>
                <p className="group-hover:text-white">+41 01 101 010 10</p>
              </div>

              <Link href="/kontaktformular" passHref={true}>
                <div className="group cursor-pointer rounded-xl border border-neutral-300 p-24 text-center duration-200 ease-in-out hover:bg-baarblue">
                  <h2 className="mb-5">📩</h2>
                  <h2 className="mb-5 group-hover:text-white">
                    Baraholics Schreiben
                  </h2>
                  <p className="group-hover:text-white">
                    Nutzen Sie das Kontaktformular oder schreiben sie uns eine
                    Email an info@baraholics.ch
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default kontakt;
