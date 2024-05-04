import { FC } from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import { data } from '../data';

const styles = StyleSheet.create({});

const Profile: FC = () => {
  return (
    <View style={styles}>
      <Heading title={'PROFILE'} />
      <Paragraph desc={data.profile} />
    </View>
  );
};

export default Profile;
