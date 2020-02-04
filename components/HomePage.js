
import React, { Fragment,Component } from 'react';
import {View,Alert, Text,Button,ActivityIndicator} from 'react-native';
import styles from "../Styles/styles";


class HomePage extends Component  {
    render(){
        return(
            <View style={styles.parentContainer}>
                <View style={[styles.containerColumnCenter,{backgroundColor:'grey'}]}>
                    <Text style={styles.text}>Welcome to p helps y
                    <Text style={styles.textBoldeHeader}>thi</Text> from <Text style={styles.textBoldeHeader}>the movies database</Text> and add them as favourite</Text>
                </View>
                <View style={styles.containerColumnCenter}>
                    <Button title='View movies' />
                </View>
            </View>
        )
    }

};


export default HomePage;
