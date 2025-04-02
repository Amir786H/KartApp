import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'

interface SearchBarProps {
    cartLength: number;
}

const SearchBar:FC<SearchBarProps> = ({cartLength}) => {
  return (
    <View style={styles.container}>
      <Text>SearchBar</Text>
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