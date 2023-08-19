import Header from '@/components/Header/header';

import '@/scss/main.scss';

export default function Home() {}

Home.prototype.render = function (parent) {
  const header = new Header();
  header.render(parent);
};
