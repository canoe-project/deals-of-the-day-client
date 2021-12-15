import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar, Image } from "react-native";
import styles, { shadowStyle, container, searchboxContainer } from "../styles/HeaderClassicSearchBar.style";
import Androw from "react-native-androw";
import SearchBox from "./SearchBox";
import Icon from "react-native-dynamic-vector-icons";
import Ripple from "react-native-material-ripple";
import { useSafeArea } from "react-native-safe-area-context";

/* 임의 데이터(상품 제목, 상품 부제목) */
const DATA = [
  {
    id: '1',
    title : 'Product Name',
    description : ' 22 save',
    number : '1',
  },
  {
    id: '2',
    title : 'Product Name',
    description : ' 22 save',
    number : '2',
  },
  {
    id: '3',
    title : 'Product Name',
    description : ' 22 save',
    number : '3',
  },
  {
    id: '4',
    title : 'Product Name',
    description : ' 22 save',
    number : '4',
  },
  {
    id: '5',
    title : 'Product Name',
    description : ' 22 save',
    number : '5',
  },
  {
    id: '6',
    title : 'Product Name',
    description : ' 22 save',
    number : '6',
  },
  {
    id: '7',
    title : 'Product Name',
    description : ' 22 save',
    number : '7',
  },
  {
    id: '8',
    title : 'Product Name',
    description : ' 22 save',
    number : '8',
  },
  {
    id: '9',
    title : 'Product Name',
    description : ' 22 save',
    number : '9',
  },
  {
    id: '10',
    title : 'Product Name',
    description : ' 22 save',
    number : '10',
  },
];

const Item = ({ title,description, number, image }) => (
  <View style={flatstyles.container}>
    <View style={flatstyles.item}>
      <Text style={flatstyles.number}>{number}</Text>
        <Text style={flatstyles.title}>{title}</Text>
        <Image style={flatstyles.image} source={require('../assets/icon/Save_Icon/saveimages.png')}>{image}</Image>
        <Text style={flatstyles.description}>{description}</Text>
    </View>
  </View>
);

/* 이미지, 상품 제목, 상품 부제목 등 여러 요소 스타일 지정 */
const flatstyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    width: '94%',
    margin:'5%',
    height:37
  },
  title: {
    fontSize: 23,
    textAlign:'center',
    bottom:58,
    right:42
  },
  description:{
    fontSize: 10,
    textAlign:'center',
    bottom:71,
    right:80
  },
  number:{
    fontSize: 35,
    textAlign:'left',
    bottom:20,
    right:17
  },
  image:{
    width:10,
    height:10,
    left:30,
    bottom:60
  },
});

function HeaderClassicSearchBar (props)  {
  
  const { shadowColor, backgroundColor } = props;

 /* 화면을 두개로 나눠서 사용하기 위한 설정 */
const mainstyles = StyleSheet.create({
  mainView:{
    backgroundColor:'gray',
    width:'100%',
    height:'100%'
  },
  subView:{
    backgroundColor:'white',
    width:'100%',
    height:'60%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
})

/* 화면 출력을 위한 반환 함수 */
const renderItem = ({ item }) => {

  return <Item number={item.number} title={item.title} description={item.description} />
            
};

const insets = useSafeArea();

/* Ripple : Touchable 대체로 사용 가능(터치 가능한 요소)
   Padding : margin과 비슷한 기능으로 공백을 주기 위해 사용 */

  return (
    <Androw style={shadowStyle(shadowColor)}>
        <View style={container(backgroundColor, insets)}>
          <View style={searchboxContainer(insets)}>
            <SearchBox searchBoxWidth="80%"/>
              <Ripple
                rippleColor="gray"
                style={styles.rippleContainer}
                rippleContainerBorderRadius={100}
                onPress={() => props.navigation.navigate('splash')} >
                <Icon name="barcode-scan" type="MaterialCommunityIcons"/>
              </Ripple>
          </View>
        </View>
        <View style={mainstyles.mainView}>
          <View>
            <Text style={{fontSize:30, color:'white', fontWeight:'bold'}}>
              {'\n\n\n    ProductName'}
            </Text>
            <Text style={{color:'white'}}>
              {'         Learn ipsum dolor sit amet, consectetuer ad-\n         ipiscing elit, sed diam\n\n'}
            </Text>
          </View>
        <View style={mainstyles.subView}>
          <Text style={{fontSize:18, fontWeight:'bold'}}>
            {'\n      Trend'}
          </Text>
          <SafeAreaView>
            <FlatList 
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListFooterComponent={ <View style={{ margin: 80 }} />}
            style={{
              paddingLeft: 30,
              paddingRight: 20,
              paddingBottom: 100,
            }}
            />
            </SafeAreaView>
        </View>
      </View>
    </Androw> 
  );
};

HeaderClassicSearchBar.propTypes = {
  shadowColor: PropTypes.string,
  backgroundColor: PropTypes.string
};

HeaderClassicSearchBar.defaultProps = {
  shadowColor: "blue",
  backgroundColor: "white"
};

export default HeaderClassicSearchBar;