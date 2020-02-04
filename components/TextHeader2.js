import React from 'react'
import {Text} from 'react-native'
import styles from "../Styles/styles";
export default class Header2 extends React.Component{
    render(){
        return (
            <Text style={styles.textBoldeHeader2}>
                {this.props.children}
            </Text>
        )
    }
}
