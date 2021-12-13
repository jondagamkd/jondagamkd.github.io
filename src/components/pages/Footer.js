import React from "react";
// var imageName = require('./test/0.jpg')
//var imageName = require('../../assets/img/github.png')
//src={require(`../../assets/small/${category}/${i}.jpg`)}

const footericons = [
  {
    img: 'github',
    link: 'https://github.com/jondagamkd',
    alt: 'github link',
  },
  {
    img: 'linkedin',
    link: 'https://www.linkedin.com/',
    alt: 'linkedin link',
  },
  {
    img: 'stack-overflow',
    link: 'https://stackoverflow.com/',
    alt: 'stack-overflow link',
  },
]

//src={require(`../../assets/small/${category}/${i}.jpg`)}
//<img src={require('../../assets/img/github.png').default}/>
const Footer = () => (
  <div id="footer" class="flex-row">
    {footericons.map((item) => (
      <div>
        <a href={item.link}><img src={require(`../../assets/img/${item.img}.png`).default} alt={item.alt} /></a>
      </div>
    ))}
  </div>
);



export default Footer;