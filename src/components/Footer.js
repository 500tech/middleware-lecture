import React from 'react';
import ThemeManager from './ThemeManager';

const Footer = () => (
  <footer>
    <ThemeManager />
    <a href="http://react-next.com">React Next 2017</a> - Middleware demo by Boris Dinkevich (<a href="mailto:boris@500tech.com">boris@500tech.com</a>)
  </footer>
);

Footer.propTypes = {
};

export default Footer;