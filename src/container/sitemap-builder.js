import Sitemap from 'react-router-sitemap';

const sitemap = (
  new Sitemap(<Route path='/'>).build('http://my-site.ru').save("./sitemap.xml");
);