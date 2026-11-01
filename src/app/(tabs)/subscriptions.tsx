import {Text as RNText} from 'react-native'
import React from 'react'

import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);
const Text = styled(RNText);

const Subscriptions = () => {
    return (
        <SafeAreaView className="flex-1 p-5 bg-background">
            <Text>Subscriptions</Text>
        </SafeAreaView>
    )
}
export default Subscriptions
