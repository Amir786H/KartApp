import { View, Text, Alert } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@store/reduxHook'
import { loginOrSignup } from '../api/api'
import { setData } from '../api/slice'
import { navigate } from '@navigation/NavigationUtil'
import { clearCart } from '@modules/cart/api/slice'

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
        if(user?.phone) {
            setNumber(user?.phone)
            setAddress(user?.address)
        }
    },[user])


    const handleLogout = async() => {
        onClose()
        navigate("Home")
        setAddress('')
        setNumber('')
        await dispatch(clearCart())
        await dispatch(setData(null))
    }


    return (
        <View>
            <Text>LoginModal</Text>
        </View>
    )
}

export default LoginModal