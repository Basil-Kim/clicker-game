import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { newShade } from './helpers/buttonFunctions'

type MainButtonProps = {
    buttonProps: GeneralButton
}

const MainButton = (props: MainButtonProps) => {
    
  const { buttonProps } = props

  const { color, text, onPress } = buttonProps

  const altColor = newShade(color, -10)


  const onPressHandler = () => {
    onPress()
  }

  return (


      <Pressable 
        style={({pressed}) => [styles.button, {backgroundColor: pressed ? `${color}` : `${altColor}`}]}
        onPress={onPressHandler}
        >
          
        <Text>{`${text}`}</Text>
      </Pressable>



  )
}

const styles = StyleSheet.create({

  button: {
    width: 125,
    height: 40,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 5
  },
  
})

export default MainButton;