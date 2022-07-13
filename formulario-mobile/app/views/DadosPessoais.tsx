import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

import { Button } from '../components/Button';
import { TimeLine } from '../components/TimeLine';
import { ButtonSelect } from '../components/ButtonSelect';
import { InputText } from '../components/InputText';

import api from '../services/api';

import { Colors, Spacing } from '../styles';
import colors from '../styles/colors';
import spacing from '../styles/spacing';

const [button, setbutton] = useState([
    {
        id: '1',
        label: 'Educação',
        checked: false,
    },
    {
        id: '2',
        label: 'Saneamento',
        checked: false,
    },
    {
        id: '3',
        label: 'Transporte',
        checked: false,
    },
    {
        id: '4',
        label: 'Saúde',
        checked: false,
    },
    {
        id: '5',
        label: 'Agricultura',
        checked: false,
    },
    {
        id: '6',
        label: 'Esporte e Lazer',
        checked: false,
    },
]);

export function DadosPessoais() {

    const [date, setDate] = useState({
        nameUser: '',
        quantidadeMoradores: '',
        zonaEleitoral: '',
        fonteRenda: '',
        cep: '',
        cidade: '',
        agrovila: '',
        numeroCasa: '',
        educacao: '',
        saneamento: '',
        transporte: '',
        saude: '',
        agricultura: '',
        esporteLazer: ''
    });

    const forms = async () => {
        try {

            console.log(date);

            const response = await api.post('api/cadastro/salvar', date);
            const res = response.data;


            if (res.error) {
                alert(res.message)
                return false;
            } else {
                console.log(date);
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titlePerson}>Bem vindo!</Text>
            <TimeLine />

            <View style={styles.inputView}>
                <InputText
                    style={styles.text}
                    textTitle='Nome'
                    textPlaceholder={''}
                    value={date.nameUser}
                    onChangeText={(text) => setDate({ ...date, nameUser: text })} />
                <InputText
                    style={styles.text}
                    textTitle='Zona Eleitoral'
                    textPlaceholder={''}
                    value={date.zonaEleitoral}
                    onChangeText={(text) => setDate({ ...date, zonaEleitoral: text })} />
                <InputText
                    style={styles.text}
                    textTitle='Principal fonte de renda da família'
                    textPlaceholder={''}
                    value={date.fonteRenda}
                    onChangeText={(text) => setDate({ ...date, fonteRenda: text })} />
                <InputText
                    style={styles.text}
                    textTitle='Para qual estado mudou-se'
                    textPlaceholder={''}
                    value={date.cep}
                    onChangeText={(text) => setDate({ ...date, cep: text })} />
                <InputText
                    style={styles.text}
                    textTitle='Cidade'
                    textPlaceholder={''}
                    value={date.cidade}
                    onChangeText={(text) => setDate({ ...date, cidade: text })} />
                <InputText
                    style={styles.text}
                    textTitle='Agrovila'
                    textPlaceholder={''}
                    value={date.agrovila}
                    onChangeText={(text) => setDate({ ...date, agrovila: text })} />
                <InputText
                    style={styles.text}
                    textTitle='Quantidades de pessoas que votam'
                    textPlaceholder={''}
                    value={date.numeroCasa}
                    onChangeText={(text) => setDate({ ...date, numeroCasa: text })} />

                <View style={styles.select}>

                    <ButtonSelect 
                    data={button}
                    onChageDatasChoosed={ (button: any) => 
                    console.log('dados', button)}
                    title={'Educação'} active={true} />
                    <ButtonSelect title={'Saneamento'} active={true} />
                    <ButtonSelect title={'Transporte'} active={true} />
                    <ButtonSelect title={'Saúde'} active={true} />
                    <ButtonSelect title={'Agricultura'} active={true} />
                    <ButtonSelect title={'Esporte e Lazer'} active={true} />
                </View>

                <Button
                    color='default'
                    title='Enviar'
                    onPress={forms}
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
        top: 0,
        color: colors.white,
        fontWeight: '500',
        fontSize: 60,
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
    select: {
        position: 'relative',
        flex: 0.6,
        padding: 9,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        width: '100%',
        left: -115,
        justifyContent: 'space-between',
    }
})