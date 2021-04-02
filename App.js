import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  Dimensions,
  StyleSheet, 
  Text, 
  View, 
  TouchableHighlight, 
  Image, 
  SafeAreaView, 
  Button,
  Alert,
  Platform,
} from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

// To start app: run 'npm start'
// Press 'open in IOS simulator' in Metro Bundler

export default function App() {

  const handlePress = () => console.log("Text pressed!");
  // console.log(Dimensions.get("screen"));     // Use Dimensions API 
  // console.log(useDimensions());              // Use hooks library - screen dimensions
  // console.log(useDeviceOrientation());       // Use hooks library - orientations
  const {landscape} = useDeviceOrientation();

  return (
    // Using a combination of styles - RIGHT overwrites the LEFT
    // e.g. <SafeAreaView style={styles.container, containerStyle}> 

    <SafeAreaView style={styles.container}> 
      <Text numberOfLines={1} onPress={handlePress}>
        An app to walk through all the basic features of React Native.
      </Text>
      <TouchableHighlight onPress={() => console.log("Image pressed")} >
        <Image 
          source={{ 
            width: 200,
            height:300,
            uri: "https://picsum.photos/200/300",
          }} />
      </TouchableHighlight>
      <Button 
        title="Click me for an alert" 
        onPress={() => Alert.alert("This is an alert", "Press an option!", [
          { text: "Yes", onPress: () => console.log("Yes") }, 
          { text: "No", onPress: () => console.log("No") },
        ])} 
      />
      <StatusBar style="auto" />
      <Button 
        title="Click me for a prompt" 
        onPress={() => Alert.prompt("This is a prompt", "Enter something below!", text => console.log(text))}
      />
      <View style={{
        backgroundColor: 'blue', 
        width: '50%',
        height: landscape ? '100%' : '30%',
      }}></View>
    </SafeAreaView>
  );
}



// STYLESHEETS
// Method 1: plain Javascript properties 
const containerStyle = { backgroundColor: "orange" };

// Method 2: calling StyleSheet method 
// - this method validates the properties - prevention from accidental mispellings 
const styles = StyleSheet.create({
  container: {
    // Normal Javascript object
    flex: 1,                  //Fills whole screen 
    backgroundColor: "#fff",  
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Add some padding to top for Android platforms
  },
});
