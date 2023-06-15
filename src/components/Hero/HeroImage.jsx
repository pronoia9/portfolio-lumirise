import { styled } from 'styled-components';

import { heroData } from '../../utils/data';

export default function HeroImage() {
  return (
    <Container className='slide scrolla-element-anim-1 scroll-animate animate__active animate__animated'>
      <Image src={heroData.image} />
      <Circle className='circle circle-1' />
      <Pattern1 className='circle img-1' />
      <Pattern2 className='circle img-2' />
      <Pattern3 className='circle img-3' />
    </Container>
  );
}

const Container = styled.div`
  margin-top: -390px;
  position: absolute;
  top: 50%;
  right: -20px;
  width: 680px;
  height: 800px;
  z-index: 2;

  @media screen and (min-width: 1700px) {
    margin-top: -400px;
    right: -50px;
  }

  @media screen and (max-width: 1024px) {
    margin-left: -340px;
    bottom: auto;
    top: 740px;
    right: auto;
    left: 50%;
    transform: scale(0.9);
    transform-origin: top center;
  }
`;

const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 380px;
  -webkit-border-radius: 380px;
  z-index: 10;
`;

const Circle = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 680px;
  height: 680px;
  z-index: 2;
  background: var(--c-accent);
  border-radius: 100%;
  -webkit-border-radius: 100%;
`;

const Pattern1 = styled.span`
  position: absolute;
  top: 75px;
  right: 40px;
  left: auto;
  width: 226px;
  height: 226px;
  background-image: url('images/pat-1.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  opacity: 0.6;
  filter: invert(${({ theme }) => theme.imageInvert});
`;

const Pattern2 = styled(Pattern1)`
  background-image: url('images/pat-2.png');
  bottom: 50px;
  right: auto;
  top: auto;
  left: -110px;
  width: 141px;
  height: 141px;
`;

const Pattern3 = styled(Pattern2)`
  bottom: 10px;
  right: -14px;
  top: auto;
  left: auto;
  width: 141px;
  height: 141px;
`;