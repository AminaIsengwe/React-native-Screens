import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
export default function Shipping() {
    return (

    <View style={Styles.container}>
        <StatusBar style="auto" />

<View style={Styles.home}>
<View  style={Styles.home_title} >
    <View>
<Icon name='home'/>
<Text style={Styles.title}>Home</Text>
</View>
<Icon name="edit" color='blue'/>
</View>
<Text>Sunamganj</Text>
<Text>+971-50-1234567</Text>
<Text>Room #1 - Ground Floor.Al Najoun Building 24 B</Text>
<Text>Street Dubai - United Arab Emirates</Text>
</View>
<View style={Styles.office}>
<Text style={Styles.title}>Office</Text>
<Text>Sunamganj</Text>
<Text>+971-50-1234567</Text>
<Text>Room #1 - Ground Floor.Al Najoun Building 24 B</Text>
<Text>Street Dubai - United Arab Emirates</Text>
</View>
<View style={Styles.address}>
<Text style={Styles.title}>Add new shipping address</Text>
<Text style={Styles.personalinfo}>Personal info</Text>
<View>
<Text>Bill to the Home address</Text>
<Text>07146247923</Text>
<Text>myemail@gmail.com</Text>
</View>
<View>
    <TouchableOpacity style={Styles.button}>
        <Text style={Styles.button_text}>Continue</Text>
    </TouchableOpacity>
</View>
</View>

</View>
        );
    }
      const Styles=StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F0F0F0',
            alignItems:'center',
            justifyContent:'top'
         
          },
home:{
marginTop:50,
fontFamily:'serif',
borderWidth:1,
padding:20,
width:"80%",
borderColor:"#2196F3",
backgroundColor:"#E2F4FD",
borderRadius:25,
},
title:{
fontWeight: 'bold',
marginBottom: 20,
},
personalinfo:{
fontWeight:'bold',
marginBottom:15,
},
office:{
    marginTop:50,
    fontFamily:'serif',
    borderWidth:1,
    padding:20,
    width:"80%",
    borderColor:"#E0E0E0",
    backgroundColor:"#F5F5F5",
    borderRadius:25,
},
address:{
    marginTop:50,
    fontFamily:'serif',
    padding:20,
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:25,
},

button:{
  backgroundColor :"#2196F3",
  padding:20,
borderRadius:120,
margin:20,
},
button_text:{
    textAlign: 'center',
    color: "#fff",

},
home_title:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'

}

    });