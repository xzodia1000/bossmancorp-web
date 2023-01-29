import { Flex, Box, Container, Heading, Text, Spacer, Divider, chakra } from '@chakra-ui/react';
import { IconMail, IconPhone } from '@tabler/icons-react';
const Footer = () => {
  const Description = chakra(Text, {
    baseStyle: {
      fontSize: { base: 'sm', md: 'lg' }
    }
  });
  return (
    <Box overflow="hidden">
      <Container mt="20px" mb="20px" maxW="container.xl">
        <Flex direction="column" gap={8}>
          <Flex gap={5}>
            <Flex direction="column" gap={2}>
              <Heading size={{ base: 'sm', md: 'lg' }}>Bossman Corp</Heading>
              <Flex alignItems="center" gap={1}>
                <IconMail size={20} />
                <Description>bossmancorp@gmail.com</Description>
              </Flex>
              <Flex alignItems="center" gap={1}>
                <IconPhone size={20} />
                <Description>+971 550000000</Description>
              </Flex>
            </Flex>
            <Spacer />
            <Flex direction="column" gap={2}>
              <Heading size={{ base: 'sm', md: 'lg' }}>Heriot-Watt University</Heading>
              <Description>Knowledge Village</Description>
              <Description>Dubai, UAE</Description>
            </Flex>
          </Flex>
          <Divider />
          <Text textAlign="center">© 2023 Bossman Corp. All rights reserved.</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
