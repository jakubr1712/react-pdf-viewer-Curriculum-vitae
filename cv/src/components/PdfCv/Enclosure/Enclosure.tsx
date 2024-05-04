import { FC } from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { enclosure } from '../constants';
import Paragraph from '../Paragraph';
import { EnclosureProps } from './models';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
});

const Enclosure: FC<EnclosureProps> = () => (
  <View style={styles.container}>
    <Paragraph
      desc={enclosure}
      styleElement={{ fontStyle: 'italic', fontFamily: 'Arimo', fontSize: '8' }}
    />
    ;
  </View>
);

export default Enclosure;
