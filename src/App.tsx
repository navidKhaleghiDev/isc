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

  const str =
    'alert tcp $EXTERNAL_NET any -> $HOME_NET 111 (msg:"RPC portmap cachefsd request TCP"; content:"|00 00 00 03|"; byte_jump:4,4,relative,align; byte_jump:4,4,relative,align; content:"|00 01 86 A8|"; within:4; classtype:rpc-portmap-decode; sid:1732; rev:9;)\n\r\n drop tcp $EXTERNAL_NET any -> $HOME_NET 111 (msg:"RPC portmap cachefsd request TCP"; depth:4; rev:11;) udp $EXTERNAL_NET any -> $HOME_NET 111 (msg:"RPC portmap rwalld request UDP";depth:4; offset:4; sid:1732; rev:9;)\r\n\r pass tcp $EXTERNAL_NET any -> $HOME_NET 111 (msg:"RPC portmap cachefsd request TCP"; within:4;byte_jump:4,4,relative,align;depth:4; offset:4;sid:1732; rev:9;)\r\n\r block tcp $EXTERNAL_NET any -> $HOME_NET 111 (msg:"RPC portmap cachefsd request TCP";offset:4; classtype:rpc-portmap-decode; sid:1732; rev:9;)\r\n\r';

  const pat = /[alert|drop|block|pass][\s\S]+?rev:[0-9];\)/gm;

  const split = str.split(pat);
  const exec = str.match(pat);

  console.log({ exec });

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
