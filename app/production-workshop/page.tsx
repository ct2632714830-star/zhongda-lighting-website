import type { Metadata } from 'next'
import ProductionWorkshopClient from './ProductionWorkshopClient'

export const metadata: Metadata = {
  title: 'Production Workshop | ZD Bespoke Lighting',
  description:
    'Inside the ZD Bespoke Lighting workshop in Zhongshan, China — how custom chandeliers and bespoke hotel lighting fixtures are crafted, assembled and quality-checked before shipping worldwide.',
  alternates: { canonical: '/production-workshop' },
}

export default function ProductionWorkshopPage() {
  return <ProductionWorkshopClient />
}
