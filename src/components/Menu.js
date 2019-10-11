import React from 'react';
import {
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/core';
import Messages from './Messages';
import Images from './Images';

const MENU_LIST = [
  { id: 1, name: 'Messages', component: Messages },
  { id: 2, name: 'Images', component: Images },
];

function Menu() {
  return (
    <Stack mr="auto" ml="auto" width={['100%', '80%', '70%', '60%']}>
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
    </Stack>
  );
}

export default Menu;
