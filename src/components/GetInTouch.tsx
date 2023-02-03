import Link from 'next/link';
import React from 'react';

function GetInTouch() {
  return (
    <div>
      <section className="mx-0 bg-baarblue">
        <div className="mx-auto max-w-3xl">
          <div className="flex py-64">
            <div className="m-auto text-center">
              <h1 className="mb-5 text-white">
                Zeit, das wir uns kennen lernen.
              </h1>

              <p className="text-white">
                E-Mail, Telefon oder gleich vor Ort: Was auch immer Sie zu uns
                führt, wir freuen uns mehr über Sie und Ihren Anlass zu
                erfahren.
              </p>
              <Link href="/kontakt" passHref={true}>
                <div className="py-8">
                  <button>Kontakt</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetInTouch;
