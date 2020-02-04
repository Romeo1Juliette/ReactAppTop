import React from 'react'
import {Text,View} from 'react-native'
import ViewPager from "@react-native-community/viewpager";

const ViewPage=()=>{
    return(

        <ViewPager initialePage={0} style={{flex:1}} vertical={true}>
            <View key='0'>
                <Text>Page 122</Text>
            </View>
            <View key='1'>
                <Text>Page 1</Text>
            </View>
            <View key='2'>
                <Text>Page 2</Text>
            </View>
            <View key='3'>
                <Text>Page 3</Text>
            </View>
        </ViewPager>)
}
export default ViewPage
