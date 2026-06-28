import { StyleSheet, Text, View } from 'react-native'
import {useTheme} from '@/hooks/useTheme';
import React from 'react'

const HomeHeader = () => {
    const colours = useTheme();
  return (
    <View style={{backgroundColor: colours.mainBG }}>
      <Text>HomeHeader</Text>   
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 133,
        width: 375,
    }
})