import { MantineProvider } from '@mantine/core';
import Banner from './Banner'
import InfoMain from './InfoMain'
import TabSection from './TabSection';

const App = () => {

  return (
    <MantineProvider
      theme={{
        fontFamily: 'Garet, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Garet, sans-serif' },
      }}
    >
      <Banner />
      <InfoMain />
      <TabSection />
    </MantineProvider>
  );
};

export default App;
