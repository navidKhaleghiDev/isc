import { NavbarDashboard } from '@ui/organisms/Navbar/NavbarDashboard';
import { Outlet } from 'react-router-dom';
import { SideBar } from './Sidebar';

export default function Layout() {
  return (
    <div className="font-on w-full min-h-screen bg-gray-200 flex flex-col">
      <NavbarDashboard />
      <div className="w-full h-full grid grid-cols-12 gap-1 flex-1">
        <div className="bg-white w-full col-span-2">
          <SideBar />
        </div>
        <div className="bg-white w-full col-span-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
