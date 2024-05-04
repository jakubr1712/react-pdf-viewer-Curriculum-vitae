import { FC } from 'react';
import { View, StyleSheet, Image, Link } from '@react-pdf/renderer';
import { commonStyles } from '../constants';
import Paragraph from '../Paragraph';
import icon1 from '../icons/email.png';
import icon2 from '../icons/github.png';
import icon3 from '../icons/linkedin.png';
import icon4 from '../icons/location.png';
import icon5 from '../icons/phone.png';
import Heading from '../Heading';

const styles = StyleSheet.create({
  row: {
    marginBottom: 6,
    paddingRight: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    height: 14,
    width: 14,
    marginRight: 15,
  },
  link: {},
  desc: {
    fontSize: 8.7,
    fontFamily: 'Arimo',
  },
});

const PesonalInfo: FC = () => (
  <View style={[commonStyles.col, { alignItems: 'flex-start' }]}>
    <Heading title={'PERSONAL INFO'} />
    <View style={[commonStyles.row, styles.row]}>
      <Image style={styles.icon} src={icon1} />
      <Link style={styles.link} src={'mailto:#'}>
        <Paragraph
          desc={'johndoe@gmail.com'}
          variant={'xl'}
          styleElement={styles.desc}
        />
      </Link>
    </View>
    <View style={[commonStyles.row, styles.row]}>
      <Image style={styles.icon} src={icon5} />
      <Link style={styles.link} src={'tel:+48'}>
        <Paragraph
          desc={'+48123456789'}
          variant={'xl'}
          styleElement={styles.desc}
        />
      </Link>
    </View>
    <View style={[commonStyles.row, styles.row]}>
      <Image style={styles.icon} src={icon4} />
      <Paragraph desc={'Cracow'} variant={'xl'} styleElement={styles.desc} />
    </View>
    <View style={[commonStyles.row, styles.row]}>
      <Image style={styles.icon} src={icon2} />
      <Link style={styles.link} src={'#'}>
        <Paragraph
          desc={'https://github.com/johndoe'}
          variant={'xl'}
          styleElement={styles.desc}
        />
      </Link>
    </View>
    <View style={[commonStyles.row, styles.row]}>
      <Image style={styles.icon} src={icon3} />
      <Link
        style={styles.link}
        src={'#'}
      >
        <Paragraph
          desc={'in/johndoe/'}
          variant={'xl'}
          styleElement={styles.desc}
        />
      </Link>
    </View>
  </View>
);

export default PesonalInfo;
