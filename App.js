import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Index from "./page";
import Join from "./page/join/join";

const Stack = createNativeStackNavigator();
const App: () => Node = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Index">
                <Stack.Screen name="Index" component={Index} />
                <Stack.Screen name="Join" component={Join} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
