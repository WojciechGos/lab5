import {Text, View, Pressable, TextInput} from "react-native";
import {styles} from "./style";
import { useState } from "react";

export function Login({ navigation }) {
const [login, setLogin] = useState("")
const [password, setPassword] = useState("")

    const compare = ()=>{
        if(login.match(password))
            navigation.navigate('TabNav')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Text>
                Login
            </Text>
            <TextInput
                style = {styles.input}
                onChangeText={setLogin}
                value={login}
            />
                        <Text>
                password
            </Text>
            <TextInput
                style = {styles.input}
                onChangeText={setPassword}
                value={password}
            />

            <Pressable style={styles.loginBtn} onPress={() => compare() }>
                <Text style={styles.loginText}>Login</Text>
            </Pressable>
        </View>
    );
}
