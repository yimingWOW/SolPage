import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="recent"
        options={{
          title: 'Recent',
        }}
      />
      <Tabs.Screen
        name="hot"
        options={{
          title: 'Rank',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}
