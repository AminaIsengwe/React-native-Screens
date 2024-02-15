import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ToDo() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
<View style={styles.nav}>
<Text style={styles.nav_text}>Todo</Text>
</View>
<Text>To do list items</Text>
      <View style={styles.input}>
       <TextInput style={styles.input_items}>cleaning</TextInput> 
       <TextInput style={styles.input_items}>cleaning</TextInput> 
       <TextInput style={styles.input_items}>cleaning</TextInput> 
       <TextInput style={styles.input_items}>cleaning</TextInput> 
      </View>     
      <View style={styles.bottom}>

        <TextInput></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text>Add todo</Text>
        </TouchableOpacity>

        </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'top'
  },
  nav: {
backgroundColor: '#F7A471',
alignItems: 'top',
marginTop: 50,
padding: 15 ,
width: "100%",

  },
nav_text:{
textAlign: 'right',
color: '#fff'
  },
input:{
width: "100%",
alignItems:"center",

  },
  input_items:{
    borderWidth: 1,
    borderStyle: 'dotted',
    padding:4,
    width: "80%",
    padding: 5,
    marginTop: 10,
  },
  bottom:{
marginTop:400,

  },
  button:{
backgroundColor:'#F7A471',
padding: 5,
  },
});

