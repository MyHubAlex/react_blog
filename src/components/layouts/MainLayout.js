import React, { PropTypes } from 'react';
import Link from '../elements/Link';

import { Segment, Header, Container } from 'semantic-ui-react';

const MainLayout = ({ children }) => (
  <Container>
    <Link to={'/'}>
      <Logo />
    </Link>
    {children}
    <Footer />    
  </Container>
);

MainLayout.PropTypes = {
  children: PropTypes.node
};

export default MainLayout;

const Logo = () => (
  <Segment>
    <Header> My Blog</Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by React Course
  </Segment>
);
