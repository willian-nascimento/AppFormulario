import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

import { Button } from '../components/Button';
import { TimeLine } from '../components/TimeLine';
import { ButtonSelect } from '../components/ButtonSelect';
import { InputText } from '../components/InputText';

import api from '../services/api';

import { Colors, Spacing } from "../styles";
import colors from "../styles/colors";
import spacing from "../styles/spacing";


export function DadosPessoais() {

    const [date, setDate] = useState({
        Cidade:'',
        Agrovila: '',
        PessoasCasa: '',
        PessoasMunicipios: '',
        Estado: '',
        Titulo: '',
        PessoasVotam: '',
        VotoMunicipio: '',
        RendaFamiliar: '',
        Producao: '',
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
            <Text style={styles.titlePerson}>Dados Pessoais</Text>
            <TimeLine />

            <View style={styles.inputView}>

                <InputText
                    style={styles.text}
                    textTitle='Cidade'
                    textPlaceholder={''}
                    value={date.Cidade}
                    onChangeText={(text) => setDate({ ...date, Cidade : text })} />
                <InputText
                    style={styles.text}
                    textTitle='Agrovila'
                    textPlaceholder={''}
                    value={date.Agrovila}
                    onChangeText={(text) => setDate({ ...date, Agrovila : text })} />
                <InputText
                    style={styles.text}
                    textTitle='Quantidade de pessoas que residem na casa'
                    textPlaceholder={''}
                    value={date.PessoasCasa}
                    onChangeText={(text) => setDate({ ...date, PessoasCasa : text })} />
                <InputText
                    style={styles.text}
                    textTitle='Quantidade pessoas que não residem no município'
                    textPlaceholder={''}
                    value={date.PessoasMunicipios}
                    onChangeText={(text) => setDate({ ...date, PessoasMunicipios : text})} />
                <InputText
                    style={styles.text}
                    textTitle='Para qual estado mudou-se'
                    textPlaceholder={''}
                    value={date.Estado}
                    onChangeText={(text) => setDate({ ...date, Estado : text})} />
                <InputText
                    style={styles.text}
                    textTitle='Quantidade de título transferido'
                    textPlaceholder={''}
                    value={date.Titulo}
                    onChangeText={(text) => setDate({ ...date, Titulo : text })} />
                <InputText
                    style={styles.text}
                    textTitle='Quantidades de pessoas que votam'
                    textPlaceholder={''}
                    value={date.PessoasVotam}
                    onChangeText={(text) => setDate({ ...date, PessoasVotam : text })} />
                <InputText
                    style={styles.text}
                    textTitle='Quantidade de pessoas que votam no município'
                    textPlaceholder={''}
                    value={date.VotoMunicipio}
                    onChangeText={(text) => setDate({ ...date, VotoMunicipio : text })} />
                <InputText
                    style={styles.text}
                    textTitle='Principal fonte de renda da família'
                    textPlaceholder={''}
                    value={date.RendaFamiliar}
                    onChangeText={(text) => setDate({ ...date, RendaFamiliar : text })} />
                <InputText
                    style={styles.text}
                    textTitle='Tipo de produção'
                    textPlaceholder={''}
                    value={date.Producao}
                    onChangeText={(text) => setDate({ ...date, Producao : text })} />

                <View style={styles.select}>
                    <ButtonSelect title={'Todos'} active={false} />
                    <ButtonSelect title={'Educação'} active={true} />
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