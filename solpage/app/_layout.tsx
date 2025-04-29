import { Stack, Redirect } from 'expo-router';

import { StatusBar } from 'expo-status-bar';


export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="article/[address]"
          options={{
            title: '',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <Redirect href="/(tabs)/recent" />
      <StatusBar style="light" />
    </>
  );
}
