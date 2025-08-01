import { View, Text, Alert, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@store/reduxHook'
import { loginOrSignup } from '../api/api'
import { setData } from '../api/slice'
import { navigate } from '@navigation/NavigationUtil'
import { clearCart } from '@modules/cart/api/slice'
import { Colors } from '@utils/Constants'

export const modalStyles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    closeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: Colors.active,
        padding: 2,
        borderRadius: 50,
    },
    keyboardAvoidingView: {
        flex: 1
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
})

const LoginModal: FC<{ visible: boolean, onClose: () => void }> = ({ visible, onClose }) => {

    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.account.user) as any;
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')

    const handleLogin = async () => {
        const data = await loginOrSignup(number, address)
        if (data) {
            dispatch(setData(data))
            onClose()
        } else {
            Alert.alert("There was an error")
        }
    }

    useEffect(() => {
        if (user?.phone) {
            setNumber(user?.phone)
            setAddress(user?.address)
        }
    }, [user])


    const handleLogout = async () => {
        onClose()
        navigate("Home")
        setAddress('')
        setNumber('')
        await dispatch(clearCart())
        await dispatch(setData(null))
    }


    return (
        <Modal
            visible={visible}
            animationType='slide'
            transparent={true}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={modalStyles.modalContainer}>
                    <KeyboardAvoidingView style={modalStyles.keyboardAvoidingView}
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    >
                        <ScrollView contentContainerStyle={modalStyles.scrollViewContent}>

                        </ScrollView>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default LoginModal