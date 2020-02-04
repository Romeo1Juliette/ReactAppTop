import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    parentContainer:{
        flex:1,
        margin:5
    },
    parentContainer2:{
        flex:1,
        margin:5
    },
    containerColumnCenter:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    containerRow:{
        flex:1.5,
        flexDirection:'row',
    },
    containerSample:{
        flex:1,
    },
    text:{
        textAlign: 'center',
        fontSize: 15,
        color:'grey'
    },
    textBoldeHeader:{
        fontWeight:'bold',
        fontSize:20
    },
    textBoldeHeader2:{
        fontWeight:'bold',
        fontSize:12
    },
    textInput:{
        height:50,
        borderWidth:1,
        borderColor:'black',
        marginBottom:10,
        fontSize: 20,
        color: 'black'
    },
    textInputInvalide:{
        height:50,
        borderWidth:1,

    },
    image:{
        flex:0.7,
        marginRight:5,
        backgroundColor: 'grey',
        height:200,
    },

    flex1:{
       flex:1,

    },
    movieTitle:{
        flex:3.5,
        fontSize:22,
        fontWeight:'bold'
    },
    flex2:{
        flex:2,
    },
    overView:{
        marginBottom: 5,
        marginTop:5,
        flexWrap: 'wrap',
        flex:2.2,
    },
    releaseS:{
        alignSelf:'flex-end',
        marginBottom:4,
        flex:0.5
    },
    filmViewContainer:{
        flexDirection: "row",
        margin:5,
        marginLeft:2,
        height:204,
        borderBottomWidth:1,
        borderBottomColor:'grey'
    },
    voteCount:{
        fontStyle:'italic',
        textAlign:'right',
        fontSize:25,
        flex:1,
    },
    containerTitleMovie:{
        flex:1.5,
        flexDirection:'row',
    },
    buttonView:{

    },
    movieView:{
        height:180
    },
    isLoading:{
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        position:'absolute',
        top:300,
        marginLeft:122
    }

})
export default styles
