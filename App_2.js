
import React, { Component } from 'react';
import { Button, View, Text, ScrollView, FlatList, TouchableOpacity, Alert, StyleSheet, Image, TextInput } from 'react-native';

var favIcon=require('./Icons/favicon.png');
var settings=require('./Icons/setting.png');
var settingsnew=require('./Icons/settingsnew.png');
var favicon=require('./Icons/plus.png');

class App_2 extends Component {

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

  render(){
    return(
      <View style={{flex:1,backgroundColor:'#eeeeee',justifyContent:'center',}}>
            <View style={{flex:1,flexDirection:'row',backgroundColor:'lightgrey'}}>
              <View style={{flex:9,justifyContent:'center'}}>
              <Text style={{fontSize:25,alignSelf:'center',textAlignVertical:'center',fontWeight:'bold'}}>All Contacts</Text>
              </View>

              <View style={{flex:1,justifyContent:'center'}}>
              <TouchableOpacity onPress={this.settingScreen}>
              <Image style={{width:30,height:30,alignSelf:'center',}} source={favicon}/>
              </TouchableOpacity>
              </View>
            </View>


            <View style={{flex:1,backgroundColor:'grey'}}>
            
            </View>
            <View style={{flex:8}}>
            </View>
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

export default App_2;
