import { Image, StyleSheet, View } from "react-native";

export default function Grid(){
    return(
        <View style={styles.container}>
        <Image style={styles.imagem}source={{uri: '' }}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }

})