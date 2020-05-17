import { StyleSheet, Dimensions } from "react-native"


const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({

  navigationContainer: {
    
    backgroundColor: "rgba(255,255,255,1)",
    borderRightWidth:2,
    width: width * 3 / 4,
    height: height,
    position: "absolute",
    left: 0,
    transform: [{ 'translate': [0, 0, 1] }],
    borderTopRightRadius:0,
    borderBottomRightRadius:0



  },
  navigationContainerClosed: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0)",
    flexDirection:"row",

    transform: [{ 'translate': [0, 0, 1] }]

  },
  openButton: {
    width: width / 6,
    height: width / 6,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "rgba(255,255,255,1)",
    
    marginVertical: (width/4-width/6)/2+height/14
  },
  closedWidth: { marginHorizontal: width*1/7+width*1/60+width*3/5+width/20-width/3-width/24 },
  openWidth: { marginHorizontal: width*1/7+width*1/60
   },
  navigationMenuIcon: {
    width: width / 6,
    height: width / 6,
    alignSelf: "center",
    opacity:0.9
  },
  navHeader:{flexDirection:"row",marginBottom:height/20},
  navButtonContainer:{flexDirection:"row"},
  navButton:{
    marginLeft:width/36,
    marginBottom:height/20,
    height:height/12,
    width:width*9/20,
    backgroundColor:"rgba(255,255,255,0)",
    paddingBottom:width/16,
    borderBottomWidth:1
    
  },
  navButtontext:{
    fontFamily:"AppleSDGothicNeo-Regular",
    fontSize:26,
    textAlign:"center",
    marginTop:height/18*1/4
  },
  navBackground:{position:"absolute",
  width:width,
  height:height,
  borderTopRightRadius:0,
  borderBottomRightRadius:0,
  
  
  
},
navIcon: {
  alignSelf:"auto",
  width: width / 6,
  height: width / 6,
  borderRadius: 10,
  borderWidth: 1,
  backgroundColor: "rgba(255,255,255,0.6)",
  marginLeft:width*1/17,
  justifyContent:"space-around",
  
  
  
},
navigationMenuIcon1: {
  width: width / 16,
  height: width / 16,
  alignSelf: "center",
  
  opacity:0.9
},
  navLogo:{
    marginTop:height/16,
    height: width *2/5,
    width:width*3/5,
    marginLeft:width/20
  },
  navLogoClosed:{
    
    height: width *1/8,
    width:width*1/5,
    marginLeft:width/16,
    
    
  },
  navClosedLogoContainer:{
    marginTop:(width/4-width/6)/2+height/14,
    marginLeft:width/24,
    width:width/3,
    height:width/6,
    backgroundColor:"white",
    borderRadius:10,
    justifyContent:"center",
    borderWidth:1
    

  },
  altWidth:{width:width/16,resizeMode:"stretch"},
  altDim2:{width:width/16,height:width/16,resizeMode:"stretch"},
  altHeight:{height:width/12,width:width/20,resizeMode:"stretch"},

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:height/5
  },
  homeWebNav:{ flexDirection: "row",marginBottom:height*0.1,height:height*.1,backgroundColor:"black",width:width }
  ,
  homeWebNavButton:{width:width*.5,
    height:height*.1,
    backgroundColor:"white",
    alignItems:"center",
    textAlignVertical:"center",
    borderLeftWidth:0.5
    

  },
  homeWebNavButtonText:{
    fontFamily:"AppleSDGothicNeo-Bold",
    fontSize:20,
    
    marginTop:height/30,
  },



  video: {
    
    marginTop:height/80*.75,
    maxHeight:height/4*.75,
    width: width*4/5*.75,
    
    
  },
  videoPadding:{
    width:(width*4/5+width/20)*.75,
    height:(height/4+height/40)*.75,
    alignItems:"center",
    backgroundColor:"white",
    flexDirection:"column",
    justifyContent:"center",
    borderRadius:10

  },
  videoRow:{
    flexDirection:"row",
    alignItems:"stretch",
    marginBottom:height/16,
    marginTop:height/40,
    justifyContent:"flex-end"
  },
  episodeHeaderText:{
    fontFamily:"AppleSDGothicNeo-Bold",
    fontSize:50,
    textAlign:"center",

  },
  episodeHeaderContainer:{
    borderBottomWidth:10,
    width:width*0.9,
    paddingBottom:height/50,
  },
  indexText:{
    fontFamily:"AppleSDGothicNeo-SemiBold",
    fontSize:60,
    textAlignVertical:"center",
    marginTop:height/18,
    marginRight:width/10
  },
  feed:{
    
    
    maxHeight:height*2,
    maxWidth:width,
    width:width,
    height:height,
    flex:1
    
  },
  feedContainer:{
    width:width,
    marginTop:height*.2,

    alignSelf:"center",
    alignItems:"center",
    height:height-height/12,
    flexDirection:"column",
    
    
    

  },
  containerWithoutPadding:{flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    overflow:"hidden",
    justifyContent:"flex-end",
    position:"absolute",
    marginBottom:height/20

  },

  containerTop:{
    position:"absolute",
    backgroundColor: '#fff',
    alignItems: 'center',
    height:height/10,
    width:width
  },
  headerImage:{
    overflow:"hidden",
    resizeMode:"center",
    height:height*.2
  },

  post:{
    height:width*.8,
    width:width*.8,
    alignSelf:"center",
    borderRadius:10,
    marginTop:height/10
    
    
  },








  uploadButton:{
    height:height/12,
    width:width*.85,
    backgroundColor:"white",
    
    alignItems:"center",
    justifyContent:"space-evenly",
    borderRadius:10,
    borderWidth:0.2
    
  },
  uploadButtonText:{
    fontFamily:"AppleSDGothicNeo-SemiBold",
    fontSize:30
  },
  uploadContainer:{
    marginTop:height*0.02,
    alignSelf:"center"
  },
  contactContainer:{
    justifyContent:"space-around",
    flexDirection:"column",
    alignItems:"center"
  },
  uploadInfoText:{
    fontFamily:"AppleSDGothicNeo-Light",
    fontSize:18,
    alignSelf:"center",
    textAlign:"left",
    
    
  },
  uploadInfoTextContainer:{
    width:width*.9,
    backgroundColor:"rgba(255,255,255,0.8)",
    padding:10,
    alignSelf:"center",
    borderRadius:5,
    borderWidth:0.2,
    marginTop:height*0.01,
    marginBottom:height*0.1
    
    
  },
  titleUploadText:{
    fontFamily:"AppleSDGothicNeo-Bold",
    fontSize:60,
    textAlign:"center",
    marginTop:height*0.05
  },
  titleUploadSubtext:{
    fontFamily:"AppleSDGothicNeo-SemiBold",
    fontSize:20,
    textAlign:"center",
    marginBottom:height*0.05,
    marginHorizontal:width*0.1
  },










  infoContainer:{
    alignSelf:"center",
    width:width*.9,
    paddingVertical:height*0.05,
    backgroundColor:"white",
    alignItems:"center",
    flexDirection:"row",
    borderRadius:10,
    marginBottom:height*0.05
  },
  scrollView:{
    height:height,
    width:width,
    paddingTop:height*0.2
  },
  helpBodyText:{marginHorizontal:width*0.05,
    fontFamily:"AppleSDGothicNeo-SemiBold",
    fontSize:16,
    width:width*0.5
  },
  helpImage1:{
    width:width*0.2,
    height:width*0.2,
  },
  helpImage2:{
    width:width*0.2,
    height:width*0.2,
    resizeMode:"contain"
  },
  helpImage3:{
    width:width*0.25,
    height:width*0.25,
    resizeMode:"stretch"
  }

  
});

export default styles;