import React, { useState } from "react";
import { Image, View, StyleSheet, Text, TextInput,ScrollView ,Button, ImageBackground} from "react-native";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/logo.png";
import { Picker } from "@react-native-picker/picker";
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import certificate from '../assets/cer.png'
import instagram from '../assets/ins.png'
import facebook from '../assets/fc.png'
import linkedin from '../assets/in.png'
import twitter from '../assets/tw.png'
import background from '../assets/background.jpg'
import { Dropdown } from 'react-native-element-dropdown';

export default function Mainpage() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedValue, setSelectedValue] = useState(null);
  const data = [
    { label: '+91', value: '+91' },
    { label: '+93', value: '+92' },
    { label: '+61', value: '+61' },
    { label: '+43', value: '+42' },
  ];
  const data2 = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' },
  ];

  return (
    <>
     <ScrollView>
     <View style={styles.container}>
       <ImageBackground source={background}  resizeMode="cover">
      <View style={styles.logocontainer}>
      <Image source={pic3} style={styles.image} />
      <Text style={{color:'white'}}>PRESSENTS</Text>
      </View>
       </ImageBackground>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>Professional Online</Text>
        <Text style={styles.text}>Makeup Course</Text>
        <View style={styles.con2}>
          <View style={styles.ratingback}>
            <Text> 🔖 Certification Programme</Text>
          </View>
          <Text style={styles.txt2}> ★Rated 4.85/5</Text>
        </View>
        <View style={{padding:5}}>
          <Text style={styles.col}>✓&nbsp; India's No.1 Online Makeup Course</Text>
          <Text style={styles.col}>✓&nbsp; Learn by LIVE Do-it-Together Classes</Text>
          <Text style={styles.col}>
          ✓&nbsp; Unlimited Practice Sessions to master skills
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.top}>
            <Text style={styles.title}>FILL THE FORM BELOW TO ENQUIRE</Text>
          </View>
          <View style={styles.name}>
            <Text>*Enter Your Name</Text>
            <TextInput style={styles.input} placeholder="Eg.Aneesha Mehra" />
          </View>
          <View style={styles.number}>
          <Text>*Enter Your Whatsapp Number</Text>
           <View style={styles.pic}>
          <View style={{width:'30%'}}>
          <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="+91"
          value={selectedValue}
          onChange={item => {
            setSelectedValue(item.value);
          }}
        />
          </View>
            <TextInput style={styles.inputnumber} placeholder="Eg.0000000000" />
           </View>
          </View>
          <View style={styles.number} >
            <Text>*Select Your profession</Text>
            <View >
            <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data2}
          labelField="label"
          valueField="value"
          placeholder="Choose The Most Relevant Option"
          value={selectedValue}
          onChange={item => {
            setSelectedValue(item.value);
          }}
        />
           </View>
          </View>
          <View  style={styles.number}>
            <Text>*Select Your goal</Text>
            <View >
            <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data2}
          labelField="label"
          valueField="value"
          placeholder="Choose The Most Relevant Option"
          value={selectedValue}
          onChange={item => {
            setSelectedValue(item.value);
          }}
        />
           </View>
          </View>
          <View style={styles.number}>
            <Text>*Select Your city</Text>
           <View >
           <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data2}
          labelField="label"
          valueField="value"
          placeholder="Choose The Most Relevant Option"
          value={selectedValue}
          onChange={item => {
            setSelectedValue(item.value);
          }}
        />
           </View>
          </View>
          <View style={{margin:10}}><Button title="Submit" color={"#e84d84"} ></Button>
          </View>
        </View>
      </View>
          <View>
            <ImageBackground source={background}  resizeMode="cover">
            <View style={styles.second}>
            <View style={styles.secone} >
                <Text style={styles.font}>Why Should You </Text>
                <Text style={styles.font}>Join Airblack?</Text>
            </View>
            <View style={styles.sectwo}>
                <View>
                    <Image style={styles.img} source={c1}></Image>
                    <Text style={styles.cmt}>Do-it-together,</Text>
                    <Text style={styles.cmt}>Live in zoom</Text>
                </View>
                <View><Image style={styles.img} source={c2}></Image>
                    <Text style={{textAlign:'center',marginRight:20,color:'white'}}>4.8/5</Text>
                    <Text style={styles.cmt}>Rated Classes</Text></View>
                <View><Image style={styles.img} source={c3}></Image>
                    <Text style={styles.cmt} >35000+</Text>
                    <Text style={styles.cmt}>Members</Text></View>
            </View>
            <View style={styles.secthird}>
            <View style={{margin:10,width:'auto'}}><Button title="Apply Now" color={"#e84d84"} ></Button>
          </View>
            </View>
          </View>
            </ImageBackground>
          </View>
          <View style={styles.thirdview} >
            <View style={styles.thirdone}>
            <Text style={styles.font1}>Get Certified From </Text>
            <Text style={styles.font1}>India's Biggest</Text>
            <Text style={styles.font1}>Beauty Platform</Text>
            </View>
            <View>
                <Image source={certificate} style={{width:'auto',height:400}}></Image>
            </View>
          </View>
         <View>
          <ImageBackground source={background}  resizeMode="cover">
          <View style={styles.fourthview}>
            <View style={styles.fourthone}>
            <Text style={styles.font}>Join our growing </Text>
            <Text style={styles.font}>community of</Text>
            <Text style={styles.font}>35,000+ alumini</Text>
            </View>
            <View style={styles.four3}>
            <View style={{margin:10,width:'auto'}}><Button title="Apply Now" color={"#e84d84"} ></Button>
          </View>
            </View>
            <View style={styles.fourl}>
                <Image source={instagram} style={styles.img}></Image>
                <Image source={facebook} style={styles.img}></Image>
                <Image source={linkedin} style={styles.img}></Image>
                <Image source={twitter} style={styles.img}></Image>

            </View>
          </View>
          </ImageBackground>
         </View>
     </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 170,
  },
  container: {
   
    width: '100%',
    height: 170,
    
    
  },
  logocontainer:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  container2: {
    backgroundColor: "black",
    width: 430,
    height: 'auto',
    padding: 30,
  },
  text: {
    color: "white",
    fontSize: 30,
  },
  ratingback: {
    backgroundColor: "#d3d3d3",
    width: "auto",
    borderRadius: 5,
    padding: 3,
  },
  con2: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    flexWrap: "wrap",
    height: "auto",
    alignItems: "center",
  },
  txt2: {
    color: "#ffd700",
    margin: 7,
  },
  col: {
    color: "white",
    fontSize: 15,
    margin: 7,
  },
  form: {
    backgroundColor: "white",
    width: 350,
    height: 'auto',
    borderRadius: 10,
    marginTop: 10,
  },
  top: {
    width: "auto",
    borderRadius: 10,
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin:5
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize:17,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#a9a9a9",
    borderRadius: 5,
  },
  inputnumber:{
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#a9a9a9",
    borderRadius: 5,
    width:'63%'
  },
  name: {
    padding: 5,
    marginTop: 2,
  },
  pic:{
    display:'flex',
    flexDirection:'row',
    width:'auto',
    alignItems:'center'
  },
  number:{
    padding:10

  },
  second:{
    width:500,
    height:'auto',
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  secone:{
    width:430,
    height:120,
    padding:10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',

  },
  font:{
    fontSize:35,
    fontWeight:'bold',
    color:'white'
  },
  sectwo:{
    width:430,
    height:120,
    padding:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  secthird:{
    width:430,
    height:120,
    justifyContent:'center',
    padding:13,

  },
  img:{
    width:70,
    height:70
  },
  cmt:{
    textAlign:'center',
    color:'white'
  },
  thirdview:{
    width:430,
    height:'auto',
    backgroundColor:'black'
  },
  thirdone:{
    width:430,
    height:200,
    backgroundColor:'black',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'

  },
  font1:{
    fontSize:35,
    fontWeight:'bold',
    color:'white'
  },
  fourthview:{
    width:420,
    height:'auto',
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  fourthone:{
    width:'auto',
    height:200,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  four3:{
    width:430,
    height:'auto',
    justifyContent:'center',
    padding:13,

  },
  fourl:{
    width:430,
    height:120,
    padding:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',

  },
  dropdown: {
    height: 50,
    borderColor: "#a9a9a9",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});
