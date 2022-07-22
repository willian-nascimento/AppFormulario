import React, {useState} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import {Button} from '../components/Button';
import {TimeLine} from '../components/TimeLine';
import {InputText} from '../components/InputText';

import api from '../services/api';

import {Colors, Spacing} from "../styles";
import colors from "../styles/colors";
import spacing from "../styles/spacing";


export function DadosPessoais() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    const [itens, setItens] = useState([
        {label: 'Educação', value: 'educacao'},
        {label: 'Saneamento', value: 'saneamento'},
        {label: 'Transporte', value: 'transporte'},
        {label: 'Saúde', value: 'saude'},
        {label: 'Agricultura', value: 'agricultura'},
        {label: 'Esporte e Lazer', value: 'esporteLazer'}
    ]);

    const [date, setDate] = useState({
        nameUser: '',
        quantidadeMoradores: '',
        zonaEleitoral: '',
        fonteRenda: '',
        cep: '',
        cidade: '',
        agrovila: '',
        numeroCasa: '',
    });

    const forms = async () => {
        try {
            // @ts-ignore
            const response = await api.post('api/cadastro/salvar', date, itens);
            console.log(response.request.response);
        } catch (error) {
            alert('erro:' + error)
        }
    };

    const resetDate = () => {
        Array.from(document.querySelectorAll('input')).forEach(
            input => (input.value = ''))
        setDate({
            nameUser: '',
            quantidadeMoradores: '',
            zonaEleitoral: '',
            fonteRenda: '',
            cep: '',
            cidade: '',
            agrovila: '',
            numeroCasa: '',
        });
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titlePerson}>Bem vindo!</Text>
            <TimeLine/>
            <View style={styles.inputView}>
                <InputText
                    style={styles.text}
                    textTitle='Nome'
                    textPlaceholder={''}
                    value={date.nameUser}
                    onChangeText={(text) => setDate({...date, nameUser: text})}/>
                <InputText
                    style={styles.text}
                    textTitle='Zona Eleitoral'
                    textPlaceholder={''}
                    value={date.zonaEleitoral}
                    onChangeText={(text) => setDate({...date, zonaEleitoral: text})}/>
                <InputText
                    style={styles.text}
                    textTitle='Principal fonte de renda da família'
                    textPlaceholder={''}
                    value={date.fonteRenda}
                    onChangeText={(text) => setDate({...date, fonteRenda: text})}/>
                <InputText
                    style={styles.text}
                    textTitle='Para qual estado mudou-se'
                    textPlaceholder={''}
                    value={date.cep}
                    onChangeText={(text) => setDate({...date, cep: text})}/>
                <InputText
                    style={styles.text}
                    textTitle='Cidade'
                    textPlaceholder={''}
                    value={date.cidade}
                    onChangeText={(text) => setDate({...date, cidade: text})}/>
                <InputText
                    style={styles.text}
                    textTitle='Agrovila'
                    textPlaceholder={''}
                    value={date.agrovila}
                    onChangeText={(text) => setDate({...date, agrovila: text})}/>
                <InputText
                    style={styles.text}
                    textTitle='Quantidades de pessoas que votam'
                    textPlaceholder={''}
                    value={date.numeroCasa}
                    onChangeText={(text) => setDate({...date, numeroCasa: text})}/>

                <DropDownPicker
                    multiple={true}
                    open={open}
                    value={value}
                    items={itens}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItens}
                    placeholder='Selecione um item'
                    style={styles.buttonSelect}
                    textStyle={styles.buttonSelectText}
                />
                <View style={styles.CleanSend}>
                    <Button
                        color='default'
                        title='Enviar'
                        onPress={forms}
                    />
                    <Button
                        color='red'
                        title='Limpar'
                        onPress={resetDate}
                    />
                </View>
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
        top: '7%',
        color: colors.white,
        fontWeight: '500',
        fontSize: 60,
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
    buttonSelect: {
        justifyContent: 'center',
        width: '93%',
        height: 50,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        left: '4%',
        top: spacing.px3,
        backgroundColor: Colors.default.blue,
    },
    buttonSelectText: {
        fontWeight: '600',
        fontSize: 13,
        textAlign: 'left',
    },
    CleanSend: {
        right: '30%',
        justifyContent: 'space-around',
        flexDirection: 'row-reverse'
    }
})