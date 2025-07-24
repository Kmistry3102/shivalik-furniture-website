import React from 'react';
import HomeBannerSection from './HomeBannerSection';
import HomeWeAreSection from './HomeWeAreSection';
import HomeFurnitureGenerationsSection from './HomeFurnitureGenerationsSection';
import HomeBrandSection from './HomeBrandSection';
import HomeFactorySection from './HomeFactorySection';
import HomeSustainableSection from './HomeSustainableSection';
import HomeCertificationsSection from './HomeCertificationsSection';
import HomeSellFurnitureSection from './HomeSellFurnitureSection';
import HomeManufacturingSection from './HomeManufacturingSection';
import HomeMachinerySection from './HomeMachinerySection';
// import HomeFactoryWalkthroughSection from './HomeFactoryWalkthroughSection';
import HomeLetsBuildTogetherSection from './HomeLetsBuildTogetherSection';
import HomeOurClientsSection from './homeOurClientsSection';
import HomeInteriorSolutionsSection from './HomeInteriorSolutionsSection';
import HomeVideoHeroSection from './HomeVideoHeroSection';
import HomeJoinTeamSection from './HomeJoinTeamSection';
import HomePartnerSection from './HomePartnerSection';

export default function HomePage() {
  return (
    <div>
      <HomeBannerSection />
      <HomeFactorySection />
      <HomeSustainableSection />
      <HomeCertificationsSection />
      <HomeSellFurnitureSection />
      <HomeManufacturingSection />
      <HomeMachinerySection />
      {/* <HomeFactoryWalkthroughSection /> */}
      <HomeLetsBuildTogetherSection />
      <HomeOurClientsSection />
      <HomeWeAreSection />
      <HomeFurnitureGenerationsSection />
      <HomeBrandSection />
      <HomeInteriorSolutionsSection />
      <HomeVideoHeroSection />
      <HomeJoinTeamSection />
      <HomePartnerSection />
    </div>
  );
}
