import { Image, StyleSheet, Text, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
export default function Biografia(){
    return(
        <View style={styles.container}>
            <Text style={styles.biografia}>☀️Fortaleza,CE</Text>
            <View style={styles.containerUser}>
                <Feather style={styles.atSign} name="at-sign" />
                <Text style={styles.userName}>marcm_cb</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
    biografia: {
        color: '#fff'
    },
    containerUser: {
        flexDirection: 'row',
        gap: 1
    },
    userName: {
        paddingLeft: 3,
        color: '#fff',
        fontWeight: '600',
        fontSize: 13.5,
        paddingTop: 2
    }, 
    atSign: {
        color: '#fff',
        fontSize: 14,
        paddingTop: 4
    }
})