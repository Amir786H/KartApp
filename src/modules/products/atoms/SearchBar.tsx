import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { FC } from 'react'
import Icon from '@components/atoms/Icon';
import { goBack, navigate } from '@navigation/NavigationUtil';

interface SearchBarProps {
    cartLength: number;
}

const SearchBar: FC<SearchBarProps> = ({ cartLength }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => goBack()}>
                <Icon name="arrow-left" iconFamily='MaterialCommunityIcons' size={30} color="#000" />
            </Pressable>

            <View style={styles.searchContainer}>
                <Icon name="search" iconFamily='MaterialIcons' size={20} color="#000" />
                <TextInput
                    placeholder="Search Products"
                    placeholderTextColor="#666"
                    style={styles.searchInput}
                />
            </View>

            <Icon name='heart-outline' iconFamily='Ionicons' color='#000' size={24} />

            <Pressable style={styles.cartContainer} onPress={() => navigate('Cart')}>
                <Icon name='cart-sharp' iconFamily='Ionicons' color='#000' size={24} />
                {cartLength > 0 &&
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            {cartLength}
                        </Text>
                    </View>
                }
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 5
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 10,
        width: '70%',
        marginHorizontal: 10,
    },
    searchIcon: {
        marginRight: 15,
    },
    searchInput: {
        flex: 1,
        height: 40,
        color: '#000'
    },
    cartContainer: {
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -6,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    }
})

export default SearchBar