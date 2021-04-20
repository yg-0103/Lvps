import useViewSize from 'hooks/useViewSize';
import IconParagraphLayout from 'pages/Layout/IconParagraphLayout';
import styled, { css } from 'styled-components';
import { calcInterval, calcRem } from 'theme/theme';

const explanCeramic = [
  {
    id: 1,
    iconType: 'facebook',
    title: 'GOOD INVESTMENT',
    content:
      'The coating will protect the vehicle’s exterior and interior from deteriorating for a lifetime. The resale market value will therefore be substantially higher! Ceramic Pro pays for itself in the end.'
  },
  {
    id: 2,
    iconType: 'facebook',
    title: 'LOOK NEW ALL THE TIME',
    content:
      'Once the coating is applied you will see a mirror effect, glossiness and color depth, incomparable to anything else! With proper maintenance your car’s finish will shine for many years to come.'
  },
  {
    id: 3,
    iconType: 'facebook',
    title: 'LESS MAINTENANCE',
    content:
      'The slick coated surface won’t allow dirt, brake dust and tar to stick to your paint, wheels or glass. This makes washing your vehicle less labor intensive and less frequent. Waxing is now obsolete.'
  },
  {
    id: 4,
    iconType: 'facebook',
    title: 'LESS MAINTENANCE',
    content:
      'The slick coated surface won’t allow dirt, brake dust and tar to stick to your paint, wheels or glass. This makes washing your vehicle less labor intensive and less frequent. Waxing is now obsolete.'
  }
];

const styledMobile = css`
  display: flex;
  justify-content: space-between;
  .icon-paragraph {
    width: ${calcRem(304)};
  }
  svg {
    margin-right: 0;
    margin-bottom: ${calcRem(34)};
  }
`;

const StyledIconParagraphLayout = styled(IconParagraphLayout)`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: ${calcInterval([70, 20])};
  .icon-paragraph {
    width: 100%;
  }

  ${({ desktop }) => !desktop && styledMobile}
`;

const IconKeyFeature = () => {
  const { desktop } = useViewSize();
  return (
    <StyledIconParagraphLayout
      title="Xpel Ultimate Plus Key Features"
      contents={explanCeramic}
      paragraphWidth="100%"
      direction={desktop ? 'row' : 'column'}
      desktop={desktop}
    />
  );
};

export default IconKeyFeature;
