import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

const BG_PRIMARY_COLOR = "#636AE8FF";
const TEXT_PRIMARY_COLOR= "#fff";

const style = StyleSheet.create({
    screenContainer: {
        width: width,
        height: height,
        backgroundColor:BG_PRIMARY_COLOR,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    textColor:{
        color:TEXT_PRIMARY_COLOR,
    },
    headingText:{
        color:TEXT_PRIMARY_COLOR,
        fontSize:32,
        lineHeight:48,
        fontWeight:700,
    },
    slug:{
        color:TEXT_PRIMARY_COLOR,
        fontSize:16,
        width:300,
        lineHeight:26,
        fontWeight:400,
        fontFamily:"Inter",
        textAlign:"center",
        paddingBlock:5,
    },
    logoImage:{
        width:100,
        height:100,
        backgroundBlendMode:"screen",

    },
    container: {
        width: 350,
        height: 52,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },

      buttonFullWidth:{
        width:width,
        paddingInline: 20,
        paddingBlock:20,
        marginBlock:10,
        backgroundColor:"#"
      },
      buttonText: {
        fontFamily: 'Inter',
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '400',
        backgroundColor: '#F2F2FD',
        color: '#636AE8',
      }
});

export default style;