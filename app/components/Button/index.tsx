import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import {Colors, Fonts, Spacing} from "../../styles";

interface ButtonProps extends TouchableOpacityProps{
    title: string;
}
export function Button({ title, ...rest }: ButtonProps){
    return(
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            {...rest}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.default.blue,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top:727,
        width:135,
        height:46,
        borderRadius:5,
        shadowRadius:8,
        shadowOpacity: 0.5,
        shadowOffset: { width: 10, height: 5 }
    },
    text: {
        color: Colors.default.white,
        fontSize: Spacing.default.px2,
        fontFamily: Fonts.default.text,
        fontWeight:"500"
    }
});
