import {
  Flex,
  Box,
  Container,
  Heading,
  Text,
  Spacer,
  Divider,
  chakra,
  color
} from '@chakra-ui/react';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandTwitter,
  IconExternalLink,
  IconMail,
  IconPhone
} from '@tabler/icons-react';
import Link from 'next/link';

const SocialMedia = [
  {
    icon: <IconBrandInstagram />,
    link: 'https://www.instagram.com/atlasbybossman/'
  },
  {
    icon: <IconBrandTwitter />,
    link: 'https://twitter.com/AtlasByBossman'
  },
  {
    icon: <IconBrandFacebook />,
    link: 'https://www.facebook.com/profile.php?id=100089640354529'
  },
  {
    icon: <IconBrandTiktok />,
    link: 'https://www.tiktok.com/@atlasbybossman'
  }
];

const Description = chakra(Text, {
  baseStyle: {
    fontSize: { base: 'sm', md: 'lg' }
  }
});

const SocialMediaLink = ({ icon, link }: any) => {
  return (
    <Box _hover={{ color: 'accent_purple' }}>
      <Link href={link} target="_blank" passHref>
        {icon}
      </Link>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box overflow="hidden">
      <Container mt="20px" mb="20px" maxW="container.xl">
        <Flex direction="column" gap={5}>
          <Flex gap={5}>
            <Flex direction="column" gap={2}>
              <Heading size={{ base: 'sm', md: 'lg' }}>Bossman Corp</Heading>
              <Link href="mailto:bossmancorp@protonmail.com" target="_blank" passHref>
                <Flex alignItems="center" gap={1} _hover={{ color: 'accent_purple' }}>
                  <IconMail size={20} />
                  <Description>bossmancorp@protonmail.com</Description>
                  <Box display={{ base: 'none', md: '' }}>
                    <IconExternalLink size={20} />
                  </Box>
                </Flex>
              </Link>
              <Flex alignItems="center" gap={1}>
                <IconPhone size={20} />
                <Description>+971 550000000</Description>
              </Flex>
              <Flex gap={5} mt="5px">
                {SocialMedia.map((social) => (
                  <SocialMediaLink key={social.link} icon={social.icon} link={social.link} />
                ))}
              </Flex>
            </Flex>
            <Spacer />
            <Flex direction="column" gap={2}>
              <Heading size={{ base: 'sm', md: 'lg' }}>Heriot-Watt University</Heading>
              <Description>Knowledge Village</Description>
              <Description>Dubai, UAE</Description>
              <Link href="https://www.hw.ac.uk/" target="_blank" passHref>
                <Flex alignItems="center" gap={1} _hover={{ color: 'accent_purple' }}>
                  <Description>Visit site</Description>
                  <IconExternalLink size={20} />
                </Flex>
              </Link>
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
