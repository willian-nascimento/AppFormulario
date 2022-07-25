import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet  } from 'react-native';

import { Button } from '../components/Button';
import { TimeLine } from '../components/TimeLine';
import { InputText } from '../components/InputText';

import api from '../services/api';

import { Colors, Spacing } from "../styles";
import spacing from "../styles/spacing";
import { SafeAreaView } from 'react-navigation';
import { ButtonSelect } from '../components/ButtonSelect';
import { useStore } from '../services/stores/dataStore';

interface DataProps {
    nameUser: string;
    quantidadeMoradores: string;
    zonaEleitoral: string;
    fonteRenda: string;
    cep: string;
    cidade: string
    agrovila: string;
    numeroCasa: string;
}

interface SelectProps {
    name: string;
    slug: string;
    selected: boolean;
}

export function DadosPessoais() {
    
    const defaultSelect = [
        {name: 'Educação', slug: 'educacao', selected: false },
        {name:'Saneamento', slug: 'saneamento', selected: false},
        {name:'Transporte', slug: 'transporte', selected: false},
        {name:'Saúde', slug: 'saude', selected: false},
        {name:'Agricultura', slug: 'agricultura', selected: false},
        {name:'Esporte e Lazer', slug: 'esporteLazer', selected: false}
    ]
    
    const [items, setItems] = useState<SelectProps[]>(defaultSelect);
    const [data, setData] = useState<DataProps>({} as DataProps);
    const { select, setSelect, countSelect, setCountSelect } = useStore();

    // Função para post
    const forms = async () => {
        
        let filterSelected = {};

        select.map((item) => {
            let selected = JSON.parse(`{ "${item.slug}": ${item.selected} }`);
            filterSelected = { ...filterSelected, ...selected };
        });

        const dataApi = {
            ...data,
            ...filterSelected
        }

        try {
            const response = await api.post('api/cadastro/salvar', dataApi);
            console.log(response.request.response);
            alert('SUCESSO:' + 'Formulário enviado. 😊👌')
        } catch (error) {
            alert('ERRO:' + 'Verifique sua conexão. 😢')
        }
    };

    // função para reset
    const resetDate = () => {
        setData({} as DataProps);
        setItems(defaultSelect);
        setSelect(defaultSelect);
        setCountSelect(-1);
    };

    useEffect(() => {
        if(select.length > 0){
            setItems(select);
        }
    },[countSelect]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView nestedScrollEnabled={true} style={{flex: 1}} contentContainerStyle={{flexGrow:1}}>
                <Text style={styles.titlePerson}>Bem vindo!</Text>
                
                <TimeLine />
                <View style={styles.inputView}>
                    <InputText
                        style={styles.text}
                        textTitle='Nome'
                        textPlaceholder={''}
                        value={data.nameUser}
                        onChangeText={(text) => setData({ ...data, nameUser: text })} />
                    <InputText
                        style={styles.text}
                        textTitle='Zona Eleitoral'
                        textPlaceholder={''}
                        value={data.zonaEleitoral}
                        onChangeText={(text) => setData({ ...data, zonaEleitoral: text })} />
                    <InputText
                        style={styles.text}
                        textTitle='Principal fonte de renda da família'
                        textPlaceholder={''}
                        value={data.fonteRenda}
                        onChangeText={(text) => setData({ ...data, fonteRenda: text })} />
                    <InputText
                        style={styles.text}
                        textTitle='Para qual estado mudou-se'
                        textPlaceholder={''}
                        value={data.cep}
                        onChangeText={(text) => setData({ ...data, cep: text })} />
                    <InputText
                        style={styles.text}
                        textTitle='Cidade'
                        textPlaceholder={''}
                        value={data.cidade}
                        onChangeText={(text) => setData({ ...data, cidade: text })} />
                    <InputText
                        style={styles.text}
                        textTitle='Agrovila'
                        textPlaceholder={''}
                        value={data.agrovila}
                        onChangeText={(text) => setData({ ...data, agrovila: text })} 
                    />
                    <InputText
                        style={styles.text}
                        textTitle='Quantidades de pessoas que votam'
                        textPlaceholder={''}
                        value={data.quantidadeMoradores}
                        onChangeText={(text) => setData({ ...data, quantidadeMoradores: text })} 
                        keyboardType='numeric'
                    />
                    <ButtonSelect 
                        placeholder={
                            countSelect  < 1 ?
                        'selecione um item' :
                        countSelect > 1 ?
                        `${countSelect} itens selecionados` :
                        `${countSelect} item selecionado`
                        }
                        itemSelect={items}
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
                        onPress={(resetDate)}
                    />
                    </View>
                    <View style={{ width: '100%', height: 200 }}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.default.blue,
        paddingTop: 50,
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
        left: Spacing.default.px3,
        top: 0,
        color: Colors.default.white,
        fontWeight: '500',
        fontSize: 60,
    },
    text: {
        fontWeight: '500',
        fontSize: 13,
        backgroundColor: Colors.default.gray,
        width: '100%',
        height:Spacing.default.px6,
        top: 15,
        borderRadius: 10,
        paddingLeft: 15,
    },
    buttonSelect: {
        justifyContent: 'center',
        width:'93%',
        height:50,
        borderRadius:10,
        padding:10,
        alignItems: 'center',
        left:15,
        top: spacing.px3,
        backgroundColor: Colors.default.blue,
    },
    buttonSelectText: {
        fontWeight: '600',
        fontSize: 13,
        textAlign: 'left',
    },
    CleanSend:{
        marginTop: Spacing.default.px10,
        justifyContent: 'space-around',
        flexDirection: 'row-reverse'
    }
})