import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import MainButton from '../components/buttons/MainButton'
import { createButton } from '../components/buttons/helpers/buttonFunctions'



const StartScreen = () => {
  const [mainButtonColor, setMainButtonColor] = useState<string>('#baebeb')
  const submitButtonContent = createButton(mainButtonColor, 'Submit')
  const resetButtonContent = createButton(mainButtonColor, 'Reset')




  return (
    <View style={styles.inputContainer}>
      
      <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false}/>
      <View style={styles.buttons}>
      <MainButton buttonProps={resetButtonContent}/>
      <MainButton buttonProps={submitButtonContent}/>
      </View>
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({

  inputContainer: {
    marginTop: 45,
    marginHorizontal: 24,
    padding: 26,
    backgroundColor: '#baebae',
    borderRadius: 8,
    shadowColor: 'black',
    // android-only shadow setting
    elevation: 1,
    // iOS shadow setting
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
    
   
  },

  buttons: {
    flexDirection: 'row'
  },

  numberInput: {
   
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  
  }

  
})