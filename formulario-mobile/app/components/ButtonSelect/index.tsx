import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Colors } from '../../styles';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

interface ButtonSelectProps extends TouchableOpacityProps {
    title: string;
    active?: boolean;
}

export const ButtonSelect = (props: any) => {
    const [choosedList, setChoosedList] = useState([]);
    const [customList, setCustomList] = useState([]);
    const [dataList, setDataList] = useState([props.data]);

    useEffect(() => {
        setDataList(props.data);
    },[props.data]);

    useEffect(() => {
        if (dataList){
            let dataListNow = dataList;
            dataListNow.map(item => {
                item.checked = false;
            });
            setCustomList(dataListNow);
        }
    }, [dataList]);

     const onPressItem = (id: any) => {
        let customListNow = [...customList];
        for(const item in customListNow){
            if (customListNow[item].id === id) {
                
                if (customListNow[item].checked === false){
                    customListNow[item].checked = true;
                    let itemChoosed = customListNow[item];

                    setChoosedList([...choosedList, itemChoosed]);
                } else {
                    customListNow[item].checked = false;
                    let choosedListNow = choosedList.filter(item => item.id);

                    setChoosedList(choosedListNow);
                }
            }
        }
        setCustomList(customListNow);
     };


     useEffect(() => {
        props.onChageDatasChoosed(choosedList);
     }, [choosedList]);

    const renderSelectItem = (item, id) => {
        return (
            <TouchableOpacity
                style={styles.container}
                activeOpacity={0.7}
                onPress={() => onPressItem(item.item.id)}>
                <Text style={styles.text}>
                    {item.item.label}
                </Text>
            </TouchableOpacity>
        );
    }
    
    return (
        <FlatList
            keyExtractor={(item, index) => index.toString()}
            extraData={props.extraData}
            data={customList}
            renderItem={(item, id) => renderSelectItem(item, id)}            
        />
    );
};

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: 115,
        top: spacing.px7,
        width:110,
        height:46,
        borderRadius:13,
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