import { FC } from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import { data } from '../data';

const styles = StyleSheet.create({
  skill: { marginBottom: 10 },
});

const Skills: FC = () => {
  const renderSkills = () => {
    return data.skills.map(skill => (
      <Paragraph desc={skill} styleElement={styles.skill} />
    ));
  };

  return (
    <View>
      <Heading title={'SKILLS'} />
      {renderSkills()}
    </View>
  );
};

export default Skills;
