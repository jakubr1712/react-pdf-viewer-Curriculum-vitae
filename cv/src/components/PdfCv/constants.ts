import { StyleSheet } from '@react-pdf/renderer';

export const commonStyles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  colStart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export const enclosure = `I hereby give my consent for my personal data included in my application to be processed for the purposes of the recruitment process under the Personal Data Protection Act as of 29 August 1997, consolidated text: Journal of Laws 2016, item 922 as amended. I understand that I have the right to withdraw my consent at any time, and that withdrawal of my consent does not affect the lawfulness of processing based on consent before its withdrawal.`;

export const textPrimary = '#4B4B4B';
export const textSecondary = '#464646';

export const primary = '#800020';
export const secondary = '#800020';
export const bgc = '#F4F4F4';
