import React from 'react';

import { Meta } from '@/layout/Meta';

import { AppConfig } from '@/utils/AppConfig';
import { GTQStep } from './GTQStep';

const GTQStepBase = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
  
      <GTQStep />
     
    </div>
  );
};

export { GTQStepBase };