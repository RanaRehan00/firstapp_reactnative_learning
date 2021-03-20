
import React, { Component } from 'react';
import { Button, View, Text, ScrollView, FlatList, TouchableOpacity, Alert, StyleSheet, Image, TextInput } from 'react-native';

var favIcon=require('./Icons/favicon.png');
var settings=require('./Icons/setting.png');
var settingsnew=require('./Icons/settingsnew.png');
var backArrow=require('./Icons/back.png');

class App_4 extends Component {

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
  testingScreen = () => {
    this.props.navigation.navigate('s1');
  }

  render(){
    return(
      <View style={{flex:1,backgroundColor:'#eeeeee',justifyContent:'center',}}>
          
      <View style={{flex:1}}>
        <View style={{flex:1,backgroundColor:'ghostwhite'}}>
          <View style={styles.header}>
            <Text style={{marginTop:0,marginLeft:10,marginRight:27,fontSize:22,fontWeight:'bold',color:'black'}}>
              KANTER
            </Text>
            <View style={styles.buttonheader}>
              <Button
                title="Home"
                color='grey'
              />
            </View>
            <View style={styles.buttonheader}>
            <Button
                title="Pages"
                color='darkgrey'
              />
            </View>
            <View style={styles.buttonheader}>
            <Button
                title="Services"
                color='darkgrey'
              />
            </View>
        
          </View>
       </View>
       <View style={{flex:4,backgroundColor:'lightskyblue',paddingLeft:20,paddingRight:20}}>
         <View>
           <Text style={{marginTop: 50,fontSize: 50,fontWeight: 'bold',color: 'white',textAlign: 'center',}}>PIXEL </Text>
           <Text style={{fontSize: 50,fontWeight: 'bold',color: 'green',textAlign: 'center',marginBottom:10}}>PERFECT</Text>
         </View>
         <Text style={{textAlign:'center',fontWeight: 'bold',color:'white',fontSize:20}}>
            Say helllo to the smartest and most felxible bootstrap template
         </Text>
         <View style={{width:150,alignSelf:'center',paddingTop:40}}>
         <Button
                title="GET STARTED"
                color='green'
              />
         </View>

       </View>
       <View style={{flex:2,backgroundColor:'ghostwhite'}}>
          <View style={styles.footer}>
            <View style={styles.buttonfooter}>
              <Button
                title="FULLY RESPONSIVE Lorem ipsum, etgna aliqua. Ut enim ad minim veniam"
                color= 'grey'
              />
            </View>
            <View style={styles.buttonfooter}>
            <Button
                title="WITH LOVE Lorem ipsum dolor, sed consectetur do eiusmod tempor incididunt"
                color= 'darkgrey'
              />
            </View>
            <View style={styles.buttonfooter}>
            <Button
                title="RETINA READY Lorem ipsum dolor, al aliquip ex ea commodo consequat."
                color='grey'
              />
            </View>
            <View style={styles.buttonfooter}>
            <Button
                title="ONE & MULTIPAGE Lorem ipsum sit amet, incidid\ et dolore magna aliqua"
                color='darkgrey'
              />
            </View>
        
          </View>
       </View>
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
    buttonDimension:{
        alignItems:'center',
        justifyContent:'center',
        marginRight:8,
        width:40,
        height:40,
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
  header: {
    flexDirection:'row',
    alignSelf:'flex-end',
    marginTop:30,
    marginLeft:10,
    marginRight:20,
  },
  buttonheader: {
    marginLeft:10,
    width:80,
    
  },
  Title: {
    marginTop: 50,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
  },
  footer: {
    flexDirection:'row',
    alignSelf:'flex-end',
    marginTop:10,
    marginLeft:0,
    marginRight:0,
  },
  buttonfooter:{
    width:105,
    paddingLeft:5,
    textAlign:'center',
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

export default App_4;
