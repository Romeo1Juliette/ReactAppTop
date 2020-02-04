import {View,Text,TouchableOpacity,Image,Alert} from 'react-native'
import React ,{Component} from 'react'
import styles from "../Styles/styles";
import Header from "./TextHeader";
import Header2 from "./TextHeader2";
 export default class MoviesView extends Component{
     render(){
         return(
             <TouchableOpacity style={[styles.filmViewContainer]} onPress={()=>Alert.alert('Title',this.props.title)}>
                 <Image source={{uri:this.props.Image}} resizeMode='cover' style={styles.image}/>
                 <View style={styles.containerSample}>
                     <View style={[styles.containerRow]}>
                         <Text style={styles.movieTitle} numberOfLines={2}>{this.props.title}</Text>
                         <Text style={styles.voteCount} >{this.props.vote_average}</Text>
                     </View>
                     <Text numberOfLines={4} style={styles.overView}>{this.props.overview}...</Text>
                     <Text style={styles.releaseS}>Release Date: <Header2>{this.props.release_date}</Header2> </Text>

                 </View>
             </TouchableOpacity>
         )
     }

}


