import AboutSection from '../sections/about'
import FaqSection from '../sections/faq'
import HeroSection from '../sections/hero'
import ResourceSection from '../sections/resource'

export const CMSSection: Record<
  string,
  (props: { id: string }) => JSX.Element
> = {
  hero: props => <HeroSection {...props} />,
  about: props => <AboutSection {...props} />,
  faq: props => <FaqSection {...props} />,
  resource: props => <ResourceSection {...props} />,
}
