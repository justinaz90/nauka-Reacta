import React from 'react';
import { faqContents } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    <Hero titleText={faqContents.title} imageSource={faqContents.image} />
    {faqContents.content}
  </Container>
);

export default FAQ;