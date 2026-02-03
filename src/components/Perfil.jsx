import { Image, StyleSheet, Text, View } from "react-native";

export default function Perfil () {
    return (
<View style={styles.container}>
    <Image style={styles.imagem}source={{uri: 'https://i.pinimg.com/1200x/8e/78/7a/8e787a22ce536ed71f17c093c9053044.jpg' }}
/>
           
    <View style={styles.perfil}>
        <Text style={styles.nome}>Marcelo Marino</Text>
                    
        <View style={styles.linha}>
            <View style={styles.coluna}>
                <Text style={styles.infoNumero}>1</Text>
                <Text style={styles.info}>posts</Text>
            </View>
            <View style={styles.coluna}>
                <Text style={styles.infoNumero}>71</Text>
                <Text style={styles.info}>seguidores</Text>
            </View>
            <View style={styles.coluna}>
                <Text style={styles.infoNumero}>114</Text>
                <Text style={styles.info}>seguindo</Text>
            </View>
        </View>
    </View>
</View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 14,        
        flexDirection: 'row'
    },
    imagem: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'rgb(6, 188, 6)',
        borderStyle: 'solid',
    },
    moldura: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    nome: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 6,
        paddingLeft: 16

    },
    linha: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    coluna: {
        alignItems: 'left',
        
    },
    infoNumero: {
        color: '#fff',
        fontWeight: '600'
    },
    info: {
        color: '#fff'
    },
    perfil: {
        flex: 1,
        marginLeft: 10
    }

})