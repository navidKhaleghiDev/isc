import { useMemo, useState, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import routesConfig from '@src/routes/routesConfig';
import { IUserWithAuth, UserContext } from '@context/user/userContext';

const router = createBrowserRouter(routesConfig);

function App() {
  const [user, setUser] = useState<IUserWithAuth | null>(null);

  const userValue = useMemo(() => ({ user, setUser }), [user]);

  return (
    <UserContext.Provider value={userValue}>
      <div dir="rtl">
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
        <ToastContainer rtl style={{ direction: 'rtl', fontSize: 20 }} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
