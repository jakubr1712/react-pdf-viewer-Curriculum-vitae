import { FC } from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { WorkItemProps } from './models';
import { commonStyles, secondary } from '../constants';
import WorkSubItem from '../WorkSubItem';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Space from '../Space';

const styles = StyleSheet.create({
  desc: {
    color: secondary,
    fontStyle: 'italic',
  },
  box: {
    backgroundColor: secondary,
    width: 90,
    textAlign: 'center',
    padding: 2,
  },
  boxText: {
    color: '#fff',
    fontFamily: 'Arimo',
  },
});

const Description: FC<WorkItemProps> = ({ work }) => {
  const { position, company, city, date, projects } = work;

  const renderProjects = () => {
    return projects.map(item => <WorkSubItem item={item} />);
  };
  return (
    <View style={[commonStyles.col, { alignItems: 'flex-start' }]}>
      <View
        style={[
          commonStyles.row,
          {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        ]}
      >
        <Heading variant="large" title={position} />
        <View style={styles.box}>
          <Paragraph desc={date} styleElement={styles.boxText} />
        </View>
      </View>
      <Paragraph desc={`${company} (${city})`} styleElement={styles.desc} />
      <Space variant="xl" />
      {renderProjects()}
      <Space variant="xxl" />
      {date === '01/2022 - 09/2023' ? (
        <>
          <Space variant="large" />
          <Space variant="large" />
          <Space variant="large" />
          <Space variant="large" />
          <Space variant="large" />
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Description;
