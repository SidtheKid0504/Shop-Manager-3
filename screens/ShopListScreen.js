import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MyHeader from '../components/Header';
import {RFValue} from 'react-native-responsive-fontsize';


export default class ShopListScreen extends React.Component{
  constructor() {
    super();
    this.state = {
      listName: ''
    }
  }
  render() {
    return(
      <View style={styles.container}>
          <MyHeader title="Shopping List"/>
          <View style={styles.inputContainer}>
            <TextInput 
              style= {styles.listNameInput}
              onChangeText={(text) => {
                this.setState({
                  listName: text
                });
              }
            }
            value= {this.state.listName}
            placeholder= "My Own List"
            />

            <View style={styles.addItemContainer}>
              <TextInput 
                style={styles.addItemInput}
              />
            </View>
          </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#31DF86',
    },
    inputContainer: {
      flex: 1,
      alignItems: 'center',
    },
    listNameInput: {
      width: '75%',
      height: RFValue(20),
      borderBottomWidth: 0.5,
      borderBottomColor: '#FFFFFF',
      marginTop: 20,
      fontSize: RFValue(15),
      fontWeight: 'bold'
    },
    addItemContainer: {
      flexDirection: 'row',
      margin: RFValue(20)
    },
    addItemInput: {
      width: RFValue(100),
      height: RFValue(20),
      borderWidth: 0.5,
      borderColor: 'black',
      fontSize: RFValue(5),
    }
})