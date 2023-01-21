import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import MainNavigation from "./src/navigation/MainNavigation";
import {useEffect, useState} from "react";
import {LoginService} from "./src/app/service/LoginService";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
            <MainNavigation/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
})