import {Text, View} from "react-native";
import {Button} from "../../components/Button";
import {InputText} from "../../components/InputText";
import {styles} from "./styles";

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
