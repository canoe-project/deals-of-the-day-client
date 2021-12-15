import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-dynamic-vector-icons";
import { TextInput, TouchableOpacity, Text, View } from "react-native";
import styles, { searchBoxContainer } from "../styles/SearchBox.style";
import { useNavigation } from '@react-navigation/native';

function SearchBox(props) {
  const {
    onFocus,
    iconName,
    iconType,
    iconSize,
    iconColor,
    searchBoxText,
    iconComponent,
    searchBoxWidth,
    searchBoxOnPress,
    disableTextInput,
    searchBoxTextStyle,
    searchBoxBorderRadius,
    searchBoxBackgroundColor,
  } = props;

  const [value, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  renderTextInput = () => {
    if (disableTextInput)
      return <Text style={styles.searchBoxTextStyle}>{searchBoxText}</Text>;
    return (
      <TextInput
        value={value}
        onFocus={onFocus}
        onChangeText={onChangeSearch}
        placeholder={searchBoxText}
        style={searchBoxTextStyle || styles.searchBoxTextStyle}
      />
    );
  };
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity
      onPress={searchBoxOnPress}
      style={searchBoxContainer(
        searchBoxWidth,
        searchBoxBorderRadius,
        searchBoxBackgroundColor
      )}
    >
      <View style={styles.searchBoxGlue}>
        {renderTextInput()}
        {iconComponent || (
          <Icon
            name={iconName}
            type={iconType}
            size={iconSize}
            color={iconColor}
            onPress={() => navigation.navigate('searchresult', {value})}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

SearchBox.propTypes = {
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  searchBoxText: PropTypes.string,
  disableTextInput: PropTypes.bool,
  searchBoxBorderRadius: PropTypes.number,
  searchBoxBackgroundColor: PropTypes.string,
};

SearchBox.defaultProps = {
  iconSize: 30,
  iconName: "search",
  iconColor: "black",
  iconType: "EvilIcons",
  disableTextInput: false,
  searchBoxWidth: "100%",
  searchBoxBorderRadius: 8,
  searchBoxBackgroundColor: "#f5f5f5",
  searchBoxText: "search?",
};

export default SearchBox;