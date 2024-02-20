import {Text, View,Image,Button,TouchableOpacity,ActivityIndicator, ScrollView, ImageBackground} from 'react-native';
export default function Photos1({id,image,price,name}){
  return (
    <View style={{width:200,height:200,padding:10}} >
        <ImageBackground
        source={{ uri: image }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 10,height:150}}>
<View style={{marginTop:13, marginLeft:100, backgroundColor:'#fff', width:50, borderRadius:150}}><Text style={{ paddingVertical:3, textAlign:'center', color:'black', fontWeight:'500'}}>B</Text></View>

<View style={{height:50, borderBottomEndRadius:20, 
  borderBottomStartRadius:20, top:100, position:'relative', width:'100%',
 display:'flex', flexDirection:'column', padding:10}}>
    <Text style={{color:'black', fontSize:15}}>{name}</Text>
    <Text style={{color:'black', fontSize:15}}>${price}</Text>
  </View>
</ImageBackground>
      
    </View>
  )
}