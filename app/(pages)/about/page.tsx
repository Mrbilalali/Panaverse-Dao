"use client";

import Instructors from "@/components/instructors";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <>
      <Box>
        <Container maxW={1400}>
          <Flex
            display={{ lg: "flex", base: "grid" }}
            gap="10px"
            my={"50px"}
            px={{ base: "20px", lg: "50px" }}
          >
            <Box flexBasis={"50%"}>
              <Image
                rounded={"3xl"}
                bg={"blackAlpha.200"}
                px={{ lg: "40px", base: "70" }}
                py="20"
                mx="auto"
                height={{ lg: "700", base: "500" }}
                width={{ lg: "700", base: "500" }}
                src="/president.png"
                alt="President"
              ></Image>
            </Box>

            <Box
              bg={"red.500"}
              py="20"
              textColor={"white"}
              flexBasis={"50%"}
              px="40px"
              rounded={"3xl"}
            >
              <Heading size={"2xl"}>Dr. Arif Alvi</Heading>
              <Text mt={"5"}>
                Dr. Arif Alvi was sworn in as the 13th President of Islamic
                Republic of Pakistan on 9th September 2018.
              </Text>
              <Text mt={"5"}>
                Dr. Arif Alvi was born in 1949 and completed his early education
                in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’
                Montmorency College of Dentistry, Lahore where he was declared
                the “Best Graduate”. He completed his Masters of Science in the
                field of Prosthodontics from University of Michigan (1975) and
                in Orthodontics from University of Pacific, San Francisco
                (1982). He was awarded fellowship ‘Diplomatic American Board of
                Orthodontists (1995)’.
              </Text>
              <Text mt={"5"}>
                President Dr. Arif Alvi has been a renowned professional and has
                held many important positions in the field of Dentistry. He
                remained Dean of Orthodontics, College of Physicians and
                Surgeons of Pakistan, President, Pakistan Dental Association
                (1997-2001), Pakistan Association of Orthodontists (2005), Asia
                Pacific Dental Federation (2006-07) and Councilor of the World
                Dental Federation (2007-2013). Through his sheer hard work in
                the World Dental Federation, he was able to get the declaration
                of 20th March as World Oral Health Day. He is also an author of
                a book, theses, and many articles.
              </Text>
            </Box>

            <Box
              bg={"red.500"}
              py="20"
              textColor={"white"}
              flexBasis={"50%"}
              px="30px"
              rounded={"3xl"}
            >
              <Text mt={"5"}>
                Dr. Arif Alvi’s political career commenced with his
                pro-democracy struggle against the dictatorship of General Ayub
                Khan. He is a founding member of Pakistan Tehreek-e-Insaf (PTI)
                that came into being in 1996. He remained a member of the PTI’s
                Central Executive Committee since its inception and has held the
                offices of PTI President of Sindh (1997-2001), Central Vice
                President (2001-2006) and Secretary General (2006-2013). In line
                with Constitution of Pakistan, he resigned from all the
                positions of PTI before assuming the prestigious office of the
                President.
              </Text>
              <Text mt={"5"}>
                During his tenure as the Secretary General of the party, Dr.
                Arif Alvi introduced social media platform in the politics of
                Pakistan. He was instrumental in holding intra-party election
                (2012-2013) and enabled millions of party members to digitally
                participate in the election process. He was elected as member of
                National Assembly from Karachi in 2013 and 2018 and was
                instrumental in drafting and the passage of many bills including
                one on Alternate Dispute Resolution. He also chaired the
                sub-committee of EVM’s, Digital Identification of voters and
                voting of overseas Pakistanis. The latter has finally come to
                fruition. Dr. Arif Alvi has keen interest in education and
                health sectors. Provision of basic facilities to the common man
                and uplifting the country’s image are very close to his heart.
                He considers people of Pakistan as the most precious asset and,
                therefore, accords special focus to human resource development
                in the country. He is happily married and has four children.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Instructors />
    </>
  );
}
