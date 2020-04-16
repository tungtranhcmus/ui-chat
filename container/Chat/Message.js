import React, { PureComponent } from 'react';
import { View, Text, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Colors from './colors';
import AppStyles from './AppStyles';

const window = Dimensions.get('window');

const scale = window.width / 500;
const scaleHeight = window.height / 500;

export const normalizeMin = (size) => {
  let min = scale < scaleHeight ? scale : scaleHeight;
  return Math.round(min * size);
};

export default class Message extends PureComponent {


  render() {
    const { sefl, topHightlight, bottomHightlight, message } = this.props;
    return (
      <View
        style={[{
          backgroundColor: sefl ? Colors.primary : Colors.nauxanhnhat,
          alignSelf: sefl ? 'flex-end' : 'flex-start',
          marginTop: topHightlight ? 2 : 5,
          marginBottom: bottomHightlight ? 2 : 5,
        },
        {
          maxWidth: normalizeMin(320),
          paddingHorizontal: 15,
          paddingVertical: 6,
          borderRadius: 18,
          minHeight: 34, justifyContent: 'center', alignItems: 'center',
        },
        sefl && {
          borderTopRightRadius: topHightlight ? 5 : 18,
          borderBottomRightRadius: bottomHightlight ? 5 : 18,
        },
        !sefl && {
          borderTopLeftRadius: topHightlight ? 5 : 18,
          borderBottomLeftRadius: bottomHightlight ? 5 : 18,
        },
        ]}>
        <Text style={[AppStyles.TextH3, { color: sefl ? 'white' : Colors.fourth }]}>{message}</Text>
      </View>
    );
  }
}

Message.propTypes={
  sefl: PropTypes.bool,
  topHightlight: PropTypes.bool,
  bottomHightlight: PropTypes.bool,
  message: PropTypes.bool,
};