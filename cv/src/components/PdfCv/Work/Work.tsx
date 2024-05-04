import { FC } from 'react';
import { View } from '@react-pdf/renderer';
import Heading from '../Heading';
import WorkItem from '../WorkItem';
import { data } from '../data';


const Work: FC = () => {
  const renderWorkExperience = data.work.map(work => <WorkItem work={work} />);

  return (
    <View>
      <Heading title={'WORK EXPERIENCE'} />
      {renderWorkExperience}
    </View>
  );
};

export default Work;
