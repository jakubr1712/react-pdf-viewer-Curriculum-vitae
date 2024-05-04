import { FC } from 'react';
import { Text, StyleSheet, View } from '@react-pdf/renderer';
import { textSecondary, textPrimary } from '../constants';
import { ParagraphProps } from './models';

const styles = StyleSheet.create({
  xl: {
    fontSize: 10,
    color: textPrimary,
    fontFamily: 'Arimo',
    lineHeight: 1.4,
  },
  huge: {
    fontSize: 9,
    color: textSecondary,
    fontFamily: 'Arimo',
    lineHeight: 1.4,
  },
});

const Paragraph: FC<ParagraphProps> = ({
  variant = 'huge',
  bold,
  desc,
  styleElement,
}) => (
  <View>
    <Text style={{ ...styles[variant], ...styleElement }}>
      {bold ? (
        <Text style={{ ...styles[variant], fontWeight: 'bold' }}>{bold}</Text>
      ) : (
        ''
      )}
      {bold ? <Text style={{ ...styles[variant] }}> - </Text> : ''}
      {desc}
    </Text>
  </View>
);

export default Paragraph;
