import { useState } from 'react';
import { MobileNavbar } from './MobileNavbar';
import { Navigation } from './Navigation';

export function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <MobileNavbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Navigation openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
}
