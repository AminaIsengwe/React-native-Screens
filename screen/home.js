import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput,TouchableOpacity, View } from 'react-native';
import {Icon} from 'react-native-elements';

export default function Home() {
  return (
<View style={styles.container}>
        <StatusBar style="auto" />
<View style={styles.top}>
  <View style={styles.home}>
<Text style={styles.txthome}>
    Home
</Text>
</View >
<View style={styles.topnav}>
  <View>
<Icon name='code-compare' type='font-awesome'></Icon>
<Text>Price Alert</Text>
</View>
<View>
<Icon name='infocircle' type='material'/>
<Text>Price Alert</Text>
</View>
<View>
<Icon name='compare-horizontal' type='material'/>
<Text>Price Alert</Text>
</View>
<View>
<Icon name='compare-horizontal' type='material'/>
<Text>Price Alert</Text>
</View>
</View>
</View>
<View style={styles.bottom}>

<View style={styles.wallet}>
<Text style={styles.yourwallet}>
  Your wallet
</Text>
</View>

<View style={{backgroundColor:'#fff',display:'flex',flexDirection:'row'}}>
<Text>NEO 0.67</Text>
<Text>$56.127</Text>
</View>
</View>

</View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
    },

    top: {
      flex: 1,
      backgroundColor: '#dfe5f5',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width:"100%",
    },
    bottom: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 600, 
      backgroundColor:'#e9f2ef', 
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderRadius:25,
    },
topnav:{
display:'flex',
flexDirection:'row',
gap:10,
marginBottom:30,
    },
home:{
margin:50,
}, 
txthome:{
textAlign:'left',
fontWeight:'bold',
fontSize:30,
    },
wallet:{
borderRadius:25,
},
yourwallet:{
  textAlign:'left',
  fontWeight:'bold',
  fontSize:20,
}
});