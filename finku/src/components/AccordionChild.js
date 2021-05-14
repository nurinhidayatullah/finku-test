import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import HTMLView from "react-native-htmlview";
import AccordionInline from './AccordionInline';

export default class AccordionChild extends Component {
    render() {
        let files = []
        this.props.data.forEach((item, i) => {
            (item.inline) ?
            files.push(
                <View style={styles.child} key={i}>
                    <AccordionInline 
                        title={item.text}
                        data={item.child}
                        imageName={item.imageName}
                    />
                </View>
            ) :
            files.push(
                <View>
                    <View style={styles.child} key={i}>
                        <Image style={styles.image} source={item.imageName}/>
                        <View style={styles.htmlWrap}>
                            <HTMLView 
                                value={item.text}
                                stylesheet={htmlStyle}
                            />
                        </View>
                        {/* <HTML style={styles.fontSmall} source={{ html: item.text }} 
                            tagsStyles={{fontFamily: 'BeVietnam-Regular'}}
                        /> */}
                    </View>
                    {
                        i < this.props.data.length - 1 &&
                        <View style={styles.divider} />
                    }
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
        fontFamily: 'BeVietnam-Regular'
    }
})

const styles = StyleSheet.create({
    htmlWrap:{
        flex: 4
    },
    child:{
        backgroundColor: '#FFF7F2',
        borderBottomEndRadius: 6,
        borderBottomLeftRadius: 6,
        flexDirection: 'row',
        paddingVertical:16,
        paddingHorizontal: 10,
    },
    image: {
        marginRight: 10
    },  
    fontSmall: {
        flex: 4,
    },
    divider:{
        height: 1,
        backgroundColor: '#F3EBE5',
        width:'97%',
        marginHorizontal: 6
    },
})
