import React from 'react';

function kontakt() {
  return (
    <div>
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="text-center">
            <h1>Wir freuen uns über Ihre Anfrage:</h1>
            <p>4918475273273344</p>
          </div>

          <div className="grid grid-cols-2 gap-24 pt-16">
            <div className="cursor-pointer rounded-xl border border-neutral-400 px-8 text-center duration-200 ease-in hover:bg-baarblue">
              <h2>Baraholics anrufen</h2>
              <p>Lorem Ipsum Dolor Sit Amet</p>
            </div>
            <div className="rounded-xl border border-neutral-400 px-8 text-center">
              <h2>Baraholics Schreiben</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default kontakt;
