import React from 'react';
import { Heading } from 'theme-ui';
import { keyframes } from '@emotion/react';
import { MarkdownContent } from '../shared/MarkdownContent';

const Header = ({ children }) => {
  const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
  return (
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
  );
};

export default Expanded;
