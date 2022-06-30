import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../components/Button';
import { TimeLine } from '../components/TimeLine';
import { ButtonSelect } from '../components/ButtonSelect';
import { InputText } from '../components/InputText';

import { ClientApi } from '../models/ClientApi';

import { Colors, Spacing } from "../styles";
import colors from "../styles/colors";
import spacing from "../styles/spacing";


export function DadosPessoais() {

    const navigation = useNavigation();

    function handleStart() {
        new ClientApi().conectApi();
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titlePerson}>Dados Pessoais</Text>
            <TimeLine />
            <View style={styles.inputView}>
                <InputText
                    style={styles.text}
                    textTitle='Cidade'
                    textPlaceholder={''} />
                <InputText
                    style={styles.text}
                    textTitle='Agrovila'
                    textPlaceholder={''} />
                <InputText
                    style={styles.text}
                    textTitle='Quantidade de pessoas que residem na casa'
                    textPlaceholder={''} />
                <InputText
                    style={styles.text}
                    textTitle='Quantidade pessoas que não residem no município' textPlaceholder={''} />
                <InputText
                    style={styles.text}
                    textTitle='Para qual estado mudou-se'
                    textPlaceholder={''} />
                <InputText
                    style={styles.text}
                    textTitle='Quantidade de título transferido'
                    textPlaceholder={''} />
                <InputText
                    style={styles.text}
                    textTitle='Quantidades de pessoas que votam'
                    textPlaceholder={''} />
                <InputText
                    style={styles.text}
                    textTitle='Quantidade de pessoas que votam no município'
                    textPlaceholder={''} />
                <View style={styles.select}>
                    <ButtonSelect title={'Educação'} active={true} />
                    <ButtonSelect title={'Saneamento'} active={true} />
                    <ButtonSelect title={'Transporte'} active={true} />
                    <ButtonSelect title={'Saúde'} active={true} />
                    <ButtonSelect title={'Agricultura'} active={true} />
                    <ButtonSelect title={'Esporte e Lazer'} active={true} />
                </View>

                <InputText
                    style={styles.text}
                    textTitle='Principal fonte de renda da família'
                    textPlaceholder={''} />
                <InputText
                    style={styles.text}
                    textTitle='Tipo de produção'
                    textPlaceholder={''} />

                <Button
                    color='default'
                    title='Enviar'
                    onPress={handleStart}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.default.blue,
    },
    inputView: {
        width: '100%',
        height: '100%',
        borderTopStartRadius: Spacing.default.px4,
        borderTopEndRadius: Spacing.default.px4,
        backgroundColor: Colors.default.white,
        marginTop: 190,
    },
    titlePerson: {
        position: 'absolute',
        left: spacing.px3,
        top: 100,
        color: colors.white,
        fontWeight: '500',
        fontSize: 14,
    },
    titleAtencion: {
        position: 'absolute',
        left: 140,
        top: 100,
        color: colors.white,
        fontWeight: '500',
        fontSize: 14,
    },
    text: {
        fontWeight: '500',
        fontSize: 13,
        backgroundColor: colors.gray,
        width: '100%',
        height: spacing.px6,
        top: 15,
        borderRadius: 10
    },
    button: {
        top: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    select: {
        position: 'relative',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        width: '100%',
        left: -115,
        justifyContent: 'space-evenly',
    }
})