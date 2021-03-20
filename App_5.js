
import React, { Component } from 'react';
import { Button, View, Text, ScrollView, FlatList, TouchableHighlight,TouchableOpacity, Alert, StyleSheet, Image, TextInput } from 'react-native';

var favIcon=require('./Icons/favicon.png');
var setting=require('./Icons/setting.png');
var favicon=require('./Icons/favicon.png');
var settingsnew=require('./Icons/settingsnew.png');

const Data = [
  {id: '1',title2:'Al-Faatiha',detail:'Meccan-Verses:7',title3:'الفاتحة‎'},
  {id: '2',title2:'Al-Baqara',detail:'Medinan-Verses:286',title3:'البقرة'},
  {id: '3',title2:'Al-i-Imraan',detail:'Medinan-Verses:200',title3:'آل عمران'},
  {id: '4',title2:'An-Nisaa',detail:'Medinan-Verses:176',title3:'ٱلنساء'},
  {id: '5',title2:'Al-Maaida',detail:'Medinan-Verses:120',title3:'ٱلمائدة'},
  {id: '6',title2:'Al-An"aam',detail:'Meccan-Verses:165',title3:'ٱلأنعام‎'},
  {id: '7',title2:'Al-A"raaf',detail:'Meccan-Verses:206',title3:'ٱلأعراف'},
  {id: '8',title2:'Al-Anfaal',detail:'Medinan-Verses:75',title3:'ٱلأنفال'},
  {id: '9',title2:'At-Twaba',detail:'Medinan-Verses:129',title3:'ٱلتوبة‎'},
  {id: '10',title2:'Al-Yunus',detail:'Meccan-Verses:109',title3:'يونس‎'},
];
function Item({id,title3,detail,title2}){
  return(
    <View style={{flexDirection:'row',padding:5,borderWidth:2,borderRadius:10,margin:5,height:65,backgroundColor:'white',borderColor:'white'}}>
      <View style={{flex:1,justifyContent: 'center'}}>
      <Text style={{color:"black",fontSize:20,textAlignVertical:'center',alignSelf:'center'}}>{id}</Text>
      </View>
      <View style={{flex:4.5,paddingLeft:5}}>
      <Text style={{color:"black",fontSize:22}}>{title2}</Text>
      <Text style={{color:"black",}}>{detail}</Text>
      </View>
      <View style={{flex:4.5,justifyContent: 'center'}}>
      <Text style={{color:"black",alignSelf:'flex-end',fontSize:30,fontWeight:'bold',textAlignVertical:'center'}}>{title3}</Text>
      </View>

    </View>
  );
}

class App_5 extends Component {

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
   this.props.navigation.navigate('Settings');
  }

  actSearch(text){
  }

  actionTextBlur(){
  }

  render(){
    return(
      <View style={{flex:1,backgroundColor:'#eeeeee',}}>
        <View style={{flexDirection:'row',marginTop:0,flex:0.11,paddingRight:5,backgroundColor:'teal'}}>
            <View style={{flexDirection:'row',flex:1,justifyContent: 'center',alignItems:'center'}}>
            <TouchableOpacity onPress={this.settingScreen}>
            <Image style={{width:30,height:30,alignSelf:'flex-end', marginTop:5,}} source={favicon}/>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',flex:8,justifyContent: 'center'}}>
              <Text style={{fontSize:23,color:'white',textAlignVertical:'center'}}>Tafheem UL Quran</Text>
            </View>
            <View style={{flexDirection:'row',flex:1,justifyContent: 'center',alignItems:'center'}}>
              <TouchableOpacity onPress={this.settingScreen}>
              <Image style={{width:30,height:30,alignSelf:'flex-end', marginTop:5}} source={setting}/>
              </TouchableOpacity>
            </View>
        </View>
        <View style={{flex:0.09,backgroundColor:'lightgrey',justifyContent:'center',paddingLeft:10,borderWidth:0.2,borderColor:'grey'}}>
          <Text style={{fontSize:16,color:'grey',fontWeight:'500',textAlignVertical:'center',}}>Search Surah Number and Name</Text>
        </View>
        <View style={{flex:1,backgroundColor:'lightgrey'}}>
        <FlatList
         data={Data}
         renderItem={({item})=>(
           <Item id={item.id} title3={item.title3} detail={item.detail} title2={item.title2}/>)}
         />
         </View>
        </View>
      );
    }
}

const styles=StyleSheet.create({
  buttonstyle:{
    paddingTop:15,
    flexDirection:'row',


  },

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

export default App_5;
