import { FC } from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { SpaceProps } from './models';

const styles = StyleSheet.create({
  s: { height: 3 },
  m: { height: 5 },
  xl: { height: 8 },
  xxl: { height: 10 },
  large: { height: 15 },
});

const Space: FC<SpaceProps> = ({ variant = 'large' }) => (
  <View style={styles[variant]} />
);

export default Space;
