import { FC } from 'react';
import {
  Document,
  Page,
  StyleSheet,
  View,
  Image,
  Font,
} from '@react-pdf/renderer';
import PageHeader from './PageHeader';
import PesonalInfo from './PesonalInfo';
import Skills from './Skills';
import Work from './Work';
import Profile from './Profile';
import Education from './Education';
import Space from './Space';
import Interests from './Interests';
import Enclosure from './Enclosure';
import { bgc } from './constants';

import cvUrl from './cv.jpg';

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
    color: '#000',
  },
  cvImg: { padding: 5 },
  leftColumn: {
    width: '34%',
    backgroundColor: bgc,
    paddingTop: 10,
    padding: 20,
    height: '750.75',
  },
  rightColumn: {
    width: '66%',
    padding: 15,
  },
});

Font.register({
  family: 'Arimo',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/arimo/v29/P5sfzZCDf9_T_3cV7NCUECyoxNk37cxsBxDAVQI4aA.ttf',
    },
    {
      src: 'https://fonts.gstatic.com/s/arimo/v29/P5sfzZCDf9_T_3cV7NCUECyoxNk3CstsBxDAVQI4aA.ttf',
      fontWeight: 'bold',
    },
    {
      src: 'https://fonts.gstatic.com/s/arimo/v29/P5sdzZCDf9_T_10c3i9MeUcyat4iJY-ERBrEdwcoaKww.ttf',
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
  ],
});
export const PdfCv: FC = () => {
  return (
    <Document>
      <Page size="A4" >
        <PageHeader />
        <View style={styles.page}>
          <View style={styles.leftColumn}>
            <Image style={styles.cvImg} src={cvUrl} />
            <Space />
            <PesonalInfo />
            <Space />
            <Skills />
            <Space />
            <Interests />
          </View>
          <View style={styles.rightColumn}>
            <Profile />
            <Space />
            <Work />
            <Space variant="s" />
            <Education />
            <Space variant="xl" />
            <Enclosure />
          </View>
        </View>
      </Page>
    </Document>
  );
};
