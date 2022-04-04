import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { InputText } from '../../components/InputText';

import { Colors, Spacing } from '../../styles';
import { Button } from '../../components/Button';
import { TimeLine } from '../../components/TimeLine/';
import { ButtonSelect } from '../../components/ButtonSelect';
import { useNavigation } from '@react-navigation/native';

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
            <View
                style={styles.line}
            />
            <View style={styles.inputView}>
                <Text style={styles.Atencion}>
                    Atenção Básica
                </Text>
                <View style={styles.select}>
                    <ButtonSelect
                        title={'Educação'} active={true} />
                    <ButtonSelect
                        title={'Saneamento'} active={true} />
                    <ButtonSelect
                        title={'Transporte'} active={true} />
                    <ButtonSelect
                        title={'Saúde'} active={true} />
                    <ButtonSelect
                        title={'Agricultura'} active={true} />
                    <ButtonSelect
                        title={'Esporte e Lazer'} active={true} />
                </View>
                <View style={styles.input}>
                    <InputText
                        style={styles.text}
                        textTitle='Principal fonte de renda da família'
                        textPlaceholder={''} />
                    <InputText
                        style={styles.text}
                        textTitle='Tipo de produção'
                        textPlaceholder={''} />
                </View>
                <View style={styles.viewerButton}>
                    <Button
                        color='gray'
                        title='Voltar'
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
        alignItems: 'center',
        backgroundColor: Colors.default.blue
    },
    line: {
        position: 'absolute',
        width: 100,
        height: 7,
        right: 136,
        backgroundColor: Colors.default.red,
        borderRadius: 15,
        top: 130
    },
    inputView: {
        width: '100%',
        height: '100%',
        borderTopStartRadius: Spacing.default.px4,
        borderTopEndRadius: Spacing.default.px4,
        backgroundColor: Colors.default.white,
        marginTop: 190,
    },
    input: {
        marginTop: '15%'
    },
    titlePerson: {
        position: 'absolute',
        left: Spacing.default.px3,
        top: 100,
        color: Colors.default.white,
        fontWeight: '500',
        fontSize: 14,
    },
    titleAtencion: {
        position: 'absolute',
        left: 140,
        top: 100,
        color: Colors.default.white,
        fontWeight: '500',
        fontSize: 14,
    },
    text: {
        fontWeight: '500',
        fontSize: 13,
        backgroundColor: Colors.default.gray,
        width: '100%',
        height: Spacing.default.px6,
        borderRadius: 10
    },
    Atencion: {
        position: 'absolute',
        left: Spacing.default.px3,
        marginTop: 14,
        fontWeight: '500',
        fontSize: 13,
    },
    viewerButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        right: 130
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
    },
})