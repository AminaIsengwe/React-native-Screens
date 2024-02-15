import { StatusBar } from 'expo-status-bar';
import { View,Text,StyleSheet, ScrollView,Image } from 'react-native';
import { Icon } from 'react-native-elements';
export default function PhotoCollage(){
return( 


<View style={styles.container}>
    <ScrollView>
<StatusBar style="auto" />
<View >
<Text style={styles.text}>Text to Image</Text>
{/* <Icon name='dots-three-vertical' type='font-awesome'/> */}
</View>
<View style={styles.pictures}>
<Image style={styles.image} source={require('../assets/th.jpeg')}  />
<Image style={styles.image} source={require('../assets/th.jpeg')}  />
<Image style={styles.image} source={require('../assets/th.jpeg')}  />
<Image style={styles.image} source={require('../assets/th.jpeg')}  />

</View>
</ScrollView>
</View>

);


}
const styles = StyleSheet.create({
container:{
// backgroundColor:'#0288D1',
flex: 1,
marginTop:30,
margin:20,
alignItems:'center',
},
text:{
fontWeight:'bold',
fontFamily:'serif',
padding:15,
},
pictures:{
display: 'flex',
flexWrap:'wrap',
flexDirection:'row',
width:"100%",
gap:20,
},
image:{
width:"45%",
}
});
