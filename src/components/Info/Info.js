import React from 'react';
import { infoContents } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={infoContents.title} imageSource={infoContents.image} />
    {infoContents.content}
  </Container>
);

export default Info;