import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';

interface ThemeState {
  theme: 'light' | 'dark' | 'system';
  isDark: boolean;
}

const initialState: ThemeState = {
  theme: 'light',
  isDark: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark' | 'system'>) => {
      state.theme = action.payload;
      if (action.payload === 'system') {
        const systemTheme = Appearance.getColorScheme();
        state.isDark = systemTheme === 'dark';
      } else {
        state.isDark = action.payload === 'dark';
      }
    },
    updateSystemTheme: (state) => {
      if (state.theme === 'system') {
        const systemTheme = Appearance.getColorScheme();
        state.isDark = systemTheme === 'dark';
      }
    },
  },
});

export const { setTheme, updateSystemTheme } = themeSlice.actions;
export default themeSlice.reducer;
