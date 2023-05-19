import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

// Could import this to constants
const data = [
  { number: 2019, text: 'Relocated and settled in Toronto', },
  { number: 2021, text: 'Recieved Permenant Residency in Canada', },
  { number: 2022, text: 'Began Learning to code in JavaScript'},
  { number: 2022, text: 'Started Muay Thai Kickboxing', }
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
