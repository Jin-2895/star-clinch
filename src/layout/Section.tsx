import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  innerYPadding?: string;
  innerXPadding?: string;
  screen?:string;
  xMargin?:string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`${props.xMargin ?props.xMargin : "mx-auto"} ${props.screen ? props.screen : "max-w-screen-xxl"} relative  ${
      props.yPadding
    }`}
  >
    {(props.title || props.description) && (
      <div className={`mb-12 text-center ${props?.innerYPadding ? props?.innerYPadding : ''} ${props?.innerXPadding ? props?.innerXPadding : ''}`}>
        {props.title && (
          <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
