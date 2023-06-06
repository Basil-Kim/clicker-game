import React, { useRef, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Animated,
    Button,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const BaseToastCard = () => {
  
    const cardHeight = Dimensions.get("window").height;
    const toastAnim = useRef(new Animated.Value(cardHeight * -1)).current;
    const [status, setStatus] = useState("");

    const successColor = "#6dcf81";
    const successHeader = "Success!";
    const successMessage = "You pressed the success button";
    const failColor = "#bf6060";
    const failHeader = "Failed!";
    const failMessage = "You pressed the fail button";
  

    const toastIn = () => {
        Animated.timing(toastAnim, {
            toValue: cardHeight * 0.3 * -1,
            duration: 250,
            useNativeDriver: true,
        }).start();


    }

    const toastOut = () => {
        setTimeout(()=> {
            Animated.timing(toastAnim, {
                toValue: cardHeight * 0.3 * -1,
                duration: 250,
                useNativeDriver: true,
            }).start();
        }, 2000)
    }

    const toastVanish = () => {
        Animated.timing(toastAnim, {
          toValue: cardHeight * -1,
          duration: 150,
          useNativeDriver: true,
        }).start();
      };
  return (
    <View>
    <Animated.View
      style={[
        styles.toastContainer,
        {
          transform: [{ translateY: toastAnim }],
        },
      ]}
    >
      <View style={styles.toastRow}>
        <AntDesign
          name={status === "success" ? "checkcircleo" : "closecircleo"}
          size={24}
          color={status === "success" ? successColor : failColor}
        />
        <View style={styles.toastText}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            {status === "success" ? successHeader : failHeader}
          </Text>
          <Text style={{ fontSize: 12 }}>
            {status === "success" ? successMessage : failMessage}
          </Text>
        </View>
        <TouchableOpacity onPress={toastVanish}>
          <Entypo name="cross" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </Animated.View>
<View style={{marginTop: 30}}>
    <Button
      title="Success Message"
      onPress={() => {
        setStatus("success");
        toastIn();
      }}
   
    ></Button>

    <Button
      title="Fail Message"
      onPress={() => {
        setStatus("fail");
        toastIn();
      }}
   
    ></Button>
</View>
  </View>
  )
}

export default BaseToastCard

const styles = StyleSheet.create({
    toastContainer: {
      height: 60,
      width: 350,
      backgroundColor: "#f5f5f5",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    toastRow: {
      width: "90%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    toastText: {
      width: "70%",
      padding: 2,
    },
  });