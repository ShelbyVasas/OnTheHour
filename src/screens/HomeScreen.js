import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.scriptureWrapper}>{'\"Every effort to change we make- no matter how tiny it seems to us - just might make the biggest difference in our lives.\"'}</Text>
            <View style={styles.button}>
                <Button title="Read Scriptures" onPress={() => navigation.navigate('Scripture')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
    button:{
      backgroundColor:'#fff',
      color:"#003058",
      borderRadius:10,
      fontSize:20,
    },
  });
  