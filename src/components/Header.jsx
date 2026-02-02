import { StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

export default function Header () {
    const IconeBox = ({ children }) => (
        <View style={styles.iconeBox}>
            { children }
        </View>
    )
    
    return(
    <View style={styles.header}>

            <IconeBox>
                <AntDesign size={22} name="plus" color='#fff'/>
            </IconeBox>

        <View style={styles.subHeader}>
            <View style={styles.iconesCentrais}>
            <IconeBox>
                <Entypo size={22} name="lock" color='#fff'/>
            </IconeBox>

            <Text style={styles.title}>marcm_cb</Text>
        
            <IconeBox>
                <Entypo size={22} name="triangle-down" color='#fff'/>
            </IconeBox>

            </View>
            <IconeBox>
                <Feather size={22} name="at-sign" color='#fff' />
            </IconeBox>
            <IconeBox>
                <AntDesign size={22} name="menu" color='#fff'/>
            </IconeBox>
        </View>
    </View>
    )
    
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    subHeader: {
        textAlign: 'center',
        flexDirection: 'row',
        gap: 20
    },
    title: {
        fontSize: 20,
        color: '#fff',

    },
    iconeBox: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
    },
    iconesCentrais:{
        flexDirection: 'row'
    }


    
    })