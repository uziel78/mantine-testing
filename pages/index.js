import {
  ActionIcon,
  Box,
  Group,
  Text,
  Title,
  Stack,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { PlayerPlay, Settings, PlaylistAdd, Plus } from 'tabler-icons-react';

export default function Home() {
  //* access Mantine themes
  const theme = useMantineTheme();

  return (
    <Group direction='column' mt='-20px'>
      <Stack
        style={{
          backgroundColor: theme.colors.gray[0],
          width: '500px',
          height: '100vh',
        }}
        mx='auto'
      >
        <Group position='apart' style={{ width: '100%' }}>
          <ActionIcon color='gray' size='xl' m='sm' variant='transparent'>
            <Settings />
          </ActionIcon>
          <ActionIcon color='gray' size='xl' m='sm' variant='transparent'>
            <PlaylistAdd />
          </ActionIcon>
        </Group>

        <Stack
          spacing='none'
          mt='sm'
          position='center'
          mx='auto'
          height='175px'
        >
          <Title order={1} style={{ fontWeight: '900', fontSize: '4rem' }}>
            25:00
          </Title>
          <Text>Work on Mantine tutorial</Text>
        </Stack>

        <Group mt='sm' position='center' mx='auto' mb='md'>
          <ActionIcon color='dark' size='xl' variant='transparent'>
            -5
          </ActionIcon>
          <ActionIcon radius='xl' color='dark' size='xl' variant='filled'>
            <PlayerPlay />
          </ActionIcon>
          <ActionIcon color='dark' size='xl' variant='transparent'>
            +5
          </ActionIcon>
        </Group>

        <Group
          mt='sm'
          mb='sm'
          position='center'
          mx='auto'
          direction='column'
          height='90px'
        >
          <UnstyledButton style={{ height: '100%', width: '260px' }}>
            <Group
              spacing='none'
              direction='column'
              mt='sm'
              p='sm'
              mx='auto'
              style={{
                background: 'rgb(238,238,238)',
                border: '1px dashed rgb(189, 189, 189)',
              }}
            >
              <Stack mx='auto'>
                <Box size='md' radius='xs' mx='auto'>
                  <Plus style={{ color: 'gray' }} />
                </Box>
                <Text variant='light' size='sm' color='dark gray'>
                  Add Task
                </Text>
              </Stack>
            </Group>
          </UnstyledButton>
        </Group>

        <Group
          mx='auto'
          styles={{
            width: '260px',
            justifyContent: 'space-between',
          }}
        >
          <Text sixe='xs'>❤️ Hide Complete</Text>
          <Text sixe='xs'>🎉 Clear Complete</Text>
          <Text sixe='xs'>🧹 Clear All</Text>
        </Group>
      </Stack>
    </Group>
  );
}
