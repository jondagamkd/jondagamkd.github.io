import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
import Link from '@mui/material/Link';

//image="../../src/assets/img/pass-stache.png"

const itemData = [
  {
    img: 'https://raw.githubusercontent.com/andydhpkp/pass-stache/main/public/img/home-screenshot.png',
    title: 'Pass-Stashe',
    description: '(Group Project) HTML/CSS/Javascript/mysql2/...',
    link: 'https://thawing-temple-09016.herokuapp.com/',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://raw.githubusercontent.com/GarciaE89/text-me-today/main/assets/img/tmt.jpg',
    title: 'Text-Me-Today',
    description: '(Group Project) SMS Text API',
    link: 'https://garciae89.github.io/text-me-today/index.html',
  },
  {
    img: 'https://raw.githubusercontent.com/jondagamkd/budget_tracker/main/public/img/bt.jpg',
    title: 'Budget-Tracker PWA',
    description: 'PWA Offline App',
    link: 'https://afternoon-falls-07596.herokuapp.com/',
  },
  {
    img: 'https://raw.githubusercontent.com/jondagamkd/fantastic_umbrella/main/public/assets/img/umbrella.jpg',
    title: 'Fantastic Umbrella API',
    description: 'Experiemental Backend Database API',
    link: 'https://github.com/jondagamkd/fantastic_umbrella',
  },
  {
    img: 'https://raw.githubusercontent.com/jondagamkd/employee_tracker/main/assets/img/employee_tracker.jpg',
    title: 'Employee Tracker',
    description: 'Backend test API for mySQL2',
    link: 'https://github.com/jondagamkd/employee_tracker',
  },
  {
    img: 'https://raw.githubusercontent.com/jondagamkd/note_taker/main/public/assets/img/noteTaker.jpg',
    title: 'Note Taker',
    description: 'Note taking API with working Database',
    link: 'https://desolate-taiga-67985.herokuapp.com/',
  },
];

//src={require(`../../assets/small/${category}/${i}.jpg`)}
const Portfolio = () => (
  <div>
    <h1>Portfolio</h1>
    <p>
      A sample of my work.
    </p>
    <div className="flex-row">
    <ImageList sx={{ width: 1000, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Link href={item.link}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          
          <ImageListItemBar
            title={item.title}
            subtitle={item.description}
          />
          </Link>
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  </div>
);

export default Portfolio;