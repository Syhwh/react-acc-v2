import React from 'react';
import { IconButton } from 'theme-ui';
import { keyframes } from '@emotion/react';

export const ArrowIcon = ({ showAnswer, handleClick, isOpen, index }) => {
  console.log({ showAnswer, handleClick, isOpen, index });
  const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
`;

  return (
    <IconButton
      sx={{
        padding: 0,
        cursor: 'pointer',
        animation: showAnswer && `${rotation} 0.2s linear 0s 1  `,
        height: '1rem',
        transform: showAnswer ? 'rotateZ(90deg)' : '',
      }}
      onClick={handleClick}
      aria-controls={index}
      aria-expanded={isOpen}
    >
      <svg
        style={{
          translate: '25%',
        }}
        width="24"
        height="12"
        viewBox="0 0 24 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 11.5L23 6M23 6L16 0.499998M23 6L-2.00344e-07 6"
          stroke="#113034"
        />
      </svg>
    </IconButton>
  );
};
