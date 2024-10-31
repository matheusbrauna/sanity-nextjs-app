import AccordionSection from '../sections/accordion'
import CardSection from '../sections/cards'
import HeroSection from '../sections/hero'
import OffsetSection from '../sections/offset'

export const CMSSection: Record<
  string,
  (props: { id: string }) => JSX.Element
> = {
  hero: props => <HeroSection {...props} />,
  'offset-section': props => <OffsetSection {...props} />,
  accordion: props => <AccordionSection {...props} />,
  card: props => <CardSection {...props} />,
}
