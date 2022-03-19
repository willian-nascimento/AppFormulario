import React from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { InputText } from "../../components/InputText";
import { useNavigation } from '@react-navigation/native';

import { Button } from "../../components/Button";
import { TimeLine } from "../../components/TimeLine/index";
import { Colors, Spacing } from "../../styles";


import colors from "../../styles/colors";
import spacing from "../../styles/spacing";


export function DadosPessoais() {
    
    const navigation = useNavigation();
    function handleStart() {
        navigation.navigate("AtencaoBasica");
    }
    
    return (
        <View style={styles.container}>
            <Text 
                style={styles.titlePerson}
            >
                    Dados Pessoais
            </Text>
            <Text 
                style={styles.titleAtencion}
            >
                    Atenção Básica
            </Text>
            <TimeLine/>
            <ScrollView 
                style={styles.inputView}
            >
                <InputText
                    style={styles.text} 
                    textTitle="Cidade" 
                    textPlaceholder={""} />
                <InputText
                    style={styles.text} 
                    textTitle="Agrovila" 
                    textPlaceholder={""} />
                <InputText
                    style={styles.text} 
                    textTitle="Quantidade de pessoas que residem na casa" 
                    textPlaceholder={""} />
                <InputText
                    style={styles.text} 
                    textTitle="Quantidade pessoas que não residem no município" textPlaceholder={""} />
                <InputText
                    style={styles.text} 
                    textTitle="Para qual estado mudou-se" 
                    textPlaceholder={""} />
                <InputText
                    style={styles.text} 
                    textTitle="Quantidade de título transferido" 
                    textPlaceholder={""} />
                <InputText
                    style={styles.text} 
                    textTitle="Quantidades de pessoas que votam" 
                    textPlaceholder={""} />
                <InputText
                    style={styles.text} 
                    textTitle="Quantidade de pessoas que votam no município" 
                    textPlaceholder={""} />                
            </ScrollView>
            <View style={styles.button}>
            <Button 
                    title="Proximo"
                    onPress={handleStart}
                />
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.default.blue,
    },
    inputView: {
        width: "100%",
        height:"100%",
        borderTopStartRadius: Spacing.default.px4,
        borderTopEndRadius: Spacing.default.px4,
        backgroundColor: Colors.default.white,
        marginTop: 190,
        marginBottom: -90
    },
    titlePerson: {
        position: "absolute",
        width: spacing.px10,
        left: spacing.px3,
        top: spacing.px10,
        color: colors.white,
        fontWeight: "500",
        fontSize: 14,
    },
    titleAtencion: {
        position: "absolute",
        width: spacing.px10,
        left: 140,
        top: spacing.px10,
        color: colors.white,
        fontWeight: "500",
        fontSize: 14,
    },
    text:{
        fontWeight:"500",
        fontSize:13,
        backgroundColor: colors.gray,
        width: 340,
        height:spacing.px6,
        top: 15,
        borderRadius: 10
    },
    button: {
        marginTop: -90,
        justifyContent: 'center',
        alignItems: 'center',
    }
})