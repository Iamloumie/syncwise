import { Text as RNText } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);
const Text = styled(RNText);

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-7xl font-sans will-change-variable" style={{ color: 'red' }}>
                Home
            </Text>
            <Text className="text-xl font-light will-change-variable">
                Demo
            </Text>
            <Link href='/onboarding' className="text-7xl font-sans-extrabold mt-4 rounded bg-primary text-white will-change-variable">
                Go to onboarding
            </Link><Link href='/(auth)/sign-in' className="mt-4 rounded bg-primary text-white">
                Sign in
            </Link><Link href='/(auth)/sign-up' className="mt-4 rounded bg-primary text-white">
                Sign Up
            </Link>

            <Link
                href={{
                    pathname: "/subscriptions/[id]",
                    params: { id: "claude" }
                }}
            >
                Claude Max Subcription
            </Link>

        </SafeAreaView>
    );
}