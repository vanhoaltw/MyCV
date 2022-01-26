import React, { useEffect, useState } from "react";
import { LANGUAGES } from "../../constant/common";
import i18next from "i18next";
const SwitchLanguage = () => {
  const [languageCurrent, setLanguageCurrent] = useState('en');
  const onChangeLanguage = (e)=>{
    setLanguageCurrent(e.target.checked ? 'vi' : 'en')
  }
  
  useEffect(()=>{
    if(i18next) i18next.changeLanguage(languageCurrent)
  },[languageCurrent])

  return (
    <div className="switch__language">
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        onChange={onChangeLanguage}
      />
      <label htmlFor="language-toggle"></label>
      {LANGUAGES.map((language, key) => (
        <span className={key===0  ? "on" : "off"} key={key}>
          {language.name}
        </span>
      ))}
    </div>
  );
};

export default SwitchLanguage;
