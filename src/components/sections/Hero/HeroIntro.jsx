import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { keyframes, styled } from 'styled-components';

import { Socials } from '../..';
import { UnfilledButton } from '../../../styles/ButtonStyles';
import { Description, SubtitleWithAccent, SubtitleWithHandwriting, HeroTitle } from '../../../styles/TextStyles';
import { heroData } from '../../../utils/data';
import { rem } from '../../../utils/utils';

export default function HeroIntro() {
  const { name, occupation, introductions } = heroData;
  const introRef = useRef(), cursorRef = useRef();

  useEffect(() => {
    const typed = new Typed(introRef.current, {
      strings: introductions,
      typeSpeed: 25,
      backSpeed: 10,
      startDelay: 2500,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
    });
    return () => { typed.destroy(); };
  }, []);

  return (
    <Container className='content scrolla-element-anim-1 scroll-animate animate__active animate__animated'>
      {/* Title */}
      <Titles className='titles'>
        <SubtitleWithAccent><p>Hello, <span>my name is</span></p></SubtitleWithAccent>
        <HeroTitle><span>{name.split(' ')[0]}</span> {name.split(' ')[1]}</HeroTitle>
        <SubtitleWithHandwriting>I am a <span>{occupation}</span></SubtitleWithHandwriting>
      </Titles>

      {/* Description */}
      <DescriptionContainer className='description'>
        <p><span ref={introRef}>{introductions[0]}</span><span ref={cursorRef}>|</span></p>
        <Socials />
      </DescriptionContainer>

      {/* Download Button */}
      <UnfilledButton className='bts'>
        <a href={heroData.resumeLink} target='_blank' className='btn'><span>Download CV</span></a>
        <a href='#skills' className='btn-link'>My Skills</a>
      </UnfilledButton>
    </Container>
  );
}

const blink = keyframes`
  0%   { opacity: 1; }
  50%  { opacity: 0; }
  100% { opacity: 1; }
`;

const Container = styled.div`
  padding-top: ${rem(40)};
  position: relative;

  @media screen and (min-width: ${rem(1700)}) {
    padding-top: ${rem(20)};
  }

  @media screen and (max-width: ${rem(1024)}) {
    padding-top: ${rem(140)};
    text-align: center;
  }

  @media screen and (max-width: ${rem(767)}) {
		padding-top: ${rem(120)};
  }
`;

const Titles = styled.div`
  max-width: ${rem(640)};
  /* z-index: 3; */

  @media screen and (max-width: ${rem(1024)}) {
    margin-bottom: ${rem(760)};
    max-width: 100%;
  }

  @media screen and (max-width: ${rem(767)}) {
    margin-bottom: ${rem(420)};
    min-height: ${rem(160)};
  }
`;

const DescriptionContainer = styled(Description)`
  padding: ${rem(40)} 0;
  max-width: ${rem(520)};

  & > :first-child {
    /* font-family: var(--f-code);
    min-height: 91.78px; */
    min-height: ${rem(61.188)};

    span:last-child {
      color: var(--c-accent);
      font-weight: 900;
      animation: ${blink} 1s steps(1, start) 1s infinite both;
    }
  }

  p {
    margin-top: 0;
    margin-bottom: ${rem(40)} !important;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
