import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Particle = () => {
  return <BackgroundContainer />;
};

export default Particle;
