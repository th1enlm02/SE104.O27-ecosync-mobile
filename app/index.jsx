import { router } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from '../components';

export default function App() {
    return (
        <SafeAreaView className="bg-[#CFE1B9] h-full items-center justify-center px-5">
            <CustomButton
                title="Click to continue"
                handlePress={() => router.push("/register")}
                containerStyles="w-full"
            />
        </SafeAreaView>
    );
}