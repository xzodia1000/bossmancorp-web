import { atlas } from '@/data/page-data';
import { Flex, Center, Heading, Badge, Box, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';

const AtlasSection = () => {
  return (
    <section id="atlas">
      <Flex direction={{ base: 'column', md: 'row-reverse' }}>
        <Box
          w={{ base: '100vw', md: '50vw' }}
          h={{ base: '50vh', md: '100vh' }}
          className="bg"
          backgroundSize="cover"
          backgroundPosition="center">
          <Flex
            h={{ base: '50vh', md: '100vh' }}
            w="100%"
            bgColor="#00000080"
            direction="column"
            justify="center"
            alignItems="center">
            <Link href="https://1drv.ms/u/s!Apo4TvaGVjtKjzqxh0gNcA__v6IS?e=Su24MB" target="_blank">
              <Image
                src="/app-qr.png"
                alt="atlas logo"
                w={{ base: '200px', md: '300px' }}
                borderRadius={15}
              />
            </Link>
          </Flex>
        </Box>
        <Box w={{ base: '100vw', md: '50vw' }} bgColor="#000000">
          <Center h="100vh">
            <Flex direction="column" gap={5} mx="50px">
              <Badge w="max-content" size="xl" colorScheme="red">
                New
              </Badge>
              <Text fontSize={{ md: '3xl', base: '2xl' }} fontWeight="300">
                {atlas.description}
              </Text>
            </Flex>
          </Center>
        </Box>
      </Flex>
    </section>
  );
};

export default AtlasSection;
