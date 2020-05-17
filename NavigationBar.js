import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

import styles from "./styles.js"




export default function NavigationBar({ navigation }) {
    const [isOpen, setIsOpen] = React.useState(false);
    if (isOpen) {
        return (<View style={[styles.navigationContainer]}>
            

            <View style={{ postion: "absolute", top: 0, transform: [{ 'translate': [0, 0, 1] }], backgroundColor: "rgba(0,0,0,0)" }}>
                <View style={styles.navHeader}>
                <Image style={styles.navLogo} source={require("./sgnAssets/logo.jpg")}/>
                <TouchableOpacity onPress={() => { setIsOpen(!isOpen);  }} style={[styles.openButton, styles.openWidth]}>
                    <Image source={require("./sgnAssets/menu.png")} style={styles.navigationMenuIcon} />
                </TouchableOpacity>
                </View>

                <View style={{ alignContent: "center", flexDirection: "column" }}>

                    <View style={styles.navButtonContainer}>
                        <TouchableOpacity style={styles.navButtonContainer} onPress={() => { setIsOpen(false); navigation.navigate("Home") }}>
                            <View style={styles.navButton}>
                                <Text style={styles.navButtontext}>Home</Text>
                                </View>
    
                            <View style={[styles.navIcon]}>
                                <Image style={styles.navigationMenuIcon1} source={require("./sgnAssets/home.png")} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.navButtonContainer}>
                        <TouchableOpacity style={styles.navButtonContainer} onPress={() => { setIsOpen(false); navigation.navigate("Episodes") }}>
                        <View style={styles.navButton}>
                                <Text style={styles.navButtontext}>Episodes</Text>
                                </View>
    
                            <View style={[styles.navIcon]}>
                                <Image style={[styles.navigationMenuIcon1,styles.altWidth]} source={require("./sgnAssets/tv.png")} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.navButtonContainer}>
                        <TouchableOpacity style={styles.navButtonContainer} onPress={() => { setIsOpen(false); navigation.navigate("Contact") }}>
                        <View style={styles.navButton}>
                                <Text style={styles.navButtontext}>Contact</Text>
                                </View>
    
                            <View style={[styles.navIcon]}>
                                <Image style={styles.navigationMenuIcon1} source={require("./sgnAssets/mai.png")} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.navButtonContainer}>
                        <TouchableOpacity style={styles.navButtonContainer} onPress={() => { setIsOpen(false); navigation.navigate("Feed") }}>
                        <View style={styles.navButton}>
                                <Text style={styles.navButtontext}>Feed</Text>
                                </View>
    
                            <View style={[styles.navIcon]}>
                                <Image style={[styles.navigationMenuIcon1,styles.altHeight]} source={require("./sgnAssets/stick.png")} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.navButtonContainer}>
                        <TouchableOpacity style={styles.navButtonContainer} onPress={() => { setIsOpen(false); navigation.navigate("Help") }}>
                        <View style={styles.navButton}>
                                <Text style={styles.navButtontext}>Help</Text>
                                </View>
    
                            <View style={[styles.navIcon]}>
                                <Image style={[styles.navigationMenuIcon1,styles.altDim2]} source={require("./sgnAssets/heart.png")} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    
                </View>
            </View>
        </View>)
    }
    else {
        return (
            <View style={[styles.navigationContainerClosed]}>
                <View style={styles.navClosedLogoContainer}>
                <Image style={styles.navLogoClosed} source={require("./sgnAssets/logo.jpg")}/>
                </View>
                <TouchableOpacity onPress={() => { setIsOpen(!isOpen);  }} style={[styles.openButton, styles.closedWidth]}>
                    
                    <Image source={require("./sgnAssets/menu.png")} style={styles.navigationMenuIcon} />
                    
                </TouchableOpacity>
            </View>
        )
    }

}

