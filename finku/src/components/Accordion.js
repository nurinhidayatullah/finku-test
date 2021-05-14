import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager, Image} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AccordionChild from './AccordionChild'
export default class Accordion extends Component {
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
                <Text style={styles.title}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={40} color={'#B88F57'} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <AccordionChild 
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

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        
    },
    title:{
        fontSize: 13,
        color: 'black',
        width: '90%',
        fontFamily: 'BeVietnam-Bold'
    },
    expandedRow: {
        flexDirection: 'row',
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        justifyContent:'space-between',
        height:70,  
        alignItems:'center',
        backgroundColor: '#FFDBAC',
        paddingHorizontal: 10,
    },
    row:{
        flexDirection: 'row',
        borderRadius: 6,
        justifyContent:'space-between',
        height:70,  
        alignItems:'center',
        backgroundColor: '#FFDBAC',
        paddingHorizontal: 10,
        marginVertical: 10
    },
})
