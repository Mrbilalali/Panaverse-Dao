"use client";
import { Box, Button, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { RevealWrapper } from  'next-reveal'

export default function Main() {
  return (
    <>
      <Box  bgAttachment={"fixed"} bgImage="/web3img.webp">
     <RevealWrapper origin="left" delay={200} duration={1000} distance='500px' reset={true}>
        <Container maxW={1400}>
          <Flex
            pt={{ lg: "150px", base: "30" }}
            pb="100"
            px={{ lg: "40px", base: "5" }}
            display={{ lg: "flex", base: "grid" }}
            >
            <Box
              bg={"blackAlpha.500"}
              py="20"
              textColor={"white"}
              flexBasis={"50%"}
              px="40px"
              rounded={"3xl"}
              >
              <Heading size={"2xl"}>
                Certified Web 3.0 and Metaverse Developer
              </Heading>
              <Text pt={"10"}>
                A One and Quarter Years Panaverse DAO Earn as you Learn Program
                Getting Ready for the Next Generation of the Internet.
                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
                Cloud, Edge, Ambient Computing/IoT, Network Automation, and
                Bioinformatics Technologies
              </Text>
              <Button mt={"10"} size={"lg"} colorScheme="red">
                <Link href="https://www.piaic.org/">
                Learn More
                </Link>
              </Button>
            </Box>

            <Box mt={{ lg: "auto", base: "0px" }} flexBasis={"50%"}>
              <Image
                src={"/desktopPic.png"}
                alt="panaverse"
                width={"700"}
                height={"600"}
              ></Image>
            </Box>
          </Flex>
        </Container>
        
      </RevealWrapper>
      </Box>
      <Box>
        <Container maxW={1400}>
          <Flex
            display={{ lg: "flex", base: "grid" }}
            gap={{ lg: "100px", base: "10px" }}
            >
            <Box flexBasis={"50%"}>
              <Image
                src={"/iconimage.png"}
                alt="panaverse"
                width={"400"}
                height={"400"}
                ></Image>
            </Box>

            <Box
              flexBasis={"50%"}
              pt={{ lg: "50px", base: "5px" }}
              px={{ lg: "0", base: "5px" }}
              >
              <Heading size={"2xl"}>Program of Studies</Heading>
              <Text pr="60px" pt="20px">
                This curriculum is intended for beginners who want to learn
                software development from the ground up. The first three
                quarters are shared by all specialties and are dedicated to
                studying Object-Oriented Programming and cutting-edge Full-Stack
                Web 2.0 development. It is going to be a fifteen-month-long
                hybrid program that includes both onsite and online classes and
                is divided into five quarters of 13 weeks each. The emphasis
                will be on hands-on learning by educating students to produce
                projects. To accommodate everyone, courses will be held
                primarily on weekends or after 6:00 p.m. (Pakistan Time) on
                weekdays. It employs a hybrid teaching format, with core onsite
                classes complemented by online Zoom laboratories and recorded
                videos.
              </Text>
              <Button  my={"20px"} size={"lg"} colorScheme="red">
              <Link href="">Learn More</Link>
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box mb={"10"}>
        <Container maxW={1400}>
          <Flex
            display={{ lg: "flex", base: "grid" }}
            gap={{ lg: "100px", base: "10px" }}
            >
            <Box
              flexBasis={"50%"}
              pt={{ lg: "80px", base: "30" }}
              px={{ lg: "0", base: "5px" }}
              >
              <Heading size={"2xl"}>Achieve Your Goals</Heading>
              <Text pr="60px" pt="20px">
                This curriculum is intended for beginners who want to learn
                software development from the ground up. The first two quarters
                are shared by all specialties and are dedicated to studying
                Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
                development. It is going to be a fifteen-month-long hybrid
                program that includes both onsite and online classes and is
                divided into five quarters of 13 weeks each. The emphasis will
                be on hands-on learning by educating students to produce
                projects. To accommodate everyone, courses will be held
                primarily on weekends or after 6:00 p.m. (Pakistan Time) on
                weekdays. It employs a hybrid teaching format, with core onsite
                classes complemented by online Zoom laboratories and recorded
                videos.
              </Text>
              <Button my={"20px"} size={"lg"} colorScheme="red">
                <Link href="https://www.piaic.org/">Apply Now</Link>
              </Button>
            </Box>

            <Box flexBasis={"50%"}>
              <Image
                src={"/image3.png"}
                alt="panaverse"
                width={"500"}
                height={"200"}
                ></Image>
            </Box>
          </Flex>
        </Container>
      </Box>
               
    </>
  );
}
