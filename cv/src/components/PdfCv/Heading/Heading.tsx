import { FC } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { secondary, textSecondary } from '../constants';
import HorizontalLine from '../HorizontalLine';
import Space from '../Space';
import { HeadingProps } from './models.d';

const styles = StyleSheet.create({
  containerHuge: {
    marginBottom: 10,
  },
  huge: {
    fontSize: 15,
    color: secondary,
    fontFamily: 'Arimo',
    fontWeight: 'bold',
  },
  large: {
    fontSize: 12,
    color: textSecondary,
    fontWeight: 'bold',
  },
});

const Heading: FC<HeadingProps> = ({ variant = 'huge', title }) => (
  <View>
    <Text style={styles[variant]}>{title}</Text>
    {variant === 'huge' ? <HorizontalLine /> : ''}
    {variant === 'huge' ? <Space variant="xxl" /> : ''}
  </View>
);

export default Heading;
