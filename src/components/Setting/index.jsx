import React from 'react';
import SwitchLanguage from '../common/SwitchLanguage';
import SwitchTheme from '../common/SwitchTheme';

const SettingApp = () => {
  return <div className='setting__app'>
      <SwitchLanguage/>
      <SwitchTheme/>
  </div>;
};

export default SettingApp;
