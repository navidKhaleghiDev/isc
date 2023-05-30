import { useMemo, useState, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routesConfig from '@src/routes/routesConfig';
import './App.css';
import {
  ISetting,
  SettingContext,
  defaultSettingState,
} from '@context/settings/settingsContext';

const router = createBrowserRouter(routesConfig);

function App() {
  const [setting, setSetting] = useState<ISetting>(defaultSettingState);
  const value = useMemo(() => ({ setting, setSetting }), [setting]);

  return (
    <SettingContext.Provider value={value}>
      <div dir="rtl">
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </SettingContext.Provider>
  );
}

export default App;
