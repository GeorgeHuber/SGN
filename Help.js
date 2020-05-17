import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import { WebView } from "react-native-webview"

import styles from "./styles.js"

import { Background2 } from './background';
import NavigationBar from './NavigationBar.js'

export default function Home({ navigation }) {
  const [scrollable, setScrollable] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setScrollable(true);
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      setScrollable(true)
    });

    return unsubscribe;

  }, [])






  const navBar = NavigationBar({ navigation })
  return (
    <View>
      <View style={styles.scrollView}>
        <Background2 />
        <ScrollView >

        <Text style={[styles.titleUploadText,{color:"white"}]}>Help out</Text>
        <Text style={[styles.titleUploadSubtext,{color:"white"}]}>
          Don't feel pressure to donate or do something crazy; its easy to feel down about not doing enough during quarantine. 
          We want you to know that just taking care of your mental health and working through this difficult time is enough. If you can find resources or time to help,
           here are some ways you can give and some small things everyone can do.
          Thank you so much!
        </Text>
        


          <View style={styles.infoContainer}>
            <Text style={styles.helpBodyText}>American Redcross is running low on blood due to a shortage of drives.
            Call 1-800-RED-CROSS to find a local donation site. You can also click
              <Text style={[styles.helpBodyText, { color: 'rgb(255,89,162)' }]}
                onPress={() => Linking.openURL("https://www.redcrossblood.org/give.html")}>
                {" Here"} </Text>
          for more information.

            </Text>
            <Image style={styles.helpImage1} source={{ uri: "https://www.wamc.org/sites/wamc/files/styles/x_large/public/202002/1497416271_de64.jpg" }} />


          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.helpBodyText}>The CDC is rapidly responding to COVID-19 and is raising emergency funds to accelarate help. Donate at
              <Text style={[styles.helpBodyText, { color: 'rgb(255,89,162)' }]}
                onPress={() => Linking.openURL("https://give.cdcfoundation.org/give/269833/#!/donation/checkout")}>
                {" this link"} </Text>
          .

            </Text>
            <Image style={styles.helpImage1} source={{ uri: "https://yt3.ggpht.com/a/AATXAJwSkx-AFen3DwpdyF9cem2tKO-T_3jweIiRgQ=s900-c-k-c0xffffffff-no-rj-mo" }} />


          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.helpBodyText}>Feeding America is a nationwide network of more than 60000 locations that provide critical aid to communities, families, the homeless, and other people who need food more than ever. Get involved
              <Text style={[styles.helpBodyText, { color: 'rgb(255,89,162)' }]}
                onPress={() => Linking.openURL("https://www.feedingamerica.org/find-your-local-foodbank")}>
                {" here"} </Text>
          .

            </Text>
            <Image style={styles.helpImage2} source={{ uri: "https://www.feedingamerica.org/themes/custom/ts_feeding_america/images/sprite-logo2018.png" }} />


          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.helpBodyText}>We know its hard to be away from normal life for so long but as death tolls continue to climb, lets follow social distancing guidlines and do our part to help. Latest COVID-19 information is available
              <Text style={[styles.helpBodyText, { color: 'rgb(255,89,162)' }]}
                onPress={() => Linking.openURL("https://www.cdc.gov/coronavirus/2019-ncov/index.html")}>
                {" here"} </Text>
          . 

            </Text>
            <Image style={styles.helpImage3} source={{ uri: "https://calmatters.org/wp-content/uploads/sites/2/2020/03/social-distancing.jpg?fit=2339%2C1282" }} />


          </View>


          <View style={styles.infoContainer}>
            <Text style={styles.helpBodyText}>Over the past months, our essential workers have worked extremely hard to keep society on its feet. Making a sign to show gratitude to postal and delivery workers is a great way to give back to the community.  
              <Text style={[styles.helpBodyText, { color: 'rgb(255,89,162)' }]}
                onPress={() => Linking.openURL("https://www.pinterest.com/pin/550705860676409468/")}>
                {" INSIPRATION"} </Text>
          . 

            </Text>
            <Image style={styles.helpImage3} source={{ uri: "data:image/jpeg;base64,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" }} />


          </View>



          <View style={styles.infoContainer}>
            <Text style={styles.helpBodyText}>Masks are important to help flatten the curve. Whether or not you can sew,              
             <Text style={[styles.helpBodyText, { color: 'rgb(255,89,162)' }]}
                onPress={() => Linking.openURL("https://www.pinterest.com/pin/550705860676409468/")}>
                {" Here"} </Text>are some simple instructions. Get creative with it and send in your photos!
              <Text style={[styles.helpBodyText, { color: 'rgb(255,89,162)' }]}
                onPress={() => Linking.openURL("https://www.boredpanda.com/creative-unique-masks-designs/?utm_source=google&utm_medium=organic&utm_campaign=organic")}>
                {" INSPIRATION"} </Text>
          

            </Text>
            <Image style={styles.helpImage3} source={{ uri: "https://3.bp.blogspot.com/_zqFoq3qej2c/Sgm42TtyoyI/AAAAAAAArxY/A0MUGyqSpNM/s280/36_021.jpg" }} />


          </View>
        </ScrollView>



      </View>
      {navBar}
    </View>
  );
}