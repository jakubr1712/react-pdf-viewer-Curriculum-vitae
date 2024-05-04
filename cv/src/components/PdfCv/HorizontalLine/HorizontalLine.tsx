import { FC } from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { secondary } from '../constants';

const styles = StyleSheet.create({
  horizontalLine: {
    height: 2,
    width: '60px',
    backgroundColor: secondary,
  },
});

const HorizontalLine: FC = () => <View style={styles.horizontalLine} />;

export default HorizontalLine;
