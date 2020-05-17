import React from 'react';
import {  Button,Text, View,TouchableOpacity,Image } from 'react-native';
import {WebView} from "react-native-webview"

import styles from "./styles.js"

import {Background2} from './background';
import NavigationBar from './NavigationBar.js'

export default function Home({navigation}) {
  const [scrollable,setScrollable]=React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const [canGoBack, setCanGoBack] = React.useState(false)
  const [canGoForward, setCanGoForward] = React.useState(false)
  const [currentUrl, setCurrentUrl] =React.useState('')
  React.useEffect(()=>{
    setScrollable(true);
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      setScrollable(true)
    });
    
    return unsubscribe;
  
  },[])

  backButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goBack()
    console.log("pressed")
  }
  
  frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward();
    console.log("pressed")
  }

  const webviewRef = React.useRef();
  
  const html='<div id="fb-root"></div><script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0"></script><div class="fb-page" data-href="https://www.facebook.com/pg/SomeGoodNewsSGN/" data-tabs="timeline" data-width="400" data-height="600" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/pg/SomeGoodNewsSGN/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/pg/SomeGoodNewsSGN/">Some Good News</a></blockquote></div>'

  const navBar=NavigationBar({navigation})
    return (<View>
      
      <View style={styles.containerWithoutPadding}>
        <Background2/>
        

        <View style={styles.feedContainer}>
 
        <WebView
            ref={webviewRef}
            style={styles.feed}
            javaScriptEnabled={true}
            scrollEnabled={scrollable}
            onNavigationStateChange={navState => {
              setCanGoBack(navState.canGoBack)
              setCanGoForward(navState.canGoForward)
              setCurrentUrl(navState.url)
            }}

            
    source={{
      uri:"https://www.facebook.com/SomeGoodNewsSGN/posts"
      
    }} />
          <View style={styles.homeWebNav}>

        <TouchableOpacity
          style={styles.homeWebNavButton}
          disabled={!canGoBack}
          onPress={backButtonHandler}
          
        >
          <Text  style={styles.homeWebNavButtonText}>{"Back <"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeWebNavButton}
          disabled={!canGoForward}
          onPress={frontButtonHandler}
          
        >
          <Text style={styles.homeWebNavButtonText}>{"> Forward"}</Text>
        </TouchableOpacity>
      </View>
    </View>
    
        
      </View>
      <View style={styles.containerTop}>

                        <Image style={styles.headerImage} source={require("./sgnBackgrounds/splatter.jpg")}/>
        </View>
      {navBar}
      
      </View>
    );
  }