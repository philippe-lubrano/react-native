import React, { Component } from 'react'  
import {  
    View,StyleSheet,AppRegistry,StatusBar  
} from 'react-native'  
  
export default class ActivityIndicatorDemo extends Component {  
    render() {  
        return (  
            <View style = {styles.container}>  
                <StatusBar  
                    backgroundColor = "#ff0000"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                />  
            </View>  
        )  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    }  
})  
AppRegistry.registerComponent('App', () => ActivityIndicatorDemo)  