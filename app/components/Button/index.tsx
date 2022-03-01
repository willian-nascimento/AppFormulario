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
        borderRadius: Spacing.default.px1,
        height: Spacing.default.px6,
        width: 120
    },
    text: {
        color: Colors.default.white,
        fontSize: Spacing.default.px2,
        fontFamily: Fonts.default.text
    }
});
