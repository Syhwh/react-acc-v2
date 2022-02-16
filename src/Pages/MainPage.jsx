import React from 'react';
import { Container, Heading } from 'theme-ui';
import Accordion from '../components/Accordion/Accordion';

import data from '../utils/data';

export const MainPage = () => {
  return (
    <Container
      sx={{
        padding: '32px 20px 52px 20px',
        textAlign: 'left',
        '@media screen and (min-width: 60em)': {
          padding: '56px 286px',
          width: '100%',
          textAlign: 'center',
        },
      }}
    >
      <Heading
        variant={'heading'}
        sx={{
          width: '80%',
          fontSize: [2, 4],
          height: '1rem',
          marginBottom: '1.8rem',
          '@media screen and (min-width: 40em)': {
            width: '100%',
          },
        }}
      >
        {heading}
      </Heading>
      <Accordion initial={data.faqs[0]}>
        {data.faqs.map(({ question, answer }, idx) => (
          <Accordion.Item key={idx}>
            <Accordion.Collapsed id={idx}>{question}</Accordion.Collapsed>
            <Accordion.Expanded>{answer}</Accordion.Expanded>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};
