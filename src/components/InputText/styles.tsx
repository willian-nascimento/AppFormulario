import {StyleSheet} from "react-native";
import colors from "../../styles/colors";
import spacing from "../../styles/spacing";

export const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: colors.blue,
        color: colors.red,
        fontSize: spacing.px2,
        marginTop: spacing.px6,
        padding: spacing.px1,
        borderRadius: spacing.px1,
        textAlign: 'center',
        width: 260
    }
});
