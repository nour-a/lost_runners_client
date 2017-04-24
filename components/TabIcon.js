import React, { PropTypes } from 'react';
import { Text, StyleSheet } from 'react-native';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};
const styles = StyleSheet.create({
    active: {
        backgroundColor: '#322C67',
        borderRadius: 50,
       width:20,
       height:20,
       color:'#fff'
    },
    unActive: {
       backgroundColor: '#322C67',
       borderRadius: 50,
       width:10,
       height:10,
       color:'#fff'
    },
});
const TabIcon = (props) => (
  <Text
    style={{ color: props.selected ? '#322C67' : '#ccc' }}
  >
    {props.title}
  </Text>
);

TabIcon.propTypes = propTypes;

export default TabIcon;
