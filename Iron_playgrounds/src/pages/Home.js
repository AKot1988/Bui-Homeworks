import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import HeroSection from '@/components/HeroSection/HeroSection';

import '@/scss/main.scss';

export default function Home() {}

Home.prototype.render = function (parent) {
  const header = new Header();
  header.render(parent);

  const newHeroSection = new HeroSection();
  newHeroSection.render(parent);

  const footer = new Footer();
  footer.render(parent);
};
