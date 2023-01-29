import { Flex, Center, Heading, Box } from '@chakra-ui/react';
import TeamMembers from './team-members';

const TeamSection = () => {
  return (
    <section id="our-team">
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Box
          w={{ base: '100vw', md: '50vw' }}
          h={{ base: '50vh', md: '100vh' }}
          className="bg"
          backgroundSize={{ base: '250% auto', md: 'cover' }}
          backgroundPosition="center">
          <Center h={{ base: '50vh', md: '100vh' }} bgColor="#00000080">
            <Heading color="accent_yellow" fontSize={{ md: '7xl', base: '5xl' }} fontWeight="300">
              Our Team
            </Heading>
          </Center>
        </Box>
        <Box w={{ base: '100vw', md: '50vw' }} bgColor="#000000" overflow="hidden">
          <Center h="100vh">
            <TeamMembers />
          </Center>
        </Box>
      </Flex>
    </section>
  );
};

export default TeamSection;
