import Image from 'next/image';
import React from 'react';

import Placeholder from '@/public/assets/images/catering_placeholder.png';
import Stundenbasis from '@/public/assets/images/stundenbasis.png';

function Pricing() {
  return (
    <div>
      <section>
        <div className="text-center">
          <h1>Die Preise</h1>
        </div>
        <div className="border-b border-baarblue py-24 md:mx-16 md:flex">
          <div className="border-r border-baarblue">
            <div className="w-full border-b border-baarblue py-8 md:w-10/12">
              <div className="flex items-center justify-center">
                <Image
                  src={Stundenbasis}
                  alt="Baraholics"
                  className="mb-10 w-72"
                />
              </div>

              <h2 className="mb-5 text-4xl">Catering auf Stundenbasis</h2>
              <p>
                Die Kosten für Getränke sind nicht enthalten und werden vom
                Veranstalter/Gastgeber getragen. Auch das selbständige Einkaufen
                ist möglich. Entsprechend erhalten sie von uns eine
                Einkaufsliste.
              </p>
            </div>
            <div className="w-full pt-16 md:w-10/12">
              <div className="flex items-center justify-center">
                <Image
                  src={Placeholder}
                  alt="Baraholics"
                  className="mb-10 w-72"
                />
              </div>
              <h2 className="mb-5 text-4xl">Catering auf Konsumationsbasis</h2>
              <p>
                Die Kosten für Getränke sind nicht enthalten und werden vom
                Veranstalter/Gastgeber getragen. Auch das selbständige Einkaufen
                ist möglich. Entsprechend erhalten sie von uns eine
                Einkaufsliste.
              </p>
            </div>
          </div>
          <div className="m-auto text-center md:mx-24">
            <div className="flex items-center justify-center">
              <Image
                src={Placeholder}
                alt="Baraholics"
                className="mb-10 w-72"
              />
            </div>
            <h2 className="mb-5 text-4xl">Party Mixkurse</h2>
            <p>
              CHF 80 pro Person, mindestens jedoch CHF 500. Die Getränke sind
              inklusive, und dürfen behalten werden. Ab 14 Teilnehmenden wird
              ein zweiter Barkeeper aufgeboten.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
