import AboutSection from '../sections/about'
import FaqSection from '../sections/faq'
import HeroSection from '../sections/hero'
import ResourceSection from '../sections/resource'

export const CMSSection: Record<string, () => JSX.Element> = {
  hero: () => <HeroSection />,
  about: () => <AboutSection />,
  faq: () => <FaqSection />,
  resource: () => <ResourceSection />,
}
