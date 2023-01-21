import {SafeAreaView, StatusBar, StyleSheet, UIManager} from 'react-native';
import MainNavigation from "./src/navigation/MainNavigation";
import {isIos} from "./src/utils/isIos";
import {UserNameContextProvider} from "./src/context/UserNameContext";

export default function App() {
    if (!isIos() && UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
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