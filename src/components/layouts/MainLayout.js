import React, { PropTypes } from 'react';
import Link from '../elements/Link';

import { Segment, Header, Container, Menu } from 'semantic-ui-react';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
    {children}
    <Footer />
  </Container>
);

MainLayout.PropTypes = {
  children: PropTypes.node
};

export default MainLayout;

const Logo = () => (
  <Segment clearing>
    <Header floated='left'>
      <Link to={'/'}>My Blog</Link>
    </Header>
    <Menu floated='right' compact={true}>
      <Menu.Item>
        <Link to={'/contacts'}>Contacts</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={'/add'}>Add Post</Link>
      </Menu.Item>
    </Menu>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by React Course
  </Segment>
);
