import React from 'react'
import {Text} from 'react-native'
import styles from "../Styles/styles";
export default class Header extends React.Component{
      render(){
          return (
              <Text style={styles.textBoldeHeader}>
                  {this.props.children}
              </Text>
      )
      }
}
