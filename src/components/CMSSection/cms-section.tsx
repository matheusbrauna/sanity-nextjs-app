import OffsetSection from '../sections/offset'
import AccordionSection from '../sections/accordion'
import HeroSection from '../sections/hero'
import ResourceSection from '../sections/resource'

export const CMSSection: Record<
  string,
  (props: { id: string }) => JSX.Element
> = {
  hero: props => <HeroSection {...props} />,
  'offset-section': props => <OffsetSection {...props} />,
  accordion: props => <AccordionSection {...props} />,
  resource: props => <ResourceSection {...props} />,
}
