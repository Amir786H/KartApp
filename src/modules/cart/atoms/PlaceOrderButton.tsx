import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

const PlaceOrderButton = () => {
  return (
    <View>
      <Text>PlaceOrderButton</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFC201',
        padding: 10,
        borderRadius: 6,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    btnText: {
        color: '#222',
        fontWeight: '600',
        fontSize: RFValue(13)
    },
    container:{
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 2,
        borderColor: '#F0F2F5',
        width: '100%',
        padding: 15,
        paddingBottom: Platform.OS === 'ios' ? 30 : 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    price: {
        fontSize: RFValue(16),
        color: '#000',
        fontWeight: '600'
    },
    strikePrice: {
        fontSize: RFValue(11),
        color: '#888',
        textDecorationLine: 'line-through'
    }
})

export default PlaceOrderButton