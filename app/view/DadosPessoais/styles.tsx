import { StyleSheet } from "react-native";
import { Colors, Spacing } from "../../styles";
import colors from "../../styles/colors";
import spacing from "../../styles/spacing";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.default.blue,
    },
    inputView: {
        width: '100%',
        height: '100%',
        borderTopStartRadius: Spacing.default.px4,
        borderTopEndRadius: Spacing.default.px4,
        backgroundColor: Colors.default.white,
        marginTop: 190,
    },
    titlePerson: {
        position: 'absolute',
        left: spacing.px3,
        top: 100,
        color: colors.white,
        fontWeight: '500',
        fontSize: 14,
    },
    titleAtencion: {
        position: 'absolute',
        left: 140,
        top: 100,
        color: colors.white,
        fontWeight: '500',
        fontSize: 14,
    },
    text: {
        fontWeight: '500',
        fontSize: 13,
        backgroundColor: colors.gray,
        width: '100%',
        height: spacing.px6,
        top: 15,
        borderRadius: 10
    },
    button: {
        top: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    select: {
        position: 'relative',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        width: '100%',
        left: -115,
        justifyContent: 'space-evenly',
    }
})

export default styles;