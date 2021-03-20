
import React, { Component } from 'react';
import { Button, View, Text, ScrollView, FlatList, TouchableOpacity, Alert, StyleSheet, Image, TextInput } from 'react-native';

var favIcon=require('./Icons/favicon.png');
var settings=require('./Icons/setting.png');
var settingsnew=require('./Icons/settingsnew.png');

class App_3 extends Component {

  constructor(props){
    super(props);
    this.state={
      coronaArray:[],
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




  componentDidMount() {
    // Alert.alert('Testing');
    return fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
    .then((response) => response.json())
    .then((json) => {
      console.log('coronavirus-tracker-api locations is = ',json.locations);
      this.setState({coronaArray:json.locations});
      // return json.movies;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){
    return(
      <View style={{flex:1,backgroundColor:'darkgrey',justifyContent:'center',}}>
        <View style={{flexDirection:'row',marginTop:0,flex:0.11,paddingRight:5,backgroundColor:'teal'}}>
          <View style={{flexDirection:'row',flex:8,justifyContent: 'center'}}>
            <Text style={{fontSize:23,color:'white',textAlignVertical:'center',fontWeight:'bold'}}>COVID-19 Updates</Text>
          </View>
        </View>
        <View style={{flex:0.09,backgroundColor:'lightgrey',justifyContent:'center',paddingLeft:10,borderWidth:0.2,borderColor:'grey'}}>
          <Text style={{fontSize:16,color:'darkgrey',fontWeight:'500',textAlignVertical:'center',}}>Search Country</Text>
        </View>
        <FlatList
          style={{flex:1,marginBottom:0}}
          data={this.state.coronaArray}
          numColumns={1}
          renderItem={
          ({item}) =>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.rowSelected(item)}>
          <View style={{flexDirection:'column',padding:5,borderWidth:2,borderRadius:10,margin:5,backgroundColor:'white',borderColor:'white'}}>
            <View style={{flex:1,justifyContent: 'center'}}>
              <Text style={{color:"black",fontSize:22,textAlignVertical:'center',alignSelf:'center',fontWeight:'bold'}}>{item.country}</Text>
            </View>

            <View style={{flex:9,flexDirection:'row'}}>
                  <View style={{flex:1,flexDirection:'column'}}>
                    <View style={{flex:1,justifyContent: 'center'}}>
                    <Text>Total Population: </Text>
                    <Text style={{color:"brown",fontSize:20,fontWeight:'bold',textAlignVertical:'center'}}>{item.country_population}</Text>
                    </View>
                    <View style={{flex:1,}}>
                    <Text>Confirmed Cases:</Text>
                    <Text style={{color:"blue",fontSize:20,fontWeight:'bold',textAlignVertical:'center'}}>{item.latest.confirmed}</Text>
                    </View>
                    <View style={{flex:1,justifyContent: 'center'}}>
                    <Text>Recovered: </Text>
                    <Text style={{color:"green",fontSize:20,fontWeight:'bold',textAlignVertical:'center'}}>{item.latest.recovered}</Text>
                    </View>
                  </View>

                  <View style={{flex:1,flexDirection:'column',justifyContent: 'center'}}>
                  <View style={{alignSelf:'center'}}>
                  <Text style={{fontSize:20,fontWeight:'bold',textAlignVertical:'center'}}>Deaths</Text>
                  <Text style={{color:"red",fontSize:30,fontWeight:'bold',textAlignVertical:'center'}}>{item.latest.deaths}</Text>
                  </View>
                  </View>
              </View>
          </View>

          </TouchableOpacity>
          }
          />

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

export default App_3;
