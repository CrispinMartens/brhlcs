import React from 'react';

import LogoBlackSmall from './atoms/LogoBlackSmall';

function TopNav() {
  return (
    <div>
      <div className="grid grid-cols-3 bg-transparent ">
        <h1>Lorem</h1>
        <div className="flex items-center justify-center">
          <LogoBlackSmall />
        </div>
        <div className="m-auto flex justify-center text-center">
          <h3>Kontakt aufnehmen</h3>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
