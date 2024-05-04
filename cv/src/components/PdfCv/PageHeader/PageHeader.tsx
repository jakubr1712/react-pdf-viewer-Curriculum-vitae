import { FC } from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { commonStyles, primary } from '../constants';
import { PageHeaderProps } from './models';

const styles = StyleSheet.create({
  header: {
    backgroundColor: primary,
    height: 90,
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Arimo',
    fontWeight: 'bold',
  },
});

const PageHeader: FC<PageHeaderProps> = () => (
  <View style={styles.header}>
    <View
      style={[commonStyles.col, { alignItems: 'flex-start', paddingLeft: 15 }]}
    >
      <Text style={[styles.title]}>John Doe</Text>
    </View>
  </View>
);

export default PageHeader;
