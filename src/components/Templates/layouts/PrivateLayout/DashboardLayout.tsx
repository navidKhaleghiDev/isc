import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { SideBar } from './Sidebar';

export default function Layout() {
  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-col">
      <Navbar />
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
