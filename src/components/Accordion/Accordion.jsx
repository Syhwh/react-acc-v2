import React, { useState } from 'react';
import Collapsed from './Collapsed';
import Expanded from './Expanded';

const Accordion = ({ children, initial }) => {
  // const isOpen = index === activeIndex;
  // const [open, setOpen] = useState(isOpen);
  console.log('children');
  // const handleOnclick = () => {
  //   selectIndex(index);
  //   setOpen(isOpen && !open ? isOpen : !isOpen);
  // };

  console.log('render Accordion');
  // const [open, setOpen] = useState(initial);

  // const handleOpen = (e) => {
  //   const id = e.target.getAttribute('data-id');
  //   id === open ? setOpen('') : setOpen(id);
  // };

  return (
    <div>
      {React.Children.map(children, (child) => {
        const expanded = child.props.children[1];
        console.log(expanded.props.children);
        // console.log(child);
        return (
          <div>
            <div>
              {expanded}
              {/* {id === open && expanded} */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Accordion.Collapsed = Collapsed;
Accordion.Expanded = Expanded;
Accordion.Item = ({ children }) => children;

export default Accordion;
