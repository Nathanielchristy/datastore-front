import { RefineThemes } from "@refinedev/antd";
import { ConfigProvider } from "antd";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

type ColorModeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const colorModeFromLocalStorage = localStorage.getItem("colorMode");
  const systemPreference = "light";
  const [mode, setMode] = useState(
    colorModeFromLocalStorage || systemPreference
  );

  useEffect(() => {
    window.localStorage.setItem("colorMode", mode);
  }, [mode]);

  const setColorMode = () => {
    setMode("light");
  };

  // Custom theme for light mode
  const customTheme = {
    token: {
      colorPrimary: "#ae9852", // Gold
      colorBgBase: "#F5F5DC", // Beige
    },
  };

  return (
    <ColorModeContext.Provider
      value={{
        setMode: setColorMode,
        mode,
      }}
    >
      <ConfigProvider theme={customTheme}>{children}</ConfigProvider>
    </ColorModeContext.Provider>
  );
};
