import { StyleSheet, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function Icones() {
    return (
        <View style={styles.container}>
        <MaterialCommunityIcons name="grid" style={styles.icone}  />
        <AntDesign name="retweet" style={styles.icone} />
        <MaterialCommunityIcons name="account-box" style={styles.icone}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    icone: {
        fontSize: 25,
        color:'#ffffff'
    }
})