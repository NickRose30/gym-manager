import React from 'react';
import { Drawer, DrawerSize } from '@blueprintjs/core';

const CustomerDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} size={DrawerSize.SMALL} onClose={onClose}>
      <div>this is some drawer content</div>
    </Drawer>
  );
};

export default CustomerDrawer;