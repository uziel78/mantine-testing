import { AppShell, Footer, Group, Header, Text } from '@mantine/core';

export const ApplicationContainer = ({ children }) => {
  return (
    <AppShell
      styles={{
        main: {
          background: '#FFFFFF',
          width: '100vw',
          height: '100vh',
          paddingLeft: '0px',
        },
      }}
      fixed
      header={
        <Header height={70} p='md'>
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <Text size='lg' weight='bolder'>
              Alpaca Activity
            </Text>
          </div>
        </Header>
      }
      footer={
        <Footer height={60} p='md'>
          <Group position='apart' spacing='xl'>
            <Text size='sm'>
              <span style={{ fontWeight: 'bolder' }}>🕒 List Time:</span> 0h 25m
            </Text>
            <Text size='sm'>
              <span style={{ fontWeight: 'bolder' }}>🎉 End Time:</span> 7:51PM
            </Text>
          </Group>
        </Footer>
      }
    >
      {children}
    </AppShell>
  );
};
