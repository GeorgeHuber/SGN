import React from 'react';
import { Image } from 'react-native';
import styles from "./styles.js";

export  function Background1() 
{ return (<Image style={styles.navBackground} source={require("./sgnBackgrounds/navBackground.jpg")} />); }

export  function Background2() 
{ return (<Image style={styles.navBackground} source={require("./sgnBackgrounds/splatter.jpg")} />); }

export  function Background3() 
{ return (<Image style={styles.navBackground} source={require("./sgnBackgrounds/pastel.jpg")} />); }
