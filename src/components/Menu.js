import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';
import Messages from './Messages';
import Images from './Images';

const MENU_LIST = [
  { id: 1, name: 'Messages', component: Messages },
  { id: 2, name: 'Images', component: Images },
];

function Menu() {
  return (
    <Tabs>
      <TabList>
        {MENU_LIST.map(({ id, name }) => (
          <Tab key={id}>{name}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {MENU_LIST.map(({ id, component: Component }) => (
          <TabPanel key={id}>
            <Component />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

export default Menu;
