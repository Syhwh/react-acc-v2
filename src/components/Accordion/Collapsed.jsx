import React from 'react';
import { Heading, Flex, Box } from 'theme-ui';
import { ArrowIcon } from '../shared/ArrowIcon';

const AccordionItem = ({ children }) => {
  return (
    <>
      <Heading p={0} as="h2" variant="subHeading" color="secondary">
        {children}
      </Heading>
    </>
  );
};

export default AccordionItem;
