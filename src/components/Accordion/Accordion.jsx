import React, { useState } from 'react';
import Collapsed from './Collapsed';
import Expanded from './Expanded';

const Accordion = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState();
  const isOpen = index === open;
  console.log('children');
  const handleOpen = (e) => {
    console.log('clicked');
    console.log(e.target.parentNode.getAttribute('aria-controls'));
    setIndex(e.target.parentNode.getAttribute('aria-controls'));
    setOpen(true);
  };

  const cloneElement = (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child.props.children[0], {
        isOpen,
        open,
        handleOpen,
      });
    }
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        const collapsed = cloneElement(child);
        const expanded = child.props.children[1];

        return (
          <>
            {collapsed}
            {index && open && expanded}
          </>
        );
      })}
    </div>
  );
};

Accordion.Collapsed = Collapsed;
Accordion.Expanded = Expanded;
Accordion.Item = ({ children }) => children;

export default Accordion;
