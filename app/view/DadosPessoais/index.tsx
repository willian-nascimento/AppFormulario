import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Button} from "../../components/Button";
import {InputText} from "../../components/InputText";
import {Colors, Spacing} from "../../styles";

export function DadosPessoais() {
    return (
        <View style={styles.container}>
            <Text>Dados Pessoais</Text>
            <ScrollView style={styles.inputView}>
                <InputText textTitle="teste1" textPlaceholder="Teste1"/>
                <InputText textTitle="teste2" textPlaceholder="Teste2"/>
                <InputText textTitle="teste3" textPlaceholder="Teste3"/>
                <InputText textTitle="teste4" textPlaceholder="Teste4"/>
                <InputText textTitle="teste5" textPlaceholder="Teste6"/>
                <InputText textTitle="teste6" textPlaceholder="Teste7"/>
                <InputText textTitle="teste7" textPlaceholder="Teste8"/>
                <InputText textTitle="teste8" textPlaceholder="Teste8"/>
            </ScrollView>
            <Button title="Botao Teste"/>
        </View>
    );
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
        marginTop: 180
    }
});
