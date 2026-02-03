import { Image, StyleSheet, View } from "react-native";

export default function Grid(){
    return(
        <View style={styles.container}>
        <Image style={styles.imagem}source={{uri: 'https://i.pinimg.com/1200x/a0/8c/ff/a08cffd62ee68a396432eee4ef2efa5e.jpg' }}
        />
        <Image style={styles.imagem}source={{uri: 'https://i.pinimg.com/1200x/6c/af/66/6caf66249213409ea3c0692e3e75c783.jpg' }}
        />
        <Image style={styles.imagem}source={{uri: 'https://i.pinimg.com/1200x/87/f7/3b/87f73b03a2e9aade020d0018085c4505.jpg' }}
        />
        <Image style={styles.imagem}source={{uri: 'https://i.pinimg.com/736x/84/11/b6/8411b6f512872410ee042d5b09811fa1.jpg' }}
        />
        <Image style={styles.imagem}source={{uri: 'https://i.pinimg.com/1200x/82/05/6d/82056da55dc28c7bc0ade232e730bc7f.jpg' }}
        />
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imagem:{
        borderStyle: 'solid',
        borderColor: '#ffffff17',
        borderWidth: 1,
        width: '33%',
        height: 200
    } 

})