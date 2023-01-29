import { Flex, Center, Heading, Box, Text } from '@chakra-ui/react';

const PageContent = ({
  title,
  description,
  color,
  id,
  index
}: {
  title: string;
  color: string;
  description: string;
  id: string;
  index: number;
}) => {
  return (
    <section id={id}>
      <Flex direction={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}>
        <Box
          w={{ base: '100vw', md: '50vw' }}
          h={{ base: '50vh', md: '100vh' }}
          className="bg"
          backgroundSize={{ base: '250% auto', md: 'cover' }}
          backgroundPosition={{ base: 'center', md: 'bottom' }}>
          <Center h={{ base: '50vh', md: '100vh' }} bgColor="#00000080">
            <Heading color={color} fontSize={{ md: '7xl', base: '5xl' }} fontWeight="300">
              {title}
            </Heading>
          </Center>
        </Box>
        <Box w={{ base: '100vw', md: '50vw' }} bgColor="#000000">
          <Center h="100vh">
            <Text fontSize={{ md: '3xl', base: '2xl' }} fontWeight="300" mx="50px">
              {description}
            </Text>
          </Center>
        </Box>
      </Flex>
    </section>
  );
};

export default PageContent;
