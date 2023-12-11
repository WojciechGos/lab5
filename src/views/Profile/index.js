import {Pressable, Text, View} from "react-native";


export function Profile({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile</Text>
            <Pressable onPress={() => navigation.navigate('Login') }>
                <Text>Logout</Text>
            </Pressable>
        </View>
    );
}
