import React from 'react';
import { Heading } from 'theme-ui';

const Header = ({ children }) => {
  return (
    <Heading
      as="h2"
      variant={'heading'}
      sx={{
        width: '80%',
        fontSize: [2, 4],
        height: '1rem',
        marginBottom: '1.8rem',
        '@media screen and (min-width: 40em)': {
          width: '100%',
          color: 'red',
        },
      }}
    >
      {children}
    </Heading>
  );
};

export default Header;
