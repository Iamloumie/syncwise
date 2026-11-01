import {Stack} from "expo-router";
import "@/global.css"
import {useFonts} from "expo-font";
import {useEffect} from "react";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from auto-hiding before fonts load
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  // Load the fonts before any UI comes up
  const [fontsLoaded, error] = useFonts({
    'sans-regular': require('../../assets/fonts/PlusJakartaSans-Regular.ttf'),
    'sans-light': require('../../assets/fonts/PlusJakartaSans-Light.ttf'),
    'sans-medium': require('../../assets/fonts/PlusJakartaSans-Medium.ttf'),
    'sans-semibold': require('../../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'sans-bold': require('../../assets/fonts/PlusJakartaSans-Bold.ttf'),
    'sans-extrabold': require('../../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
