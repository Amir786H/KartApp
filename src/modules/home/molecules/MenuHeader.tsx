import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { FC, useState } from 'react'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { menuData } from '@utils/db';
import MenuItem from '../atoms/MenuItem';
import Icon from '@components/atoms/Icon';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '@utils/Constants';

const MenuHeader: FC<{ scrollY: any }> = ({ scrollY }) => {

    const [focusedIndex, setFocusedIndex] = useState(0);

    const opacityFadingStyles = useAnimatedStyle(() => {
        const opacity = interpolate(scrollY.value, [0, 80], [1, 0])
        return {
            opacity
        }
    })



    return (
        <Animated.View style={[styles.container, opacityFadingStyles]}>
            <SafeAreaView />
            <View style={styles.flexRow}>
                {menuData.map((item, index) => (
                    <MenuItem
                        key={index}
                        item={item}
                        isFocused={focusedIndex === index}
                        onSelect={() => setFocusedIndex(index)}
                    />
                ))}
            </View>

            {/* Address */}
            <View style={styles.addressContainer}>
                <Icon size={16} name='home' iconFamily='Ionicons'/>
                <Text style={styles.homeText}>HOME</Text>
                <Text numberOfLines={1} style={styles.addressText}>43, San Fransisco, USA, Amsterdam</Text>
                <Icon size={16} name='chevron-forward-sharp' iconFamily='Ionicons'/>

           </View>

        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    addressText: {
        flex: 1,
        fontSize: RFValue(9),
        color: Colors.text
    },
    homeText: {
        marginHorizontal: 5,
        fontWeight: 'bold',
        color: Colors.text,
        fontSize: RFValue(10)
    }
})

export default MenuHeader