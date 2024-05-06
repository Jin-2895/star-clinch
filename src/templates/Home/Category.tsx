import { Section } from '@/layout/Section'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Category = () => {
  return (
    <Section yPadding='py-24' screen='' xMargin="mx-auto">
      <div>
        <div className="flex justify-center items-center gap-44">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#c94650] p-3 overflow-hidden relative">
              <div className="rounded-full  overflow-hidden">
                <Image width={400} height={400} src='/celebrities/arijitSingh.png' alt='artist'/>
              </div>
            </div>
            <h1 className="absolute text-[104px] leading-[125.86px] left-0 text-white">
              Singers
            </h1>
          </div>
          <div className="flex flex-col items-start justify-start gap-10">
            <h1 className="text-[64px] leading-[77.45px] text-white">
              <span className="opacity-50">
                Choose <br /> from
              </span>{' '}
              100+ <br />
              Categories
            </h1>
            <button className="bg-transparent outline-none focus:outline-none hover:outline-none p-0 text-white">
              <Link href="/various-artists" className="capitalize text-[32px] leading-[38.73px] font-semibold bg-gradient-to-b from-[rgba(255,227,226,0.8)] via-[rgba(241,102,51,0.8)] to-[rgba(253,45,125,0.8)] inline-block text-transparent bg-clip-text">
                Explore All Categories {'-->'}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export { Category }