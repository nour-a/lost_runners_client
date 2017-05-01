import React, {PropTypes} from 'react';
import {Text} from 'react-native';
import {theme} from '../theme';


const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon = (props) => (
  <Text style={props.selected ? theme.tabActive : theme.tabUnActive}>
    {props.title}
  </Text>
);

TabIcon.propTypes = propTypes;

export default TabIcon;
