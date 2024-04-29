import type { Metadata } from 'next';
import React from 'react'

// shortcut mr create a metadata
export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Esta es la página de precios de mi servicio',
};

type Props = {}

const PricingPage = (props: Props) => {
  return (
    <div className='text-7xl'>PricingPage</div>
  )
}

export default PricingPage