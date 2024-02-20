import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import Photos from './Photos1';
import Tags from './tags';
import Photos1 from './Photos1';
import Photos2 from './Photos2';
export default function FashionApp() {
const images=[
{
    id:1,
    name:'aa',
    price:100,
    image:'https://images.pexels.com/photos/1212693/pexels-photo-1212693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
},
{
    id:2,
    name:'bb',
    price:100,
    image:'https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708412400&semt=sph',
},
{
id:3,
name:'ab',
price:100,
image:'https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708412400&semt=sph',
},
{
id:4,
name:'ba',
price:100,
image:'https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708412400&semt=sph',
},
]

const clothes=[
{
id:1,
name:'suit',
price:100,
image:'https://charcoal.com.pk/cdn/shop/products/2-PIECE-SUIT-SLIM-FIT-NAVY-CHECK-at-Charcoal-Clothing-418-_1.jpg?v=1680049760&width=2400'
},
{
    id:2,
    name:'suit',
    price:100,
    image:'https://charcoal.com.pk/cdn/shop/products/2-PIECE-SUIT-SLIM-FIT-NAVY-CHECK-at-Charcoal-Clothing-418-_1.jpg?v=1680049760&width=2400'
    },
    {
        id:3,
        name:'suit',
        price:100,
        image:'https://charcoal.com.pk/cdn/shop/products/2-PIECE-SUIT-SLIM-FIT-NAVY-CHECK-at-Charcoal-Clothing-418-_1.jpg?v=1680049760&width=2400'
        },
        {
            id:4,
            name:'suit',
            price:100,
            image:'https://charcoal.com.pk/cdn/shop/products/2-PIECE-SUIT-SLIM-FIT-NAVY-CHECK-at-Charcoal-Clothing-418-_1.jpg?v=1680049760&width=2400'
            },
]


  return (
<View >
    <View style={styles.container}>
    <StatusBar style="auto" />
    <View style={styles.top}>
    <Icon name='arrow-back' />
    <Text style={{fontSize:20,fontWeight:'bold',margin:20}}>Search</Text>
    <Icon name='tune' />
    </View>
    <View>
    <TextInput style={styles.search}  
    label='Search' 
    mode='offline'
    underlineColor='#fff'
    theme={{roundness:25}}
    left={<TextInput.Icon size={15} icon={"magnify"} color='#575656' style={{backgroundColor:"#e0e0e0"}}></TextInput.Icon>}  
    right={<TextInput.Icon size={15} icon={"tune-variant"} color='#575656' style={{backgroundColor:"#e0e0e0"}}></TextInput.Icon>} 
    />
    </View>
    </View>
<ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <View style={styles.text_container}>
          <View style={styles.text}>
            <Text style={{fontSize:16, fontWeight:'400', color:'white'}}>All</Text>
            </View>
          <Tags txt='Man'/>
          <Tags txt='Woman'/>
          <Tags txt='Dress'/>
          <Tags txt='Baby'/>
          <Tags txt='Shirt'/>
          <Tags txt='Skirt'/>
          <Tags txt='Shoes'/>
          <Tags txt='Bag'/>
        </View>
        </ScrollView> 

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           {images.map((item, i) => {
            return(
            <View key={i} >
               <Photos1  id={item.id} image={item.image} name={item.name} price={item.price}     /> 
            </View> 
            )
          })}       
        </ScrollView>
<Text style={{fontSize:20,fontWeight:'bold',padding:10}}>Product Result(43)</Text>
        <ScrollView >
        <View style={{display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:10}}>
           {clothes.map((element, index) => {
            return(
            <View key={index} >
               <Photos2  id={element.id} image={element.image} name={element.name} price={element.price} /> 
            </View> 
        
            )
          })} 
        </View>
        </ScrollView>
        </View> 
 );
}
const styles = StyleSheet.create({

top:{
marginTop:35,
display:'flex',
flexDirection:'row',
alignItems:'center',
gap:70,
    },
search:{
width:350,
borderRadius:25,
marginBottom:20,
},
text:{
    backgroundColor:'#C19D61',
    paddingVertical:10,
    paddingHorizontal:23,
    borderRadius:40, 
  },
  text_container:{
    display:'flex',
    flexDirection:'row',
    marginTop:10,
    gap:5,
    },
       container:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent: 'center',
    },
  
})