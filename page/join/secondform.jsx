import React, {useEffect, useRef} from "react";
import {StyleSheet, Text, TextInput, View, Animated} from "react-native";

export default function Secondform() {
    const fadeAnim = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 600,
            }
        ).start();
    }, [fadeAnim])

    const styles = StyleSheet.create({
        mainContainer: {
            alignItems: "flex-start",
            justifyContent: "center",
            textAlign: "center",
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30
        },

        titleText: {
            fontSize: 30,
            fontWeight: "bold",
        },

        formContainer: {
            marginTop: 10,
            width: "100%",
        },

        formDetailContainer: {
            marginTop: 20
        },

        formText: {
            fontSize: 15
        },

        formInputContainer: {
            alignItems: "center"
        },

        formInput: {
            width: "100%",
            height: 40,
            marginTop: "3%",
            borderColor: "#000",
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 18
        },

        customButton: {
            borderColor: "#000",
            borderWidth: 1,
            borderRadius: 20,
            width: "100%",
            height: 50,
            marginLeft: 10,
            marginRight: 10
        },

        buttonContainer: {
            marginTop: 30,
            alignItems: "center"

        },

        buttonDetailContainer: {
            flexDirection: "row",

        },

        buttonTextContainer: {
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },

        buttonText: {
            fontWeight: "bold",
            fontSize: 15
        }
    });

    return (
        <>
            <Animated.View style={{...styles.formContainer, opacity: fadeAnim}}>
                <View style={styles.formDetailContainer}>
                    <Text style={styles.formText}>Major</Text>
                    <View style={styles.formInputContainer}>
                        <TextInput style={styles.formInput}/>
                    </View>
                </View>
            </Animated.View>
        </>
    )
}