import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Celebrity"
    description="Here are some celebrity for  your event."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <Link href="/" target="_blank">
              <Image
                src="/assets/images/model1.png"
                alt="Model1"
                width={260}
                height={224}
              />
            </Link>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Link href="/" target="_blank">
              <Image
                src="/assets/images/model2.png"
                alt="Model2"
                width={260}
                height={224}
              />
            </Link>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Link href="/">
              <Image
                src="/assets/images/model3.png"
                alt="Model3"
                width={260}
                height={224}
              />
            </Link>
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <Link href="/" target="_blank">
              <Image
                src="/assets/images/model4.png"
                alt="Model4"
                width={260}
                height={224}
              />
            </Link>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Link href="/" target="_blank">
              <Image
                src="/assets/images/model5.png"
                alt="Model5"
                width={260}
                height={224}
              />
            </Link>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Link href="/" target="_blank">
              <Image
                src="/assets/images/model6.png"
                alt="Model6"
                width={260}
                height={224}
              />
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
