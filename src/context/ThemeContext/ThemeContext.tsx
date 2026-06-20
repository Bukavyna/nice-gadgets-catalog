import {
  createContext,
  useContext,
  useEffect,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
} from 'react';

import { THEMES } from '@/components/ThemeSelector/themeConfig';
import type { Theme } from '@/components/ThemeSelector/themeConfig';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface ThemeContextType {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themes, setThemes] = useLocalStorage<Theme>('theme', 'original-light');

  useEffect(() => {
    const allThemeClasses = THEMES.map(theme => theme.id);

    document.body.classList.remove(...allThemeClasses);

    document.body.classList.add(themes as string);
  }, [themes]);

  const value: ThemeContextType = {
    theme: themes,
    setTheme: setThemes,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(`useTheme must be used within ThemeProvider`);
  }

  return context;
};
