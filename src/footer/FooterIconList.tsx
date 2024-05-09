import type { ReactNode } from 'react';
import React from 'react';

type IFooterIconListProps = {
  children: ReactNode;
};

const FooterIconList = (props: IFooterIconListProps) => (
  <div className="footer-icon-list flex flex-wrap">
    {props.children}
  </div>
);

export { FooterIconList };
