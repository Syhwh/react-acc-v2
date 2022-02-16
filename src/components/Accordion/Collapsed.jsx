import React from 'react';
import { Heading } from 'theme-ui';

const AccordionItem = ({ children }) => (
  <Heading p={0} as="h2" variant="subHeading" color="secondary">
    {children}
  </Heading>
);

export default AccordionItem;
