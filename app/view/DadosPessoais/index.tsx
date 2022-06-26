import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { TimeLine } from '../../components/TimeLine';
import { ButtonSelect } from '../../components/ButtonSelect';
import { InputText } from '../../components/InputText';

import styles from './styles';

export function DadosPessoais() {

    const navigation = useNavigation();

    function handleStart() {
       console.log("teste")
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
                    title='Proximo'
                    onPress={handleStart}
                />
            </View>
        </ScrollView>
    );
}