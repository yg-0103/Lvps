import React from 'react';
import styled from 'styled-components';
import { colors } from 'theme/theme';
import { SubMainBanner, CardExplanation, StaffIntroduction } from 'containers';

const CardList = [
  {
    id: 1,
    type: 'square',
    content: [
      {
        id: 1,
        content:
          'Professional services & products offered to exceed your expectations.'
      }
    ],
    iconType: 'likeCircle',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 2,
    type: 'square',
    content: [
      { id: 1, content: 'Certified Professional & Trained Installers' }
    ],
    iconType: 'likeCircle',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 3,
    type: 'square',
    content: [{ id: 1, content: '100% Satisfaction Guaranteed' }],
    iconType: 'likeCircle',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 4,
    type: 'square',
    content: [{ id: 1, content: 'We work with every make & model' }],
    iconType: 'likeCircle',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 5,
    type: 'square',
    content: [{ id: 1, content: 'Pick up & delivery service available' }],
    iconType: 'likeCircle',
    background: colors.black,
    fontColor: colors.black
  },
  {
    id: 6,
    type: 'square',
    content: [{ id: 1, content: 'Mobile services on request' }],
    iconType: 'likeCircle',
    background: colors.black,
    fontColor: colors.white
  }
];

const AboutUs = () => {
  return (
    <>
      <SubMainBanner
        bgImg="/assets/dummyImage.png"
        title="About Us"
        desc="MM Auto Care For Your Car"
      ></SubMainBanner>
      <CardExplanation
        cardList={CardList}
        title="Luxury Vehicle Protection Services"
      ></CardExplanation>
      <StaffIntroduction />
      {/* <GoogleMap /> */}
    </>
  );
};

AboutUs.displayName = 'AboutUs';

export default AboutUs;