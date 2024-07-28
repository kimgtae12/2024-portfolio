import React from 'react';
import { useThemeStore } from 'store/useThemeStore';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';


//테마 프로바이더 (다크-라이트)
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme: currentTheme } = useThemeStore();

  return (
    <StyledThemeProvider theme={currentTheme === 'light' ? theme.lightColor : theme.darkColor}>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;