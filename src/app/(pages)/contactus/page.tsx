import ContactDetailSection from '@/app/components/page/contactDetails/ContactDetailSection'
import ContactusBanner from '@/app/components/page/contactDetails/ContactusBanner'
import React from 'react'

export default function page() {
  return (
    <div>
      <ContactusBanner />
      <ContactDetailSection />
    </div>
  )
}
