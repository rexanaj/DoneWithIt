import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableHighlight, 
  Image, 
  SafeAreaView, 
  Button,
  Alert,
} from 'react-native';

// To start app: run 'npm start'
// Press 'open in IOS simulator' in Metro Bundler

export default function App() {

  const handlePress = () => console.log("Text pressed!");

  return (
    // Using a combination of styles - RIGHT overwrites the LEFT
    <SafeAreaView style={styles.container, containerStyle}> 
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
  },
});
