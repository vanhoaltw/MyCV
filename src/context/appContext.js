import { createContext, useEffect, useState } from "react";

export const ContextApp = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    const dom = document.querySelector("#views");
    const mySite = window.location.host;
    fetch(`https://api.countapi.xyz/hit/${mySite}/visits`)
      .then((res) => res.json)
      .then((res) => (dom.innerHTML = res.value || 0));
  }, []);
  return (
    <ContextApp.Provider value={{ theme, setTheme, showMenu, setShowMenu }}>
      {children}
    </ContextApp.Provider>
  );
};

export default AppProvider;
