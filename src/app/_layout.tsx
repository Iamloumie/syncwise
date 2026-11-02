import {Stack} from "expo-router";
import * as Font from 'expo-font';
import {useEffect, useState} from 'react';
import "@/global.css"

export const unstable_settings = {
  anchor: "(tabs)",
};

// Google Fonts URLs for Plus Jakarta Sans
const FONT_URLS = {
  'PlusJakartaSans-Regular': 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NSg.ttf',
  'PlusJakartaSans-Light': 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_907NSg.ttf',
  'PlusJakartaSans-Medium': 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_m07NSg.ttf',
  'PlusJakartaSans-SemiBold': 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNSg.ttf',
  'PlusJakartaSans-Bold': 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNSg.ttf',
  'PlusJakartaSans-ExtraBold': 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_KUnNSg.ttf',
};

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        console.log('Loading fonts...');
        await Font.loadAsync(FONT_URLS);
        console.log('✅ Fonts loaded');
        setFontsLoaded(true);
      } catch (e) {
        console.log('❌ Font error:', e);
        setFontsLoaded(true);
      }
    }
    load();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
