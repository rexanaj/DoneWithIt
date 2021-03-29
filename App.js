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

export default function App() {

  const handlePress = () => console.log("Text pressed!");

  return (
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                  //Fills whole screen 
    backgroundColor: "#fff",  
    alignItems: 'center',
    justifyContent: 'center',
  },
});
