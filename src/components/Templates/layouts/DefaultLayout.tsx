import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <main className="mainWrapper font-on">
      <Outlet />
    </main>
  );
}
