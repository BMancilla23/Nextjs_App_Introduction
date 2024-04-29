import type { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Description',
  keywords: ['About Page', 'Bryan', 'Información', '...']
};

type Props = {}

const AboutPage = (props: Props) => {
  return (
    <span className='text-7xl'>About Page</span>
  )
}

export default AboutPage