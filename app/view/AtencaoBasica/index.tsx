import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { InputText } from "../../components/InputText";

import { Colors, Spacing } from "../../styles";
import { Button } from "../../components/Button";
import { TimeLine } from '../../components/TimeLine/';
import { ButtonSelect } from '../../components/ButtonSelect';
import { useNavigation } from '@react-navigation/native';

import colors from "../../styles/colors";
import spacing from "../../styles/spacing";

export function AtencaoBasica() {

    const navigation = useNavigation();

    function handleBack() {
        // @ts-ignore
        navigation.navigate('DadosPessoais');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titlePerson}>Dados Pessoais</Text>
            <Text style={styles.titleAtencion}>Atenção Básica</Text>
            <TimeLine />
            <View style={styles.inputView}>
                <InputText
                    style={styles.text}
                    textTitle="Principal fonte de renda da família"
                    textPlaceholder={""} />
                <InputText
                    style={styles.text}
                    textTitle="Tipo de produção"
                    textPlaceholder={""} />
                <Text style={styles.Atencion}>
                    Atenção Básica
                </Text>
                <View style={styles.select}>
                    <ButtonSelect
                        title={'Educação'} />
                    <ButtonSelect
                        title={'Educação'} />
                    <ButtonSelect
                        title={'Educação'} />
                    <ButtonSelect
                        title={'Educação'} />
                </View>
                <View style={styles.viewerButton}>
                    <Button
                        color="gray"
                        title="Voltar"
                        onPress={handleBack} />
                    <Button
                        title='Enviar'
                        color={''} />
                </View>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: Colors.default.blue
    },
    inputView: {
        width: "100%",
        borderTopStartRadius: Spacing.default.px4,
        borderTopEndRadius: Spacing.default.px4,
        backgroundColor: Colors.default.white,
        marginTop: 190,
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
    text: {
        fontWeight: "500",
        fontSize: 13,
        backgroundColor: colors.gray,
        width: 340,
        height: spacing.px6,
        top: 15,
        borderRadius: 10
    },
    Atencion: {
        position: 'absolute',
        width: 93,
        left: spacing.px3,
        top: 250,
        fontWeight: '500',
        fontSize: 13
    },
    viewerButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        right: 130
    },
    select: {
        flex: 1,
        flexDirection: 'row-reverse',
    }
})
