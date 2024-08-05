// import { BaseTab, BaseTabs } from '@ui/atoms/BaseTabs';
// import { ContainerDashboard } from '@ui/Templates/ContainerDashboard';
// import { LogsSetting } from './LogsSetting';
// import { ProfileSettings } from './ProfileSettings';
import { Setting } from './Setting';

export function SettingsPage() {
  /* It is possible that this content will be needed later. */

  return (
    <>
      {/* <ContainerDashboard>
        <BaseTabs label="تنظیمات">
          <BaseTab label="logs">
            <LogsSetting />
          </BaseTab>
          <BaseTab label="profile">
            <ProfileSettings />
          </BaseTab>
        </BaseTabs>
      </ContainerDashboard> */}
      <Setting />
    </>
  );
}
