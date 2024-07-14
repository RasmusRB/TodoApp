import { StyleSheet, Text, useColorScheme, View } from 'react-native';

import EditScreenInfo from './EditScreenInfo';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '~/feature/store';
import { Colors } from '~/constants/Colors';
import { useEffect, useState } from 'react';
import { setTheme } from '~/feature/slices/themeSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  const { isDark, theme } = useSelector((state: RootState) => state.persistedTheme);
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(setTheme('dark'));
    console.log('press', theme);
  };

  console.log('🚀 ~ ScreenContent ~ theme:', theme);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? Colors.dark.background : Colors.light.background },
      ]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} />
      <TouchableOpacity onPress={handlePress}>
        <Text>Theme</Text>
      </TouchableOpacity>
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    backgroundColor: '#d1d5db',
    height: 1,
    marginVertical: 30,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
