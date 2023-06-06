import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartScreen from "./screens/StartScreen";
import BaseToastCard from "./components/toasts/BaseToastCard";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#baebae", "#baebeb"]} style={styles.container}>
      <ImageBackground
      
        source={require('./../guessing-game/assets/background.png')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
      <StatusBar style="dark" />

      <StartScreen />
      </ImageBackground>
      {/* <BaseToastCard></BaseToastCard> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.45
  }
});
