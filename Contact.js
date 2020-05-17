import React from 'react';
import {  Text, View,TouchableOpacity,Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import styles from "./styles.js"
import NavigationBar from "./NavigationBar.js"
import {Background3} from './background';
import firebase from "firebase";
import "firebase/firestore"
import { HitTestResultTypes } from 'expo/build/AR';
import * as MailComposer from 'expo-mail-composer';
import { config } from './config';
import { ScrollView } from 'react-native-gesture-handler';


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default function Contact({navigation}) {
  const navBar=NavigationBar({navigation})
  
  const sendEmail= async ()=>{
  
  let options2 = { subject: "SGN Submission",body:`*Thank you for deciding to contact us! Feel free to attach photos, videos, or documents to this email. We appreciate your mediasubmissions. If you are submitting something to be posted please indicate so. Thanks, you're doing great*!
  
  
  
  `,recipients:["somegoodnews@gmail.com"]};
  MailComposer.composeAsync(options2)
}

const sendEmailWithComments= async ()=>{
  
  let options2 = { subject: "SGN Commentary",body:`*Thank you for deciding to contact us! We're happy to hear from you. Remember, if you want to send a post please use the post with email button. Thanks for everything, you're doing great*!
  
  
  
  `,recipients:["somegoodnewscomments@gmail.com"]};
  MailComposer.composeAsync(options2)
}


  const chooseImagePress=async()=>{
    let result=await ImagePicker.launchImageLibraryAsync({allowsEditing:true,quality:0.5,mediaTypes:ImagePicker.MediaTypeOptions.All});
    
    if(!result.cancelled){
    
    Alert.alert(
      "User Agreement",
      "I agree to submit the attached file to be reviewed and possibly featured on this app",
      [
        {
          text: "Cancel",
          onPress: () => {console.log("cancelled");},
          style: "cancel"
        },
        { text: "OK", onPress: ()=>{uploadImage(result.uri);}}
      ],
      {cancelable:false}
    );}
    

  }

  const uploadImage =async (uri)=>{
    const response= await fetch(uri);
    const blob = await response.blob();
    console.log(uri);
    var key=(Math.random()*Math.random()*Math.random()).toString();
    key+=uri.indexOf("jpg")!=-1?".jpg":".mov";
    var ref=firebase.storage().ref().child("submissions/"+key);
    return ref.put(blob);
  }
    return (
      <View style={styles.container}>
        <Background3/>


      <ScrollView>


        <View style={styles.contactcontainer}>
        <Text style={styles.titleUploadText}>Contact SGN</Text>
        <Text style={styles.titleUploadSubtext}>A place to submit posts for the app, voice suggestions, comments, and influence the world</Text>
        <TouchableOpacity style ={styles.uploadContainer}onPress={()=>{
          return chooseImagePress();
        }}>
        <View style={styles.uploadButton}>
        <Text style={styles.uploadButtonText} >Upload From Camera</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.uploadInfoTextContainer}>
        <Text style={styles.uploadInfoText}>Files submitted here will be published to the app feed completely anonymously after they are reviewed to ensure they contain positive content. There is a chance they may be put into an episode or facebook post. These posts are published not for anyone to recieve credit but to spread happiness without embarrassment or politics.</Text>
        </View>
        <TouchableOpacity style ={styles.uploadContainer}onPress={()=>{
          return sendEmail();
        }}>
        <View style={styles.uploadButton}>
        <Text style={styles.uploadButtonText} >Submit With Email</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.uploadInfoTextContainer}>
        <Text style={styles.uploadInfoText}>Feel free to submit anything positive here with your name. We would love to see how you respond to SGN posts, have fun during quarantine, or do something to spread happiness. If you want anonymity with your post, please submit it using the upload option above.  </Text>
        </View>


        <TouchableOpacity style ={styles.uploadContainer}onPress={()=>{
          return sendEmailWithComments();
        }}>
        <View style={styles.uploadButton}>
        <Text style={styles.uploadButtonText} >Contact With Email</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.uploadInfoTextContainer}>
        <Text style={styles.uploadInfoText}>If you liked something done on the show, have comments, or suggestions please feel free to reach out to us here! any feedback is appreciated!</Text>
        </View>
        </View>
        </ScrollView>
        {navBar}
      </View>
    );
  }