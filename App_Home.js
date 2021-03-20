
import React, { Component } from 'react';
import { Button, View, Text, ScrollView, FlatList, TouchableOpacity, Alert, StyleSheet, Image, TextInput, ImageBackground } from 'react-native';

var favIcon=require('./Icons/favicon.png');
var settings=require('./Icons/setting.png');
var settingsnew=require('./Icons/settingsnew.png');
var app1=require('./Images/img1.png');
var back=require('./Images/back2.png');
class App_Home extends Component {

  constructor(props){
    super(props);
    this.state={
          // showSearchField:false,
          // searchArray:[],

        }
  }

  componentDidMount(){
  }

  settingScreen = () => {
   this.props.navigation.navigate('SettingScreen');
  }

  actSearch(text){
  }

  actionTextBlur(){
  }
  App_1 = () => {
    this.props.navigation.navigate('App_1');
  }
  App_2 = () => {
    this.props.navigation.navigate('App_2');
  }
  App_3 = () => {
    this.props.navigation.navigate('App_3');
  }
  App_4 = () => {
    this.props.navigation.navigate('App_4');
  }
  App_5 = () => {
    this.props.navigation.navigate('App_5');
  }

  render(){
    return(
      <View style={{flex:1,}}>
        
        <ScrollView>
        <ImageBackground style={{minHeight:900}} source={back}>
        <TouchableOpacity onPress={this.App_1}>
          <View style={{height:100,margin:20,marginTop:30,flexDirection:'row'}}>
            <View style={{flex:2,backgroundColor:'teal',width:100,borderWidth:2,borderRadius:15,justifyContent:'center'}}>
            <Text style={{fontSize:70,textAlign:'center',fontWeight:'bold',color:'white'}}>T</Text>
            </View>
            <View style={{flex:6,padding:5,justifyContent:'center',}}>
              <Text style={{fontSize:28,fontWeight:'bold',color:'white'}}>Tahfeem-Ul-Quran</Text>
              <Text style={{fontSize:20,color:'white'}}>Flex,Icons,Flatlist used</Text>
            </View>
          </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={this.App_2}>
          <View style={{height:100,margin:20,marginTop:20,flexDirection:'row'}}>
            <View style={{flex:2,backgroundColor:'grey',width:100,borderWidth:2,borderRadius:15,justifyContent:'center'}}>
            <Text style={{fontSize:70,textAlign:'center',fontWeight:'bold',color:'white'}}>C</Text>
            </View>
            <View style={{flex:6,padding:5,justifyContent:'center',}}>
              <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>Contacts</Text>
              <Text style={{fontSize:20,color:'white'}}>Icons,Sectionlist used</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.App_3}>
          <View style={{height:100,margin:20,marginTop:20,flexDirection:'row'}}>
            <View style={{flex:2,backgroundColor:'red',width:100,borderWidth:2,borderRadius:15,justifyContent:'center'}}>
            <Text style={{fontSize:70,textAlign:'center',fontWeight:'bold',color:'white'}}>C</Text>
            </View>
            <View style={{flex:6,padding:5,justifyContent:'center',}}>
              <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>COVID Update</Text>
              <Text style={{fontSize:20,color:'white'}}>APIs,Flatlist used</Text>
            </View>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={this.App_4}>
          <View style={{height:100,margin:20,marginTop:20,flexDirection:'row'}}>
            <View style={{flex:2,backgroundColor:'seagreen',width:100,borderWidth:2,borderRadius:15,justifyContent:'center'}}>
            <Text style={{fontSize:70,textAlign:'center',fontWeight:'bold',color:'white'}}>W</Text>
            </View>
            <View style={{flex:6,padding:5,justifyContent:'center',}}>
              <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>Web Page</Text>
              <Text style={{fontSize:20,color:'white'}}>Flex used</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.App_5}>
          <View style={{height:100,margin:20,marginTop:20,flexDirection:'row'}}>
            <View style={{flex:2,backgroundColor:'orange',width:100,borderWidth:2,borderRadius:15,justifyContent:'center'}}>
            <Text style={{fontSize:70,textAlign:'center',fontWeight:'bold',color:'white'}}>E</Text>
            </View>
            <View style={{flex:6,padding:5,justifyContent:'center',}}>
              <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>Empty App</Text>
              <Text style={{fontSize:20,color:'white'}}>Template used</Text>
            </View>
          </View>
        </TouchableOpacity>
          </ImageBackground>
        </ScrollView>
        
      </View>
      );
    }
}

const styles=StyleSheet.create({

  headerStyle:{
  justifyContent:'center',
  width:window.width,
	},
  viewStyle:{
    height: 60,
    backgroundColor:'#1d1c62',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  titleStyle:{
  fontWeight:'bold',
  color:  'white',    //'#2A3990',
  fontSize:18,
  fontFamily:'UrduTypesetting',
  },
  iconView:{
    flex:0.1,
    paddingRight:5,
    backgroundColor:'green',
  },
  textView:{
    flex:0.9,
    paddingLeft:10,
    alignItems:'center',
    justifyContent:'center',
  },
  notifyStyle:{
    flex:0.1,
    height:40,
    alignItems:'flex-start',
    justifyContent:'center',
  },
  iconStyle:{
    width:20,
    height:17,
  },
  buttonDimension:{
    alignItems:'center',
    justifyContent:'center',
    marginRight:8,
    width:40,
    height:40,
  },
  iconMenuDimension:{
    width:25,
    height:20,
  },
  buttonNotificationDimention:{
    alignItems:'center',
    justifyContent:'center',
    marginRight:10,
    width:40,
    height:40,
  },
  iconNotifyDimension:{
     width:30,
     height:25,
     marginRight:15,
     resizeMode: 'contain',
  },
  notifyheaderStyle:{
  justifyContent:'center',
  alignItems:'center',
  height: 120,
  },
});

export default App_Home;
