import { FC } from 'react';
import { View } from '@react-pdf/renderer';
import { WorkSubItemProps } from './models';
import { commonStyles } from '../constants';
import Paragraph from '../Paragraph';
import Space from '../Space';


const WorkSubItem: FC<WorkSubItemProps> = ({ item }) => (
  <View style={[commonStyles.col, { alignItems: 'flex-start' }]}>
    <Paragraph bold={item?.name} desc={item?.description ?? ''} />
    <Space variant="xl" />
    <Paragraph desc={item?.date ? `- Date: ${item?.date}` : ''} />
    <Paragraph
      desc={item?.technologies ? `- Technologies: ${item?.technologies}` : ''}
    />
    <Space variant="large" />
  </View>
);

export default WorkSubItem;
