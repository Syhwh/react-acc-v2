import React, { useEffect, useState } from 'react';
import { Box, Flex } from 'theme-ui';
import Header from './Header';
import Collapsed from './Collapsed';
import Expanded from './Expanded';
import Header from './Header';
import { ArrowIcon } from '../shared/ArrowIcon';
import { DT } from '../shared/DescriptionListComponents';
import { DD } from '../shared/DescriptionListComponents';

const Accordion = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    const currentElementIndex =
      e.target.parentNode.getAttribute('aria-controls');

    index === parseInt(currentElementIndex)
      ? setIndex('')
      : setIndex(parseInt(currentElementIndex));

    setIsOpen(index === parseInt(currentElementIndex));
  };

  useEffect(() => {
    setOpen(isOpen && open ? isOpen : !isOpen);
  }, [index]);

  const cloneElement = (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child.props.children[0]);
    }
  };
  const cloneExpElement = (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child.props.children[1], {
        id: index,
      });
    }
  };
  return (
    <>
      {React.cloneElement(children[0])}

      {React.Children.map(children[1], (child) => {
        const collapsed = cloneElement(child);
        const expanded = cloneExpElement(child);
        const currentIdElement = child.props.children[0].props.id;

        return (
          <>
            <Flex
              as="dl"
              id={index}
              sx={{
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                width: '100%',
                padding: '19px 0',
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
                <DT>{collapsed}</DT>
                <DD>{index === currentIdElement && expanded}</DD>
              </Box>
              <ArrowIcon
                handleClick={handleOpen}
                showAnswer={index === currentIdElement}
                isOpen={isOpen}
                index={currentIdElement}
              />
            </Flex>
          </>
        );
      })}
    </>
  );
};
Accordion.Header = Header;
Accordion.Collapsed = Collapsed;
Accordion.Expanded = Expanded;
Accordion.Item = ({ children }) => children;

export default Accordion;
