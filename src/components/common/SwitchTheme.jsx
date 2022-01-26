import React, { useContext } from "react";
import { THEMES } from "../../constant/common";
import { ContextApp } from "../../context/appContext";

const SwitchTheme = () => {
    const {theme, setTheme} = useContext(ContextApp)
  return (
    <nav className="switch__theme">
      <div onClick={()=> setTheme(THEMES.light.code)} className={`dark_mode ${theme === THEMES.dark.code && 'active'}`}>
        {THEMES.dark.icon}
      </div>
      <div onClick={()=> setTheme(THEMES.dark.code)} className={`light_mode ${theme === THEMES.light.code && 'active'}`}>
        {THEMES.light.icon}
      </div>
    </nav>
  );
};

export default SwitchTheme;
