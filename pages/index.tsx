import Head from 'next/head';
import { Badge, Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import { IconArrowDownCircle } from '@tabler/icons-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useEffect } from 'react';
import { content } from '@/data/page-data';
import PageContent from '@/components/page-content';
import AtlasSection from '@/components/atlas-section';
import TeamSection from '@/components/team-section';
import { bg } from '@/data/page-data';
import Link from 'next/link';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  function scroll() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let tween: any = gsap.to(window, {
      scrollTo: {
        y: innerHeight,
        autoKill: false
      },
      duration: 1,
      onComplete: () => (tween = null),
      overwrite: true
    });
  }

  const getRatio = (el: any) => window.innerHeight / (window.innerHeight + el.offsetHeight);
  useEffect(() => {
    gsap.utils.toArray('section').forEach((section: any, i) => {
      section.bg = section.querySelector('.bg');

      // Give the backgrounds some random images
      section.bg.style.backgroundImage = `url(${bg[i]})`;

      // the first image (i === 0) should be handled differently because it should start at the very top.
      // use function-based values in order to keep things responsive
      gsap.fromTo(
        section.bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-window.innerHeight * getRatio(section)}px` : '50% 0px'
        },
        {
          backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: () => (i ? 'top bottom' : 'top top'),
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true // to make it responsive
          }
        }
      );
    });
  }, []);

  return (
    <>
      <Head>
        <title>Bossman Corp</title>
        <meta name="description" content="Bossman Corp company website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="home">
        <Box
          h="100vh"
          maxW="100vw"
          overflow="hidden"
          overflowX="hidden"
          className="bg"
          backgroundSize="cover"
          backgroundPosition="center">
          <Flex
            h="100vh"
            w="100vw"
            alignItems="center"
            justifyContent="center"
            direction="column"
            gap={5}
            bgColor="#00000080">
            <Spacer />
            <Heading
              as={motion.h2}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition="2s easeIn"
              fontSize={{ base: '4xl', md: '8xl' }}
              fontWeight="300">
              BOSSMAN CORP
            </Heading>
            <Heading
              as={motion.h2}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition="2s easeIn"
              mb="50px"
              textAlign="center"
              color="accent_yellow"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="500">
              EMPOWERING INNOVATION FOR A BETTER TOMORROW.
            </Heading>
            <Box
              as={motion.div}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition="2s easeIn"
              onClick={scroll}
              _hover={{ cursor: 'pointer' }}>
              <IconArrowDownCircle size={70} />
            </Box>
            <Spacer />
            <Link href="https://www.midjourney.com" passHref target="_blank">
              <Badge mb="20px" colorScheme="yellow">
                Images by Midjourney
              </Badge>
            </Link>
          </Flex>
        </Box>
      </section>
      {content.map((page, index) => (
        <PageContent
          key={page.id}
          title={page.title}
          color={page.color}
          id={page.id}
          description={page.description}
          index={index}
        />
      ))}
      <AtlasSection />
      <TeamSection />
      <Footer />
    </>
  );
}
