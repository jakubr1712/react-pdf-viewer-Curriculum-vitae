import { FC } from 'react';
import { View } from '@react-pdf/renderer';
import Heading from '../Heading';
import WorkItem from '../WorkItem';
import { data } from '../data';



const Education: FC = () => {
  return (
    <View>
      <Heading title={'EDUCATION'} />
      <WorkItem work={data.education} />
    </View>
  );
};

export default Education;
