import {Text, View, Pressable, TextInput} from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
const List = ({ route, navigation })=>{
    const [list, setList] = useState([{id:1, name:"PS5", price:"123", amount:12}, {id:2, name:"zakupy" ,price:"123", amount:12}, {id:3, name:"123",  price:"123", amount:12}])

    const {id, name, price, amount} = route.params

    useEffect(()=>{
        setList(prev => [...prev, {id: id, name:name, price:price, amount:amount}])
    },[name])
    return (
        <View>

            {
                list.map(listItem=>(
                    <ListItem name={listItem.name} price={listItem.price} amount={listItem.amount} key={listItem.id}/>
                ))
            }

        </View>
    )
}

const ListItem = ({name, price, amount})=>{
    return (
    <>
        <Text>
            {name}
        </Text>
                <Text>
                {price}
            </Text>
                    <Text>
                    {amount}
                </Text>

    </>
        
    )
}




export const styles = StyleSheet.create({
    registerBtn: {
        padding: 25,
        backgroundColor: '#000',
        width: 300,
        marginBottom: 25
    },
    registerText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25
    }
    ,

})

export default List