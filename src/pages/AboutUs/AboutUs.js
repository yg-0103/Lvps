import CardExplanation from 'containers/CardExplanation/CardExplanation';
import StaffIntroduction from 'containers/StaffIntroduction/StaffIntroduction';
import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import React from 'react';
import { colors } from 'theme/theme';
import { motion } from 'framer-motion';
import GoogleMap from 'containers/GoogleMap/GoogleMap';

const CardList = [
  {
    id: 1,
    type: 'square',
    content: [
      {
        id: 1,
        content:
          'Professional services & products offered to exceed your expectations'
      }
    ],
    iconType: 'mainGoodLuck',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 2,
    type: 'square',
    content: [
      { id: 1, content: 'Certified Professional & Trained Installers' }
    ],
    iconType: 'mainShield',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 3,
    type: 'square',
    content: [{ id: 1, content: '100% Satisfaction Guaranteed' }],
    iconType: 'mainSmile',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 4,
    type: 'square',
    content: [{ id: 1, content: 'We work with every make & model' }],
    iconType: 'mainPerson',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 5,
    type: 'square',
    content: [{ id: 1, content: 'Pick up & delivery service available' }],
    iconType: 'mainTruck',
    background: colors.black,
    fontColor: colors.black
  },
  {
    id: 6,
    type: 'square',
    content: [{ id: 1, content: 'Mobile services on request' }],
    iconType: 'mainCheck',
    background: colors.black,
    fontColor: colors.white
  }
];

const AboutUs = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.2, type: 'tween' }
      }}
      enter={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <SubMainBanner
        bgImg="/assets/about-us-bg.png"
        title="About Us"
        desc="LVPS For Your Car"
      ></SubMainBanner>
      <CardExplanation
        cardList={CardList}
        title="Luxury Vehicle Protection Services"
      ></CardExplanation>
      <StaffIntroduction />
      <GoogleMap />
    </motion.main>
  );
};

AboutUs.displayName = 'AboutUs';

export default AboutUs;
