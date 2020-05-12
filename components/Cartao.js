import React from 'react';
import { View, StyleSheet } from 'react-native';


const Cartao = (props) => {

    return(

        <View style={{ ...estilos.cartao, ...props.estilos }}>
            {props.children}
        </View>
    );
};

const estilos = StyleSheet.create({
    cartao: {
        alignItems: 'center',
        shadowColor: 'green',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 6,
        shadowOpacity: 0.32,
        backgroundColor: 'green',
        elevation: 4,
        padding: 20,
        borderRadius: 12
    } 
});

export default Cartao;
