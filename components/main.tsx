"use client";
import { Box, Button, Center, Container, Flex, Heading, Link, Text, } from "@chakra-ui/react";
import React from "react";
import { RevealWrapper } from  'next-reveal'
import { card1 } from "./Data";
import Image from "next/image";

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

          <Box ml={{lg:"70px", base:"0"}} mt={{ lg: "auto", base: "0px" }} flexBasis={"50%"}>
              <Image
                src={"/img/img.png"}
                alt="panaverse"
                width={"500"}
                height={"500"}
              ></Image>
            </Box>
          </Flex>
        </Container>
        
      </RevealWrapper>
      </Box>
      {/* container 0 */}
      <Box mb={"10"}>
        <Container maxW={1400}>
          <Flex
            display={{ lg: "flex", base: "grid" }}
            gap={{ lg: "100px", base: "10px" }}
            >
            <Box mt={"30px"} flexBasis={"40%"}>
              <Image
                src={"/img/development-4536630_1280.webp"}
                alt="panaverse"
                width={"450"}
                height={"450"}
                ></Image>
            </Box>
            <Box
              flexBasis={"50%"}
              pt={{ lg: "80px", base: "30" }}
              px={{ lg: "0", base: "5px" }}
              >
              <Heading size={"2xl"}>The Panaverse Community and Syllabus:</Heading>
              <Text pr="50px" pt="20px">
              The internet is without a doubt the most important technological development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge computing, voice computing, ambient computing, and more.
              </Text>
              <Text pr="50px" pt="20px">
              Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centered on decentralized technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.
              </Text>
              <Button my={"20px"} size={"lg"} colorScheme="red">
                <Link href="/syllabus">Learn More</Link>
              </Button>
            </Box>
            
          </Flex>
        </Container>
      </Box>

           {/* container 1 */}
      <Box>
        <Container maxW={1400}>
          <Flex
            display={{ lg: "flex", base: "grid" }}
            gap={{ lg: "100px", base: "10px" }}
            >
        
            <Box
              flexBasis={"50%"}
              pt={{ lg: "50px", base: "5px" }}
              px={{ lg: "0", base: "5px" }}
              >
              <Heading size={"2xl"}>The Program in a Nutshell: Earn While You Learn</Heading>
              <Text pr="50px" pt="20px">
              In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.
              </Text>
              <Button  my={"20px"} size={"lg"} colorScheme="red">
              <Link href="">Learn More</Link>
              </Button>
            </Box>
            <Box flexBasis={"50%"}>
              <Image
                src={"/img/professional-web-design.png"}
                alt="panaverse"
                width={"500"}
                height={"500"}
                ></Image>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* container 2 */}
      <Box mb={"10"}>
        <Container maxW={1400}>
          <Flex
            display={{ lg: "flex", base: "grid" }}
            gap={{ lg: "100px", base: "10px" }}
            >

            <Box flexBasis={"50%"}>
              <Image
                src={"/img/girl-edu-illus.png"}
                alt="panaverse"
                width={"500"}
                height={"200"}
                ></Image>
            </Box>
            <Box
              flexBasis={"50%"}
              pt={{ lg: "80px", base: "30" }}
              px={{ lg: "0", base: "5px" }}
              >
              <Heading size={"2xl"}>Program of Studies</Heading>
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
                <Link href="https://www.piaic.org/">Learn More</Link>
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>

         {/* container 3 */}
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
              <Heading size={"2xl"}>Core Courses (Common in All Specializations):</Heading>
              <Text pr="60px" pt="20px">
              After completing the first three quarters the participants will select one or more specializations consisting of two courses each:
              </Text>
              <Button my={"20px"} size={"lg"} colorScheme="red">
                <Link href="https://www.piaic.org/">Enroll Now</Link>
              </Button>
            </Box>

            <Box flexBasis={"50%"}>
              <Image
                src={"/img/digital-img.png"}
                alt="panaverse"
                width={"500"}
                height={"200"}
                ></Image>
            </Box>
          </Flex>
        </Container>

        {/* card */}
        <Container
          maxW={1400}
          mt="30px"
          pb="50px"
          // bgSize="cover"
          // bgAttachment={"fixed"}
          // bgImage="./img/3d-render-modern-network.jpg"
        >
            <Box>
           <Center>
            <Flex display={{ lg: "flex", base: "grid" }} mt={"30px"} gap="20px">
          {card1.map((data) => (
              <Box 
                key={data.id} pt={"40px"}
                textAlign={"center"}
                p="30px"
                boxShadow={"dark-lg"}
                borderRadius="20px"
                width={"350px"}
                
              >
                <Box px={"50px"} ><Image src={data.image} alt="img" width={"200"} height="200"></Image></Box>
                <Heading pt="10px">{data.heading}</Heading>
                <Text pt={"5px"}>
              {data.text}
                </Text>
              </Box>
          ))}
            </Flex>
          </Center>
            </Box>
        </Container>

      </Box>
               
    </>
  );
}
