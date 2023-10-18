import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/button';
import { useState } from 'react';

export default function Scripture() {
  const [scripture, setScripture] = useState();
  const getScripture = async () => {
    const scriptureResponse = await fetch("https://scripture-api.onrender.com")
    if (scriptureResponse.ok){
      const scriptureData = await scriptureResponse.json()
      setScripture(scriptureData)
    };
  }

  return (
    <View style={styles.container}>
      <View style={styles.scriptureWrapper}>
        <Text style={styles.verseTitle}>{scripture?.verseReference}</Text>
        <Text>{scripture?.verseText}</Text>
      </View>
      {/* <Text style={styles.title}>
        ON THE HOUR
      </Text> */}
      <StatusBar style="auto" />
      <View style={styles.footerContainer}>
        <Button label="Grab a Scripture" scripFunction={getScripture} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#003058',
    fontWeight: 'bold',
    fontSize: 30,
  },
  footerContainer: {
    flex: 1 / 3,
    flexDirection: 'row',
    justifyContent: "flex-end",
  },
  scriptureWrapper:{
    backgroundColor:"tan",
    height:"auto",
    width:300,
    padding:10,
    borderRadius:10,
  },
  verseTitle:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10
  }
});
