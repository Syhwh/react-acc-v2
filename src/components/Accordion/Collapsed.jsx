import React, { useState } from 'react';
import { Heading, Flex, Box } from 'theme-ui';
import { ArrowIcon } from '../shared/ArrowIcon';

const AccordionItem = ({ children, id, isOpen, open, handleOpen }) => {
  return (
    <Flex
      id={id}
      sx={{
        padding: '19px 0',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderBottom: '1px solid #EAE4CE',
        ':last-of-type': {
          borderBottom: 'none',
        },
      }}
    >
      <Box
        sx={{
          maxWidth: '90%',
          textAlign: 'left',
        }}
      >
        <Heading p={0} as="h2" variant="subHeading" color="secondary">
          {children}
        </Heading>
      </Box>
      <ArrowIcon
        handleClick={handleOpen}
        showAnswer={open}
        isOpen={isOpen}
        index={id}
      />
    </Flex>
  );
};

export default AccordionItem;
