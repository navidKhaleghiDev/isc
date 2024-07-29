import { useMemo, useState, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routesConfig from '@src/routes/routesConfig';
import { IUserWithAuth, UserContext } from '@context/user/userContext';
import { ToastCustomContainer } from '@ui/molecules/ToastCustomContainer';

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
        <ToastCustomContainer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
