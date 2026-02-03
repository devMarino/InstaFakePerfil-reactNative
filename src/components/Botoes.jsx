import { useState } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
export default function Botoes(){
    const [clickAtual, setClick] = useState(false)

    const clickBotao = () => {
        setClick(!clickAtual)
    }
    return(
        <View style={styles.container}>
            <Pressable
            onPress = {clickBotao}
            style={[ styles.btn,
            clickAtual ? styles.seguindo : styles.seguir
            ]}

            >
            <Text style={styles.text}>
            {clickAtual ? 'Seguindo' : 'Seguir'}
            </Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 12,
        padding: 1,
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    btn: {
        width: '100%',
        backgroundColor:'#036acbf9',
        borderRadius: 5,
        paddingVertical: 5 
        
    }

})