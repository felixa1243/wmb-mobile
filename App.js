import {SafeAreaView, StatusBar, StyleSheet, UIManager} from 'react-native';
import MainNavigation from "./src/navigation/MainNavigation";
import {isIos} from "./src/utils/isIos";
import {UserNameContextProvider} from "./src/context/UserNameContext";
import {useFonts} from "expo-font";

export default function App() {
    if (!isIos() && UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    const [isLoaded] = useFonts({
        'Great-Vibes': require('./assets/fonts/Great_Vibes/GreatVibes-Regular.ttf'),
        'Poppins': require('./assets/fonts/Poppins/Poppins-Regular.ttf')
    })
    if (!isLoaded) {
        return null
    }
    return (
        <UserNameContextProvider>
            <SafeAreaView style={styles.container}>
                <StatusBar style="auto"/>
                <MainNavigation/>
            </SafeAreaView>
        </UserNameContextProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
})