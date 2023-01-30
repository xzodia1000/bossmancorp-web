import { Avatar, Flex, Text, Spacer, Box } from '@chakra-ui/react';
import { team } from '@/data/members';
import {
  Carousel,
  CarouselItem,
  useCarouselItem,
  CarouselItems,
  useCarousel
} from 'chakra-framer-carousel';
import { IconArrowBigLeft, IconArrowBigRight } from '@tabler/icons-react';

const TeamMembers = () => {
  return (
    <Carousel>
      <Flex direction="column" gap={20} alignItems="center">
        <CarouselItems>
          {team.map((member, index) => (
            <CarouselItem key={member.title} index={index}>
              <Card name={member.name} image={member.image} title={member.title} index={index} />
            </CarouselItem>
          ))}
        </CarouselItems>
        <Navigation />
      </Flex>
    </Carousel>
  );
};

const Navigation = () => {
  const { onNext, onPrevious } = useCarousel();

  return (
    <Flex gap={10}>
      <Box onClick={onNext} cursor="pointer">
        <IconArrowBigLeft size={50} />
      </Box>
      <Box onClick={onPrevious} cursor="pointer">
        <IconArrowBigRight size={50} />
      </Box>
    </Flex>
  );
};

const Card = ({ name, image, title, index }: any) => {
  const { numberOfSlides, onClickHandler, position } = useCarouselItem();
  const isCenter = position === 'center';
  return (
    <Flex
      height={isCenter ? '350px' : '250px'}
      width={isCenter ? '300px' : '250px'}
      alignItems="center"
      direction="column"
      gap={5}
      boxShadow={'2xl'}
      filter={isCenter ? 'brightness(1)' : 'brightness(0.5)'}
      backgroundColor="gray.800"
      border="2px"
      borderColor="gray.700"
      rounded="lg"
      shadow="lg"
      as="button"
      onClick={onClickHandler}>
      <Avatar mt="20px" src={image} size={isCenter ? '2xl' : 'lg'} />
      <Text fontSize={isCenter ? 'xl' : 'md'} textAlign="center">
        {name}
      </Text>
      <Text fontSize={isCenter ? 'xl' : 'md'} textAlign="center">
        {title}
      </Text>
      <Spacer />
      <Text mb="20px" fontSize={isCenter ? 'xl' : 'md'} textAlign="center">
        {index + 1}/{numberOfSlides}
      </Text>
    </Flex>
  );
};

export default TeamMembers;
