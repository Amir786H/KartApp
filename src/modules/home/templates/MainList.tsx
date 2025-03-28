import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { dynamicDashboardData as fullData } from '@utils/db'

const PAGE_SIZE = 4;

const MainList:FC<{scrollYGlobal: any}> = ({scrollYGlobal}) => {
  return (
    <View>
      <Text>MainList</Text>
    </View>
  )
}

export default MainList