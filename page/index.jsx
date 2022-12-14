import React from "react";
import {Button, View, Text, StyleSheet, SafeAreaView, Pressable, TouchableHighlight} from "react-native";

export default function Index({navigation}) {

    const styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },

        titleContainer: {
            alignItems: "center",
            textAlign: "center",
        },

        titleText: {
            fontSize: 30,
            fontWeight: "bold"
        },

        titleText2: {
            fontSize: 30
        },

        titleText3: {
            fontSize: 14,
            marginTop: 5
        },

        buttonContainer: {
            marginTop: 30,
            flexDirection: "row"
        },

        buttonDetailContainer: {
            flexDirection: "row"
        },

        customButton: {
            borderColor: "#000",
            borderWidth: 1,
            borderRadius: 20,
            width: 90,
            height: 50,
            marginLeft: 10,
            marginRight: 10
        },

        buttonTextContainer: {
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },

        buttonText: {
            fontWeight: "normal",
            fontSize: 15
        }

    });

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>MNU</Text>
                <Text style={styles.titleText2}>Side Project Lounge</Text>
                <Text style={styles.titleText3}>목포대학교 사이드 프로젝트 라운지</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonDetailContainer}>
                    <TouchableHighlight style={styles.customButton}>
                        <View style={styles.buttonTextContainer}>
                            <Text style={styles.buttonText}>Login</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.customButton} onPress={() => navigation.navigate('Join')}>
                        <View style={styles.buttonTextContainer}>
                            <Text style={styles.buttonText}>Join us!</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    );
}