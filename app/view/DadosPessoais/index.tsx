import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Button} from "../../components/Button";
import {InputText} from "../../components/InputText";

export function DadosPessoais() {
    return (
        <View style={styles.container}>
            <Text>Teste</Text>
            <ScrollView>
                <InputText textTitle="teste1" textPlaceholder="Teste1"/>
                <InputText textTitle="teste2" textPlaceholder="Teste2"/>
                <InputText textTitle="teste3" textPlaceholder="Teste3"/>
                <InputText textTitle="teste4" textPlaceholder="Teste4"/>
                <InputText textTitle="teste5" textPlaceholder="Teste6"/>
                <InputText textTitle="teste6" textPlaceholder="Teste7"/>
                <InputText textTitle="teste7" textPlaceholder="Teste8"/>
                <InputText textTitle="teste8" textPlaceholder="Teste8"/>
            </ScrollView>
            <Button title="teste"/>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    }
});
