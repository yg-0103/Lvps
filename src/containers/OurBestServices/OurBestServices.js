import React, { useState } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSizes } from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import { AccordionList } from 'components/';
import { motion, AnimatePresence } from 'framer-motion';

const FullContainer = styled.section`
  position: relative;
  background-color: rgba(45, 45, 45, 0.8);

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url(${({ imagePath }) => imagePath});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media only screen and (max-width: 768px) {
    padding: ${calcInterval([0, 20])};
  }
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${calcInterval([75, 0])};
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  h2 {
    font-size: ${fontSizes.titleBase};
    color: ${colors.white};
    width: 100%;
    padding-left: ${calcRem(100)};
    margin-bottom: ${calcRem(50)};
  }

  img {
    width: 100%;
    height: ${calcRem(419)};
    transition: 0.4s;
  }

  div + div {
    margin-left: ${calcRem(45)};
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${calcInterval([50, 0])};

    .accordionContainer {
      width: 100%;
    }

    h2 {
      font-size: ${fontSizes.lg};
      font-weight: bold;
      width: auto;
      padding: 0;
      margin-bottom: ${calcRem(15)};
    }

    img {
      height: 170px;
    }

    ul {
      width: 100%;

      li {
        max-width: 100%;
      }
      a {
        padding: ${calcInterval([0, 80, 10])};
        &:hover {
          padding: ${calcInterval([0, 80, 10])};
        }
      }

      h3 {
        font-size: ${fontSizes.base};
        padding-top: 12px;
      }
      p {
        font-size: ${calcRem(10)};
        margin-top: ${calcRem(10)};
        line-height: ${calcRem(17)};
      }
    }

    div + div {
      margin-left: 0;
      margin-top: ${calcRem(15)};
    }
  }
`;

const accordionState = [
  {
    id: 1,
    title: 'Ceramic Coating',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    imagePath: 'assets/dummy_ourbestservice.png',
    active: true
  },
  {
    id: 2,
    title: 'Paint Protection Film',
    description: `It can be described as an additional clear coat,
    with 3 times the hardness and self cleaning properties.
    `,
    imagePath: 'assets/dummyCar.png',
    active: false
  },
  {
    id: 3,
    title: 'Window Tinting',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    imagePath: 'assets/dummyImage.png',
    active: false
  },
  {
    id: 4,
    title: 'Detail Correction',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    imagePath: 'assets/dummy_background.png',
    active: false
  },
  {
    id: 5,
    title: 'Ceramic Coating',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    imagePath: 'assets/dummy_car1.png',
    active: false
  }
];

const OurBestServices = ({ title, imagePath }) => {
  const [accordionItemList, setAccordionItemList] = useState(accordionState);

  const handleClick = id => {
    setAccordionItemList(
      accordionItemList.map(item =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  const setActiveImage = () => {
    return accordionItemList.find(item => item.active).imagePath;
  };

  return (
    <FullContainer imagePath={imagePath}>
      <ServicesContainer>
        <h2>{title}</h2>
        <AnimatePresence initial={false}>
          <Layout.FlexContainer flex={2}>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1
              }}
              key={setActiveImage()}
              src={setActiveImage()}
              alt="service"
            />
          </Layout.FlexContainer>
        </AnimatePresence>
        <Layout.FlexContainer
          className="accordionContainer"
          flex={1}
          justifyContent="flex-start"
        >
          <AccordionList
            accordion={accordionItemList}
            handleClick={handleClick}
          />
        </Layout.FlexContainer>
      </ServicesContainer>
    </FullContainer>
  );
};

OurBestServices.propTypes = {
  title: string,
  imagePath: string
};

OurBestServices.defaultProps = {
  title: 'Our Best Services',
  imagePath: 'assets/dummy_ourbestservice.png'
};

ServicesContainer.displayName = 'ServicesWrapper';
export default OurBestServices;
