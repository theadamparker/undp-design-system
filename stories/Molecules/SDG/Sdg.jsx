import React from 'react';
import './sdg.scss';
import { Heading } from '../../Atom/Typography/Heading/Heading';

export const Sdg = ({ data, imgsrc, title }) => (
  <>
    {data.map((item, index) => (
      <a href="#anchor" className={['sdg-card', `${item.bgcolor}`].join(' ')} key={index}>
        <strong>{index + 1}</strong>
        <Heading type="4" label={item.text}/>
        <div className="sdg-image">
          <img src={item.image} alt={item.image} />
          <div className="gradient" />
        </div>
      </a>
    ))}
    <a className="sdg-card sdg-card-link color-white" href="#" target="_blank">
      <img src={imgsrc} alt={imgsrc} />
      <Heading type="4" label={title}/>
    </a>
  </>
);