import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View ,Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { TextInput,Checkbox } from 'react-native-paper';

export default function LogIn() {
  return (
<View style={styles.container}>
        <StatusBar style="auto" />

< Image source={require('../assets/first.jpeg')} />

<View style={styles.top}>
    <Text style={styles.login}>Login</Text>
</View>

<View style={styles.text_container}> 
<TextInput
style={{width:"100%",backgroundColor:'#fff'}}
label='Email'
mode='offline'
underlineColor='#9E9E7E'
theme={{roundness:25}}
left={<TextInput.Icon size={15} icon={"email-outline"} color='#ed8aed' style={{backgroundColor:"#f5d0f5"}}></TextInput.Icon>}
/>
<TextInput
style={{width:"100%",backgroundColor:'#fff',borderRadius:25}}
label='Password'
mode='offline'
underlineColor='#fff'
secureTextEntry
left={<TextInput.Icon size={15} icon={"lock-outline"} color='#1E88E5' style={{backgroundColor:"#d0d8f5"}}></TextInput.Icon>}
/>
</View>
<View style={styles.button}>
    <Text style={styles.button_text}>Forgot password?</Text>
    <TouchableOpacity style={styles.login_button}>
        <Text style={styles.button_text2}>Log In</Text></TouchableOpacity>
</View>

<View style={styles.icons}>
<Icon name='facebook' type='material' color='#1E88E5' style={{ backgroundColor:'#fff',padding:10,borderRadius:150}}/>
<Icon name='google' type='font-awesome' color='green' iconStyle={{backgroundColor:"white", borderRadius:150, padding:10}}/>
<Icon name='apple'style={{ backgroundColor:'#fff',padding:10,borderRadius:150}} />
</View>

</View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems:'center',
    justifyContent:'top',
    borderRadius:20,
  },
top:{
margin:20,
  },
  login:{
fontSize:20,
fontFamily: 'Roboto-Thin',
fontFamily:'serif',
fontWeight:'bold'
  },
text1:{
fontFamily:'serif',
fontWeight:'bold'
  },
text_container:{
width:"80%",
justifyContent: 'center',
marginBottom: 20,
  },
button_text:{
color:"#338DF9",
marginHorizontal:45,
  },
  button_text2:{
color:'#fff',
textAlign:'center',
fontWeight:'bold'
  },
  login_button:{
    backgroundColor: '#24213c',
    padding:18,
   width:"30%",
   borderRadius:25,
  },
  button:{
   width:"100%",
   alignItems:'center',
   marginBottom:20,
  display:'flex',
  flexDirection:'row',
  gap:50,
  },

  icons:{
    marginTop:50,
    display:'flex',
    flexDirection:'row',
    gap: 50,
  }
});

