import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SectionTitle, SectionSubtitle } from '../styles/TextStyles';
import { sectionsData } from '../utils/data';
import { sectionWrapperMotion } from '../utils/motion';
import { rem } from '../utils/utils';

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    const { title, subtitle, background } = sectionsData[idName];

    return (
      <Container id={idName} className='lui-section lui-gradient-center' gradient={props?.gradient} idname={idName}>
        <Wrapper key={`sectionwrapper-wrapper-${idName}`} className='container' {...sectionWrapperMotion}>
          {/* Section Title */}
          {title && subtitle && (
            <SectionHeading className='lui-heading'>
              <SectionTitle>{title}</SectionTitle>
              <SectionSubtitle>
                <span>
                  {subtitle.split(' ')[0]} <span>{subtitle.split(' ')[1]}</span>
                </span>
              </SectionSubtitle>
            </SectionHeading>
          )}

          {/* Content */}
          <Component {...props} />

          {/* Background Text */}
          <BackgroundText className='lui-bgtitle'>{background}</BackgroundText>

          {/* Backgrond Line */}
          <BackgroundLine position={props?.gradient === 1 ? 'left' : 'right'}>
            <span />
          </BackgroundLine>
        </Wrapper>
      </Container>
    );
  };

export default SectionWrapper;

const Container = styled.section`
  position: relative;
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
  padding-bottom: ${rem('180px')};
  background: ${({ gradient }) => `var(--c-gradient${gradient})`};
  display: flex;
  align-items: ${({ idname }) => (idname === 'hero' ? 'center' : 'flex-start')};
  justify-content: center;
`;

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: ${rem('1300px')};
  padding: ${rem('90px')} 2rem;
`;

const SectionHeading = styled.div`
  position: relative;
  margin-bottom: ${rem('60px')};
  text-align: center;
`;

const BackgroundText = styled.div`
  position: relative;
  top: ${rem('-50px')};
  left: -50%;
  width: 200%;
  font-size: 22rem;
  font-family: var(--f-secondary);
  color: ${({ theme }) => theme.backgroundTitle};
  font-weight: bold;
  line-height: ${rem('1px')};
  text-align: center;
  white-space: nowrap;
  pointer-events: none;
  z-index: 0;
`;

const BackgroundLine = styled.div`
  position: absolute;
  top: 10rem;
  right: ${({ position }) => position === 'right' ? '-5rem' : 'auto'};
  bottom: 5rem;
  left: ${({ position }) => position === 'left' ? '-5rem' : 'auto'};
  width: 0.125rem;
  background: var(--c-lineBorder);
  pointer-events: none;
  isolation: isolate;
  z-index: 0;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: -0.9375rem;
    width: 1.875rem;
    height: 1.875rem;
    background: var(--c-lineBackground);
    border: ${rem('2px')} solid var(--c-lineBorder);
    border-radius: ${rem('30px')};
    box-shadow: 0.3125rem 0.3125rem var(--c-lineShadow);
    z-index: 1;
  }
  &:before { top: -0.9375rem; }
  &:after { bottom: -0.9375rem; }

  span {
    position: absolute;
    right: ${({ position }) => position === 'right' ? '-10.5rem' : 'auto'};
    bottom: ${({ position }) => position === 'right' ? rem('-168px') : rem('-188px')};
    left: ${({ position }) => position === 'left' ? '-10.5rem' : 'auto'};
    width: 14.125rem;
    height: 14.125rem;
    display: block;
    background-image: url('images/pat-1.png');
    background-repeat: no-repeat;
    background-size: contain;
    filter: invert(${({ theme }) => theme.dotsInvert ?? 0});
    opacity: 0.6;
  }
`;
