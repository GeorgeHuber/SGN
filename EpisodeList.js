import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { WebView } from "react-native-webview"

import styles from "./styles.js"

import { Background1 } from './background';
import firebase from "firebase";
import "firebase/firestore"

import NavigationBar from "./NavigationBar.js"

import { config } from './config';
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}




export default function EpisodeList({ navigation }) {
  const [vidLinks, setLinks] = React.useState([]);
  const [scrollable,setScrollable]=React.useState(true);
  const [numEpisodes,setNumEpisodes]=React.useState(0);
  React.useEffect(()=>{const db = firebase.firestore();
    var current = db.collection("data").doc("links");
    current.get().then(function (doc) {
      setLinks(doc.data().data);
      setNumEpisodes(doc.data().numLinks);
  
    });
    
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      setScrollable(true)
    });
    
    return unsubscribe;
    
  
  },[])
  
  

  

  const navBar=NavigationBar({ navigation });
  var index1=0;
  return (
      
    <View style={styles.container}>
      <Background1 />
      <View style={styles.episodeHeaderContainer}>
      <Text style={styles.episodeHeaderText}>Episodes</Text>
      </View>
      {scrollable&&<FlatList style={{  flex:1 }} 
      data={vidLinks} 
      keyExtractor={(item)=>item}
      
      renderItem={(itemData) => {
        index1+=1;
        return(
        <View style={styles.videoRow}>
            <Text style={styles.indexText}>{index1%numEpisodes===0?numEpisodes:index1%numEpisodes}</Text>
        <View style={styles.videoPadding}>
          <WebView
            style={styles.video}
            javaScriptEnabled={true}
            source={{ uri: itemData.item}} />
        </View>
      </View>)}}></FlatList>}
      {navBar}
    </View>
    
    
  );
}