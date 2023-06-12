import { useMemo, useState, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import routesConfig from '@src/routes/routesConfig';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
// import {
//   ISetting,
//   SettingContext,
//   defaultSettingState,
// } from '@context/settings/settingsContext';
import { UserContext } from '@context/user/userContext';
import { IUser } from './services/users/types';

const router = createBrowserRouter(routesConfig);

function App() {
  // const [setting, setSetting] = useState<ISetting>(defaultSettingState);
  const [user, setUser] = useState<IUser | null>(null);

  // const settingValue = useMemo(() => ({ setting, setSetting }), [setting]);
  const userValue = useMemo(() => ({ user, setUser }), [user]);

  return (
    // <SettingContext.Provider value={settingValue}>
    <UserContext.Provider value={userValue}>
      <div dir="rtl">
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
        <ToastContainer />
      </div>
    </UserContext.Provider>
    // </SettingContext.Provider>
  );
}

export default App;
