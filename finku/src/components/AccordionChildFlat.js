import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import HTMLView from "react-native-htmlview";
import Unorderedlist from 'react-native-unordered-list';

export default class AccordionChildFlat extends Component {
    render() {
        let files = []
        this.props.data.forEach((item, i) => {
            let list = []
            if(item.hasOwnProperty('list')) {
                item.list.forEach((element, i) => {
                    list.push(
                        <Unorderedlist key={i} style={styles.bullet}><Text style={styles.list}>{element}</Text></Unorderedlist>
                    )
                })
            }
            files.push(
                <View>
                    <View style={styles.child} key={i}>
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={styles.htmlWrap}>
                            <HTMLView 
                                value={item.text}
                                stylesheet={htmlStyle}
                            />
                            {
                                item.hasOwnProperty('list') &&
                                list
                            }
                        </View>
                    </View>
                </View>
            )
        })
        return (
            <View>
                {files}
            </View>
        )
    }
}

const htmlStyle = StyleSheet.create({
    small: {
        fontSize: 11,
        fontFamily: 'BeVietnam-Regular',
        color: '#727272',
        textAlign: 'justify'
    },
})

const styles = StyleSheet.create({
    htmlWrap:{
        flex: 4
    },
    list: {
        fontSize: 11,
        fontFamily: 'BeVietnam-Regular',
        color: '#727272',
    },
    child:{
        backgroundColor: '#FFF7F2',
        borderBottomEndRadius: 6,
        borderBottomLeftRadius: 6,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        fontFamily: 'BeVietnam-Regular',
        color: '#727272'
    },
    divider:{
        height: 1,
        backgroundColor: '#F3EBE5',
        width:'97%',
        marginHorizontal: 6
    },
})
