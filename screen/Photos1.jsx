import {Text, View,Image,Button,TouchableOpacity,ActivityIndicator, ScrollView, ImageBackground} from 'react-native';
export default function Photos1({id,image,price,name}){
  return (
    <View style={{width:250,height:200,padding:10,paddingTop:20}} >
        <ImageBackground
        source={{ uri: image }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 10,height:150}}>
<View style={{marginTop:13, marginLeft:16, backgroundColor:'#C19D61', width:110, borderRadius:15}}><Text style={{ paddingVertical:3, textAlign:'center', color:'white', fontWeight:'500'}}>#{id} BestSeller</Text></View>

<View style={{height:50, borderBottomEndRadius:20, 
  borderBottomStartRadius:20, top:100, position:'absolute', width:'100%',
  backgroundColor:'rgba(000, 000, 000, 0.5)', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:13}}>
    <Text style={{color:'white', fontSize:15}}>{name}</Text>
    <Text style={{color:'white', fontSize:15}}>${price}</Text>
  </View>
</ImageBackground>
      
    </View>
  )
}


