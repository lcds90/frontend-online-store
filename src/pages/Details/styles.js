import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

export const Container = styled
  .main`background-color: ${({ theme: { colors } }) => colors.background};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px 1.5fr 1fr;
  height: 100vh;
  max-width: 100%;
  overflow: auto;
  width: 100vw;
`;

export const ContainerProduct = styled
  .section`background-color: white;
  border-radius: 0 10px 10px 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 75vh;
  position: relative;
`;

export const Div = styled
  .article`display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr;
  padding: 5px;
  place-items: center;
  position: relative;
`;

export const DivCarousel = styled.div`height: 200px;
`;

export const ImageCarousel = styled.img`
`;

export const Title = styled
  .h2`border-bottom: ${({ theme: { colors } }) => colors.primary} 0.5px double;
  border-radius: 5px;
  color: ${({ theme: { colors } }) => colors.primary};
  font-style: italic;
  font-weight: 500;
  grid-column: span 2;
  text-align: center;
`;

export const CarouselImages = styled(Carousel)`align-content: center;
  align-items: center;
  display: grid;
  grid-column: span 2;
  height: 100%;
  justify-items: center;
`;

export const Price = styled
  .span`background-color: ${({ theme: { colors } }) => colors.primary};
  bottom: -40px;
  color: white;
  padding: 10px;
  position: absolute;
  right: 0;
  text-align: center;
  width: 100%;
  z-index: 1;
`;

export const FreeShipping = styled
  .span`align-items: center;
  background-color: ${({ theme: { colors } }) => colors.gray};
  bottom: 7rem;
  box-shadow: 0 2px 3px rgba(100, 100, 100, 0.75);
  color: white;
  display: flex;
  height: 2rem;
  justify-content: center;
  left: 0;
  padding: 10px 0;
  position: absolute;
  width: 50%;
  z-index: 1;
`;

export const Avaliable = styled
  .span`align-items: center;
  bottom: 9rem;
  color: ${({ theme: { colors } }) => colors.text};
  display: flex;
  font-weight: 300;
  justify-content: center;
  position: absolute;
  right: 10px;
  white-space: nowrap;
  z-index: 1;
`;

export const Description = styled
  .article`align-items: center;
  background-color: ${({ theme: { colors } }) => colors.text};
  border-radius: 0 10px 10px 0;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  font-style: italic;
  justify-content: center;
  letter-spacing: 0.005rem;
  line-height: 1rem;
  max-height: 100%;
  overflow: auto;
  padding: 15px;
  text-align: justify;
`;

export const ButtonsContainer = styled
  .div`align-content: space-evenly;
  align-items: center;
  display: grid;
  gap: 10px 100px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 50%;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const Quantity = styled
  .button`background-color: ${({ theme: { colors } }) => colors.primary};
  border: 0;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 5px;
  transition: font-size 0.25s ease-in-out , filter 1s ease;
  width: 100%;
  z-index: 2;
`;
export const Buy = styled
  .button`background-color: ${({ theme: { colors } }) => colors.buyed};
  border: 0;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  grid-column: span 3;
  padding: 5px;
  transition: font-size 0.25s ease-in-out , filter 1s ease;
  width: 100%;
  z-index: 2;

  :hover {
    filter: brightness(1.75);
  }
`;
