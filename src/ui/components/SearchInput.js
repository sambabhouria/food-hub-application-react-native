import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';

const SearchInput = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Icon name="magnify" size={25} color={colors.DARKGRAY} />
      <TextInput
        placeholder="Find for food or restaurant..."
        style={styles.input}
        placeholderTextColor={colors.DARKGRAY}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DARRWHITE,
    borderRadius: 10,
    paddingLeft: units.width / 21,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.DARKGRAY,
    alignItems: 'center',
  },
  input: {
    marginLeft: units.width / 27,
    paddingVertical: units.height / 45,
  },
});
