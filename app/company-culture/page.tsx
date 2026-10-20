import type { Metadata } from 'next'
import CompanyCultureClient from './CompanyCultureClient'

export const metadata: Metadata = {
  title: 'Company Culture | ZD Bespoke Lighting',
  description:
    'The people and values behind ZD Bespoke Lighting (Zhongshan Zhongda Lighting Co., Ltd.) — a bespoke lighting manufacturer serving hotels, resorts and villas worldwide.',
  alternates: { canonical: '/company-culture' },
}

export default function CompanyCulturePage() {
  return <CompanyCultureClient />
}
