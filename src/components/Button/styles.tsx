import {StyleSheet} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import spacing from "../../styles/spacing";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: spacing.px1,
        height: spacing.px6,
        width: 120
    },
    text: {
        color: colors.white,
        fontSize: spacing.px2,
        fontFamily: fonts.text
    }
});
