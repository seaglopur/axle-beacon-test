import { Flex, Image, CloseButton } from "@mantine/core";

export default function Banner() {
  return (
      <Flex
        justify={'space-between'}
        align={'center'}
        style={{
          height: '60px',
          backgroundColor: '#1c1c1c',
          padding: '12px 18px'
        }}
      >
        <Image src="/beacon_logo.png" alt="Beacon Logo" h={20} />
        <CloseButton variant="transparent" />
      </Flex>
  )
}
