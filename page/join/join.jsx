import React, {useEffect, useRef, useState} from "react";
// import {Icon} from "react-native-vector-icons/index";
import {SafeAreaView, View, StyleSheet, Text, TextInput, TouchableHighlight, Animated} from "react-native";
import Firstform from "./firstform";
import Secondform from "./secondform";

export default function Join({navigation}) {
    const [formState, setFormState] = useState({page: 0});

    const [formData, setForm] = useState({
        email: "",
        nickname: "",
        password: "",
        password2: "",
    })

    let formContent = {
        0: <Firstform/>,
        1: <Secondform/>
    };

    function onClick() {
        setFormState({
            ...formState,
            page: formState.page + 1

        })

    }

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
            width: formState.page === 0 ? "100%" : "50%",
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

    const button = <View style={styles.buttonContainer}>
        <View style={styles.buttonDetailContainer}>
            <TouchableHighlight style={styles.customButton} onPress={onClick}>
                <View style={styles.buttonTextContainer}>
                    <Text style={styles.buttonText}>Next</Text>
                </View>
            </TouchableHighlight>
        </View>
    </View>;

    const button2 = <View style={styles.buttonContainer}>
        <View style={styles.buttonDetailContainer}>
            <TouchableHighlight style={styles.customButton}
                                onPress={() => setFormState({...formState, page: formState.page - 1})}>
                <View style={styles.buttonTextContainer}>
                    <Text style={styles.buttonText}>Previous</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.customButton} onPress={onClick}>
                <View style={styles.buttonTextContainer}>
                    <Text style={styles.buttonText}>Submit</Text>
                </View>
            </TouchableHighlight>
        </View>
    </View>;

    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <Text style={styles.titleText}>Create your account</Text>
                {formContent[formState.page]}
                <View style={styles.formContainer}>
                    {formState.page === 0 ? button : button2}
                </View>
            </View>
        </SafeAreaView>
    );
}