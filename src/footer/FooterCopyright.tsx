import { AppConfig } from '../utils/AppConfig';
import React from 'react';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} {AppConfig.title}.
  </div>
);

export { FooterCopyright };
