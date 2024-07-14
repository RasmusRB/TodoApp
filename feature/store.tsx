import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';
import { useDispatch } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import authSlice from './slices/authSlice';
import themeSlice, { updateSystemTheme } from './slices/themeSlice';

const persistAuthConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistThemeConfig = {
  key: 'theme',
  storage: AsyncStorage,
};

const persistedAuth = persistReducer(persistAuthConfig, authSlice);
const persistedTheme = persistReducer(persistThemeConfig, themeSlice);

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    persistedAuth,
    persistedTheme,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

Appearance.addChangeListener(() => {
  store.dispatch(updateSystemTheme());
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
