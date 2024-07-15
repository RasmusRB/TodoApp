import { Tabs } from 'expo-router';
import { useSelector } from 'react-redux';

import { TabBarIcon } from '~/components/TabBarIcon';
import { Colors } from '~/constants/Colors';
import { RootState } from '~/feature/store';

export default function TabLayout() {
  const { isDark } = useSelector((state: RootState) => state.persistedTheme);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isDark ? 'white' : Colors.light.tabIconSelected,
        tabBarStyle: {
          backgroundColor: isDark ? Colors.dark.background : Colors.light.background,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
