import {Text, View, Pressable, TextInput} from "react-native";
import { useState } from "react";
const Add = ({ navigation })=>{

    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [price, setPrice] = useState()
    const [amount, setAmount] = useState("")

    const addNew = ()=>{
        navigation.navigate('List', {
    
                name: name,
                price: price,
                amount: amount
            
        })
    }

    return (
        <View>
            <Text>
                id
            </Text>
            <TextInput
                style = {styles.input}
                onChangeText={setId}
                value={id}
            />
            <Text>
                name
            </Text>
            <TextInput
                style = {styles.input}
                onChangeText={setName}
                value={name}
            />
                        <Text>
                price
            </Text>
            <TextInput
                style = {styles.input}
                onChangeText={setPrice}
                value={price}
            />
                        <Text>
                amount
            </Text>
            <TextInput
                style = {styles.input}
                onChangeText={setAmount}
                value={amount}
            />

        <Pressable style={styles.loginBtn} onPress={() => addNew() }>
                <Text style={styles.loginText}>add</Text>
            </Pressable>
        </View>
    )

}

import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    loginBtn: {
        padding: 25,
        backgroundColor: '#000',
        width: 300,
        marginBottom: 25
    },
    loginText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:300
      },
})

export default Add