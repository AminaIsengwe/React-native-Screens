import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TextInput,Checkbox } from 'react-native-paper';

export default function SignIn() {
  return (
<View style={styles.container}>
        <StatusBar style="auto" />

<View style={styles.top}>
    <Text style={styles.signin}>Sign In</Text>
</View>

<View >
    <Text styles={styles.text1} >Welcome back! Please enter your details</Text>
</View>

<View style={styles.text_container}> 
<TextInput
style={{width:"100%",margin:10,backgroundColor:'#F5F5F5'}}
label='Email'
mode='offline'
left={<TextInput.Icon size={15} icon={"email-outline"} color='#ed8aed' style={{backgroundColor:"#f5d0f5"}}></TextInput.Icon>}
/>
<TextInput
style={{width:"100%",margin:10,backgroundColor:'#F5F5F5'}}
label='Password'
mode='offline'
secureTextEntry
left={<TextInput.Icon size={15} icon={"lock-outline"} color='#1E88E5' style={{backgroundColor:"#d0d8f5"}}></TextInput.Icon>}
/>
<View>
<Checkbox.Item style={{flexDirection:'row-reverse'}} status="checked" label="Remember me" />
</View >
</View>
<View style={styles.button}>
    <Text style={styles.button_text}>Forgot password</Text>
    <TouchableOpacity style={styles.signin_button}>
        <Text style={styles.button_text2}>Sign In</Text></TouchableOpacity>
</View>
<View style={styles.create}>
  <Text >Create account</Text>
  <TouchableOpacity style={styles.signup}>
    <Text style={styles.signup_text}>Sign up</Text></TouchableOpacity>
</View>

<View style={styles.icons}>
<Icon name='facebook' type='material' color='#1E88E5'/>
<Icon name='google' type='font-awesome' color='white' iconStyle={{backgroundColor:"red", borderRadius:150, padding:0}}/>
<Icon name='apple' />
</View>
{/* <Image source={require('')}/> */}

    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'top'
 
  },
  top:{
    marginTop: 50,
    marginBottom:20,
backgroundColor:"#fff"
  },
  signin:{
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
marginTop:30,
marginBottom: 200,
  },
button_text:{
color:"#338DF9",
marginBottom:20,
  },
  button_text2:{
color:'#fff',
textAlign:'center',
fontWeight:'bold'
  },
  signin_button:{
    backgroundColor: '#50B8F2',
    padding:18,
   width:"70%",
   borderRadius:25,
  },
  button:{
   width:"100%",
   alignItems:'center',
   marginBottom:20,
  
  },
  create:{
    display:'flex',
    flexDirection:'row',
    gap:120,
    marginBottom:60,

  },
  signup:{
    backgroundColor: '#F0F0F0',
    padding:10,
    borderRadius:30,

  },
  signup_text:{
    color:'#F8AE28',

  },
  icons:{
    display:'flex',
    flexDirection:'row',
    gap: 50,
  }
});

