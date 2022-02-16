import React, { useEffect, useState } from 'react';
import Header from './Header';
import Collapsed from './Collapsed';
import Expanded from './Expanded';
import Header from './Header';

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
      return child.props.children[0].props.id === index
        ? React.cloneElement(child.props.children[0], {
            isOpen,
            open,
            handleOpen,
          })
        : React.cloneElement(child.props.children[0], {
            isOpen,
            handleOpen,
          });
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
      {children[0].props.children}
      {React.Children.map(children[1], (child) => {
        const collapsed = cloneElement(child);
        const expanded = cloneExpElement(child);
        const currentIdElement = child.props.children[0].props.id;
        console.log(child.props.children[0].props);

        return (
          <>
            {collapsed}
            {index === currentIdElement && expanded}
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
