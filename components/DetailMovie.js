import React ,{Component} from 'react'
import {View,Text,ScrollView} from 'react-native'
import styles from "../Styles/styles";
import Header from "./TextHeader";
export default class DetailMovie extends Component{

    render(){
      return(
          <ScrollView>
              <Header>Title</Header>
              <Text>{this.props.title}</Text>
              <Header>Original Title</Header>
              <Text >{this.props.overview}...</Text>
              <Header>Overview</Header>
              <Text >{this.props.overview}...</Text>
              <Header>Title</Header>
              <Text >{this.props.overview}...</Text>
              <Header>Title</Header>
              <Text >{this.props.overview}...</Text>
              <Header>Title</Header>
              <Text >{this.props.overview}...</Text>
              <Header>Title</Header>
              <Text >{this.props.overview}...</Text>
              <Text >{this.props.vote_count}</Text>
              <Header>Title</Header>
              <Text>{this.props.release_date}</Text>
              <Header>Title</Header>
          </ScrollView>)
}}
