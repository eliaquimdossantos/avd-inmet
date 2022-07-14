
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Chart from './Chart'
import natal from './data/natal.json';
import apodi from './data/apodi.json';
import caico from './data/caico.json';
import calcanhar from './data/calcanhar.json';
import ipanguacu from './data/ipanguacu.json';
import macau from './data/macau.json';
import mossoro from './data/mossoro.json';
import santa_cruz from './data/santa_cruz.json';

import React from "react";

function App() {
  return (
    <div className="App">
      <h3>Comparação da média de temperatura e umidade entre dias chuvosos e não chuvosos</h3>
      <Tabs>
        <TabList>
          <Tab>APODI</Tab>
          <Tab>CAICÓ</Tab>
          <Tab>CALCANHAR</Tab>
          <Tab>IPANGUAÇU</Tab>
          <Tab>MACAU</Tab>
          <Tab>MOSSORÓ</Tab>
          <Tab>NATAL</Tab>
          <Tab>SANTA CRUZ</Tab>
        </TabList>

        <TabPanel>          
          <Chart cityData={apodi} />
        </TabPanel>
        <TabPanel>          
          <Chart cityData={caico} />
        </TabPanel>
        <TabPanel>          
          <Chart cityData={calcanhar} />
        </TabPanel>
        <TabPanel>          
          <Chart cityData={ipanguacu} />
        </TabPanel>
        <TabPanel>          
          <Chart cityData={macau} />
        </TabPanel>
        <TabPanel>          
          <Chart cityData={mossoro} />
        </TabPanel>
        <TabPanel>          
          <Chart cityData={natal} />
        </TabPanel>
        <TabPanel>          
          <Chart cityData={santa_cruz} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
