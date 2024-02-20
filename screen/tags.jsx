import { StyleSheet, View ,Text} from "react-native"
import React from "react"

export default function Tags({txt}){
    return(
        (
            <View style={styles.container}>
            <Text style={{textAlign:'center', fontSize:16, fontWeight:'400',margin:1}}>
                    {txt}
                  </Text>
            </View>          
            )

    )
}
    const styles=StyleSheet.create({
        container: {
            borderWidth:1,
            borderColor:'#d6d3d2',
            borderRadius: 20,
            paddingHorizontal: 12,
            paddingVertical: 6,
            marginRight: 8,
        }
    })