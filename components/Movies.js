import React,{Component} from 'react'
import {Text,View,FlatList,ActivityIndicator,TextInput} from 'react-native'
import MoviesView from "./MoviesView";
import Tmdbm from "../APIs/TMDB-movies";
import styles from "../Styles/styles";
export default class Movies extends Component{
    constructor(props) {
        super(props);
        this.state={
            Movies:[],
            isReady:0,
            errorMessage:'',
            searchText:'',
        }
        this.page=0
        this.maxPage=0
        this.searchText='blue'
    }

    getMovies=()=>{

        this.setState({isReady:0})
        Tmdbm.Movies(this.searchText,this.page+1)
            .then(response=>response.json())
            .then(responseJson=>{
                this.page=responseJson.page
                this.maxPage=responseJson.total_results
                this.setState({Movies:[...this.state.Movies,...responseJson.results],isReady:1})})
            .catch(error=>this.setState({isReady:-1,errorMessage:error.toString()}))
    }
    _
componentDidMount(): void {
this.getMovies()

}

    _onChangeText=(text)=>{
        this.searchText=text
    }
    _searchMovies=()=>{
            this.maxPage=0
            this.page=0
            this.setState({
                Movies:[]
            },()=>this.getMovies())
    }
  _isLoading=()=>{
     if(this.state.isReady===0) {
         return <View style={styles.isLoading}>
                    <ActivityIndicator color='blue' size='large'/>
                    <Text>Just a minute....</Text>
                </View>}
      else if (!this.state.isReady!==-1)  return <Text style={{color:'red'}}>{this.state.errorMessage}</Text>
  }


    render(){

        console.log(this.state.isReady)
        return(
                <View style={styles.parentContainer}>
                    <TextInput placeholder='Enter something to search' style={styles.textInput}
                               onSubmitEditing={()=>this._searchMovies()}
                               onChangeText={(text)=>this._onChangeText(text)}/>

                    <FlatList  data={this.state.Movies}
                               renderItem={({item})=><MoviesView title={item.title} vote_average={item.vote_average}
                                                                 overview={item.overview} release_date={item.release_date}
                                                                 Image={Tmdbm.Image(item.poster_path)}/>}
                               keyExtractor={(item)=>item.id.toString()}
                               onEndReachedThreshold={0.5}
                               onEndReached={()=>{
                                   if(this.page<this.maxPage){
                                   this.getMovies()
                               }}
                               }
                    />
                    {this._isLoading()}
                </View>
        )
    }
}
