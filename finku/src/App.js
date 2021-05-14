import React, { Component } from 'react'
import { Text, SafeAreaView, Image, StyleSheet, View, ScrollView, } from 'react-native'
import { Button } from 'react-native-paper'
import HeaderComponent from './components/HeaderComponent'
import Items from '../data'
import Accordion from './components/Accordion'
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFCF8',
    flex: 1
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  contain: {
    width: 193,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    paddingVertical: 12
  },
  text: {
    paddingHorizontal: 20,
    color: '#7B7B7B',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'BeVietnam-Regular',
    fontWeight: '500',
    paddingVertical: 24
  },
  btnWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: 'transparent',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 100,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2.62,
    elevation: 2,
    height: '11%',
    // borderTopWidth: 1,
    // borderRadius: 2,
    // borderColor: '#ddd',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 1,
    // marginLeft: 5,
    // marginRight: 5,
    // marginTop: 10,
  },
  btn: {
    marginVertical: 10,
    width: '90%',
    height: '60%',
    fontFamily: 'BeVietnam-Regular',
  }
})

export class App extends Component {
  render() {
    let accordions = []
    Items.forEach((item, i) => {
      accordions.push(
        <Accordion 
          key={i}
          title ={ item.title }
          data ={ item.data }
        />
      )
    })
    return (
      <SafeAreaView style={styles.container}>
        <HeaderComponent></HeaderComponent>
        <ScrollView>
          <View style={styles.center}>
            <Image style={styles.contain} source={require('../assets/base.png')} />
          </View>
          <Text style={styles.text}>Sebelum hubungkan akun finansialmu, baca dan pastikan 👇🏻</Text>
          { accordions }
        </ScrollView>
        <View style={styles.btnWrap}>
          <Button mode="contained" color="#0C6DC7" style={styles.btn} uppercase={false}>Tambah Akun Finansialmu</Button>
        </View>
      </SafeAreaView>
    )
  }
}


export default App
