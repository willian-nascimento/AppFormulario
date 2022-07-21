import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Colors, Fonts, Spacing} from '../../styles';
import spacing from '../../styles/spacing';

interface ButtonProps extends TouchableOpacityProps{
    title: string;
    color: string;
}

export function Button({ title, color, ...rest }: ButtonProps){
    function setBackgrundColor(color: string){
        if(color == 'red'){
            return { backgroundColor: Colors.default.red}
        }else{
            return {backgroundColor: Colors.default.blue}
        }
    }

    return(
        <TouchableOpacity
            style={[styles.container, setBackgrundColor(color)]}
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
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: 115,
        top: spacing.px10,
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
        fontWeight:'500'
    }
});
