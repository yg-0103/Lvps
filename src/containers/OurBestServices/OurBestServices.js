import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, device, fontSizes } from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useAccordionState } from 'hooks/';
import AccordionList from 'components/AccordionList/AccordionList';

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
    transition: 0.3s;
  }
  ${device.desktop} {
    padding: ${calcInterval([0, 50])};
  }

  ${device.tablet} {
    padding: ${calcInterval([0, 20])};
  }
  ${device.mobile} {
    padding: ${calcInterval([0, 15])};
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
    padding-left: ${calcRem(0.1)};
    margin-bottom: ${calcRem(50)};
  }

  img {
    width: 100%;
    height: ${calcRem(419)};
    transition: 0.3s;
  }

  div + div {
    margin-left: ${calcRem(45)};
  }

  ${device.tablet} {
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

      h3 {
        font-size: ${fontSizes.base};
        padding-top: 12px;
      }
      p {
        font-size: ${calcRem(14)};
        margin-top: ${calcRem(10)};
        color: ${colors.white};
        line-height: ${calcRem(17)};
      }
    }

    div + div {
      margin-left: 0;
      margin-top: ${calcRem(15)};
    }
  }

  ${device.mobile} {
    .imageContainer {
      display: none;
    }
  }
`;

const accordionState = [
  {
    id: 1,
    title: 'Ceramic Coating',
    description: `Can be described as an additional clear coat, with three times the hardness and self-cleaning properties.`,
    imagePath: 'assets/OurBestServiceImage_01.png',
    active: true,
    to: '/ceramic-coating'
  },
  {
    id: 2,
    title: 'Paint Protection Film',
    description: `Perfect for protecting high impact areas or full car wraps coverage from chips, scratches and road debris.`,
    imagePath: 'assets/OurBestServiceImage_02.png',
    active: false,
    to: '/paint-protection'
  },
  {
    id: 3,
    title: 'Window Tinting',
    description: `Enhances privacy, reduces infra-red heat, as well as keeps your skin and eyes safe from harmful UV rays.`,
    imagePath: 'assets/OurBestServiceImage_03.png',
    active: false,
    to: '/window-tinting'
  },
  {
    id: 4,
    title: 'Detailing & Paint Correction',
    description: `Get your car looking like new again with the interior/exterior packages we offer.`,
    imagePath: 'assets/OurBestServiceImage_04.png',
    active: false,
    to: '/detailing-and-correction'
  },
  {
    id: 5,
    title: 'Wheels & Tires',
    description: `We work with most brands and can get you the wheels and tires you need and want.`,
    imagePath: 'assets/OurBestServiceImage_05.png',
    active: false,
    to: '/wheel-and-tire'
  }
];

const OurBestServices = ({ title }) => {
  const [accordionItemList, handleClick] = useAccordionState(accordionState);

  const setActiveImage = () => {
    return accordionItemList.find(item => item.active).imagePath;
  };

  return (
    <FullContainer imagePath={setActiveImage()}>
      <ServicesContainer>
        <h2>{title}</h2>
        <AnimatePresence initial={false}>
          <Layout.FlexContainer className="imageContainer" flex={2}>
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
  title: 'Our Quality Services',
  imagePath: 'assets/dummy_ourbestservice.png'
};

FullContainer.displayName = 'FullContainer';
ServicesContainer.displayName = 'ServicesWrapper';
export default OurBestServices;
