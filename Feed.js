import React from 'react';
import {  ActivityIndicator,Text, View,TouchableOpacity,Image,FlatList } from 'react-native';
import VideoPlayer from 'expo-video-player'
import styles from "./styles.js"
import NavigationBar from "./NavigationBar.js"
import {Background1} from './background';
import firebase from "firebase";

import "firebase/firestore"
import { HitTestResultTypes } from 'expo/build/AR';
import WebView from 'react-native-webview';



import { config } from './config';
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}




export default function Participants({navigation}) {


  const [postLinks, setLinks] = React.useState([]);
  




  React.useEffect(()=>{
    const ref = firebase.storage().ref('images/test');
  
    const getURLS = async ()=>{
      var listRef = firebase.storage().ref('images/');
      var firstPage = await listRef.list({ maxResults: 100});
      var temp=[];
      for (var i=0;i< firstPage.items.length;i++){
      let url=await firstPage.items[i].getDownloadURL();
      temp.push(url)}
      console.log(temp);
    
    setLinks(temp)}
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      console.log("ran")
      getURLS();
    });
    
    
    
    return unsubscribe;
    
    
  },[])

  const flatListHeader= ()=>{
    return(<View>
      <Text style={styles.titleUploadText}>An Endless Flow of Posts</Text>
      <Text style={styles.titleUploadSubtext}>These posts have been submitted by everyday people and have been chosen for their positivity. Hopefully these images and videos brighten your day. Nothing political, upsetting, argumentative, just the best of humanity in a time of crisis. Enjoy! </Text>
      </View>
    )
  }

  const navBar=NavigationBar({navigation})
    return (
      <View style={styles.container}>
        <Background1/>

        

        <FlatList style={{  flex:1 }} 
        ListHeaderComponent={flatListHeader}
          data={postLinks} 
           keyExtractor={(item)=>item}
      
           renderItem={(itemData) => {
        if(itemData.item.indexOf(".jpg")>=0){
        return(



        
        < Image
        onLoadStart={() => (
          <ActivityIndicator
            color='black'
            size='large'
            style={styles.flexContainer}
          />)}
        style={styles.post}
          source={{ uri: itemData.item }}
        />
        )}
        else{



          return(
              <View style={styles.post}>
              < WebView style={{borderRadius:10}}
              mediaPlaybackRequiresUserAction={false}
              startInLoadingState={true}
              renderLoading={() => (
                <ActivityIndicator
                  color='black'
                  size='large'
                  style={styles.flexContainer}
                />
              )}
              source={{
                html: `
                <video preload="metadata" width="100%" height="100%" preload="metadata" src="${itemData.item}#t=0.1" controls  preload="metadata">
                      
                </video>
                `,
            }}
                


              
                
              />
              </View>
          )
        }
        
        }}>

        </FlatList>


        {navBar}
        
      </View>
    );
  }