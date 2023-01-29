import { atlas } from '@/data/page-data';
import { Flex, Center, Heading, Badge, Box, Text, Image } from '@chakra-ui/react';

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
            <Image src="/logo.png" alt="atlas logo" w={{ base: '100px', md: '200px' }} />
            <Heading color="accent_yellow" fontSize={{ md: '7xl', base: '5xl' }} fontWeight="300">
              atlas.
            </Heading>
          </Flex>
        </Box>
        <Box w={{ base: '100vw', md: '50vw' }} bgColor="#000000">
          <Center h="100vh">
            <Flex direction="column" gap={5} mx="50px">
              <Badge w="max-content" size="xl" colorScheme="green">
                Coming Soon
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
