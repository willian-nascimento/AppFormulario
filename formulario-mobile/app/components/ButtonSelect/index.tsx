import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Colors } from '../../styles';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

interface ButtonSelectProps extends TouchableOpacityProps {
    title: string;
    active?: boolean;
}

export function ButtonSelect({ title, active = false, ...rest }: ButtonSelectProps) {
   
    return (
        <TouchableOpacity
            style={[styles.container, active && styles.containerActice]}
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
        top: spacing.px7,
        width:110,
        height:46,
        borderRadius:16,
        backgroundColor: Colors.default.red
    },
    containerActice:{
        backgroundColor: 'linear-gradient(113.01deg, #F0F0F0 0%, rgba(195, 37, 48, 0.22) 100%)'
    },
    text: {
        position: 'absolute',
        fontWeight: '600',
        fontSize: 13,
        textAlign: 'center',
        color: colors.white,
    }
})