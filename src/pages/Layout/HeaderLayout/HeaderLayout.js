import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #2d2d2d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
`;

const HeaderLayoutFlexContainer = styled.div`
  display: flex;
  flex: ${props => props.flex};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`;
function HeaderLayout({ children }) {
  return <HeaderWrapper>{children}</HeaderWrapper>;
}

HeaderLayout.FlexContainer = ({ tag = 'div', children, ...restProps }) => {
  return (
    <HeaderLayoutFlexContainer as={tag} {...restProps}>
      {children}
    </HeaderLayoutFlexContainer>
  );
};

HeaderLayout.FlexContainer.defaultProps = {
  justify: 'center',
  align: 'center',
};

HeaderLayout.FlexContainer.displayName = 'LayoutFlexWrapper';
HeaderWrapper.displayName = 'HeaderWrapper';
HeaderLayoutFlexContainer.displayName = 'LayoutFlexContainer';

export default HeaderLayout;
