import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View ,Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { TextInput,Checkbox } from 'react-native-paper';

export default function Register() {
  return (
<View style={styles.container}>
        <StatusBar style="auto" />
<View>
< Image source={require('../assets/second.jpeg')} />
</View>
<View style={styles.top}>
    <Text style={styles.register}>Register</Text>
</View>

<View style={styles.text_container}> 
<TextInput
style={{width:"100%",backgroundColor:'#fff'}}
label='Username'
mode='offline'
left={<TextInput.Icon size={15} icon={"head-outline"} color='#FFECB3' style={{backgroundColor:"#FFF3E0"}}></TextInput.Icon>}
/>
<TextInput
style={{width:"100%",backgroundColor:'#fff'}}
label='Email'
mode='offline'
left={<TextInput.Icon size={15} icon={"email-outline"} color='#C8E6C9' style={{backgroundColor:"#F1F8E9"}}></TextInput.Icon>}
/>
<TextInput
style={{width:"100%",backgroundColor:'#fff'}}
label='Password'
mode='offline'
secureTextEntry
left={<TextInput.Icon size={15} icon={"lock-outline"} color='#B0BEC5' style={{backgroundColor:"#ECEFF1"}}></TextInput.Icon>}
/>
</View>
<View style={styles.button}>
    <TouchableOpacity style={styles.register_button}>
        <Text style={styles.button_text2}>Register</Text></TouchableOpacity>
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
    backgroundColor:'#F4F4F4',
    alignItems:'center',
    justifyContent:'top',
    borderRadius:20,
  },
top:{
margin:20,
  },
  register:{
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
gap: 10,
  },
  button_text2:{
color:'#fff',
textAlign:'center',
fontWeight:'bold'
  },
  register_button:{
    backgroundColor: '#24213c',
    padding:18,
   width:"100%",
   borderRadius:25,
  },
  button:{
   width:"80%",
   alignItems:'center',
   marginBottom:20,
  },

  icons:{
    marginTop:50,
    display:'flex',
    flexDirection:'row',
    gap: 50,
  }
});