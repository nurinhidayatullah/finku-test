import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager, Image} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import HTMLView from "react-native-htmlview";
import AccordionChildFlat from './AccordionChildFlat';
export default class AccordionInline extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }

    }
    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity ref={this.accordion} style={this.state.expanded ? styles.expandedRow : styles.row} onPress={()=>this.toggleExpand()}>
                {/* <Text style={styles.title}>{this.props.title}</Text> */}
                <Image style={styles.image} source={this.props.imageName}/>
                <HTMLView 
                    value={this.props.title}
                    stylesheet={htmlStyle}
                />
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={40} color={'#B88F57'} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <AccordionChildFlat
                    data={this.props.data}
                />
            }
        
       </View>
        )
    }

    toggleExpand=()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({expanded : !this.state.expanded})
      }
}

const htmlStyle = StyleSheet.create({
    small: {
        fontSize: 11,
        fontFamily: 'BeVietnam-Regular'
    }
})

const styles = StyleSheet.create({
    title:{
        fontSize: 13,
        color: 'black',
        width: '90%',
        fontFamily: 'BeVietnam-Bold'
    },
    image: {
        marginRight: 10
    },  
    fontSmall: {
        flex: 4,
    },
    expandedRow: {
        flexDirection: 'row',
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        justifyContent:'space-between',
        height:50,  
        alignItems:'center',

    },
    row:{
        flexDirection: 'row',
        borderRadius: 6,
        justifyContent:'space-between',
        height:50,  
        alignItems:'center',
    },
})
