import "@/global.css"
import {Text, View} from "react-native";
import {Link} from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-success">
                Welcome to Syncwise, the first mobile App to be built and Launched by Loumie!
            </Text>
            <Link href='/onboarding' className="mt-4 rounded bg-primary text-white">
                Go to onboarding
            </Link><Link href='/(auth)/sign-in' className="mt-4 rounded bg-primary text-white">
                Sign in
            </Link><Link href='/(auth)/sign-up' className="mt-4 rounded bg-primary text-white">
                Sign Up
            </Link>

        </View>
    );
}