import {Text, TextInput, TextInputProps, View} from "react-native";
import {styles} from "./styles";

interface InputTextProps extends TextInputProps{
    textTitle: string;
    textPlaceholder: string;
}

export function InputText({textTitle, textPlaceholder, ...rest}: InputTextProps){
    return(
        <View>
            <Text>{textTitle}</Text>
            <TextInput
                style={styles.input}
                placeholder={textPlaceholder}
                {...rest}
            />
        </View>
    );
}
