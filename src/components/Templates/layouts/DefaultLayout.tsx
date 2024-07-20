import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <main className="mainWrapper font-kalameh">
      <Outlet />
    </main>
  );
}
