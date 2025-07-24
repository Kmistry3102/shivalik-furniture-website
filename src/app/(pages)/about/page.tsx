import AboutBannerSection from '@/app/components/page/aboutDetails/AboutBannerSection'
import AboutFounderSection from '@/app/components/page/aboutDetails/AboutFounderSection'
import AboutPhilosophySection from '@/app/components/page/aboutDetails/AboutPhilosophySection'
import AboutTimelineSection from '@/app/components/page/aboutDetails/AboutTimelineSection'
import AboutValuesSection from '@/app/components/page/aboutDetails/AboutValuesSection'
import React from 'react'

export default function AboutPage() {
  return (
    <div>
        <AboutBannerSection />
        <AboutFounderSection />
        <AboutPhilosophySection />
        <AboutTimelineSection />
        <AboutValuesSection />
    </div>
  )
}
