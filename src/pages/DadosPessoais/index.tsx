import {StyleSheet, Text, View} from "react-native";
import {Button} from "../../components/Button";
import {InputText} from "../../components/InputText";

export function DadosPessoais() {
    return (
        <View style={styles.container}>
            <Text>Teste</Text>
            <InputText textTitle="teste1" textPlaceholder="Teste1" />
            <InputText textTitle="teste2" textPlaceholder="Teste2" />
            <Button title="teste"/>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    }
});
