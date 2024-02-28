import { Flex, Image, Text, Container, Group, Card, Anchor, Box, Avatar, Badge, Input } from "@mantine/core";
import { IconAlertCircleFilled, IconSearch } from "@tabler/icons-react";

export default function InfoMain() {
  return (

    <Container style={{
      padding: '20px 12px 0',
      backgroundColor: '#fffdf9'
    }}>
      <Input placeholder="Search" leftSection={<IconSearch size={16} />} />

      <Text size="lg" mt={'md'}>
        Load PRO
        <Anchor href="https://www.google.com/" target="_blank" underline="always" c={'#fe7e4f'} ml={'4px'}>
          #27658930
        </Anchor>
      </Text>

      <Box className='ticket-data'>
        <Flex justify="space-between" align="flex-start" mt={'sm'}>
          <Text>Labels</Text>
          <Box>
            <Badge variant="default" color="gray" mr={'4px'} styles={{ label: { fontWeight: 400, textTransform: 'capitalize' } }}>
              Carrier
            </Badge>
            <Badge variant="default" color="gray" styles={{ label: { fontWeight: 400, textTransform: 'capitalize' } }}>
              Carrier Info
            </Badge>
          </Box>
        </Flex>

        <Flex justify="space-between" align="flex-start" mt={'sm'}>
          <Text>Status</Text>
          <Box>
            <Badge
              variant="light"
              color="red"
              radius="sm"
              leftSection={<IconAlertCircleFilled style={{ width: '14px', height: '14px' }} />}
              styles={{
                root: { border: '1px solid red' },
                label: { fontWeight: 400, textTransform: 'capitalize' }
              }}
            >
              High
            </Badge>
          </Box>
        </Flex>
      </Box>

      <Group justify="space-between" align="flex-start" className='card-data' mt={'sm'}>
        <Avatar
          variant="outline"
          radius="xl"
          color="orange"
          src="/beacon_logo_small.png"
          alt="Beacon Logo"
          styles={{
            root: {
              border: '1px solid orange',
              backgroundColor: 'white'
            },
            image: {
              width: '18px',
              height: '18px',
              position: 'absolute',
              top: '50%',
              right: '0%',
              transform: 'translate(-50%, -50%)'
            }
          }}
        />

        <Card
          shadow="sm"
          radius="md"
          withBorder
          style={{
            background: 'linear-gradient(109deg, rgba(63,83,216,1) 40%, rgba(4,21,139,1) 100%)',
            width: '320px',
            color: 'white',
            padding: '16px 14px'
          }}
        >
          <Group justify="space-between">
            <Group justify="space-between">
              <Box>
                <Text>Good morning, Mary!</Text>
                <Text fz="10px">Please confirm the following updates:</Text>

                <Anchor href="https://www.google.com/" target="_blank" underline="always" c={'#ffffff'}>
                  Carrier Info
                </Anchor>
              </Box>
              <Image src="/beacon_card_illustration.png" alt="Beacon Illustration" w={80} />
            </Group>
          </Group>
        </Card>
      </Group>
    </Container>
  )
}
