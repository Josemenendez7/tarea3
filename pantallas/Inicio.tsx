import React from "react";
import { Image, 
StyleSheet, 
TouchableOpacity,
ScrollView, 
View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const Inicio = ({navigation}) =>{
    const handlePress = () =>{
        navigation.navigate('Login');
    };

    return(
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <TouchableOpacity onPress={handlePress}>
                        <Image
                            style={styles.logo}
                            source={require('../imagenes/Splash.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    logo: {
        width: 600,
        height: 800,
        alignSelf: 'center',
    },
});

export default Inicio;