import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@store/reduxHook'
import { getHomeContent } from './api/actions';


const Home = () => {

  //FOR TESTING THE REDUX-SAGA PROPER SETUP AND API CALL UNCOMMENT THE BELLOW CODE:
  // const dispatch = useAppDispatch()
  // const { data, loading, error } = useAppSelector(state => state.home);

  // useEffect(() => {
  //   dispatch(getHomeContent(1))
  //   // console.log('data', data)
  // }, [])

  return (
    <View>
      <Text>
        {/* {JSON.stringify(data)} */}
      </Text>
    </View>
  )
}

export default Home