import React, { useEffect } from 'react';
import './footerLists.scss';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { Link } from '../../../Atom/Base-typography/Link/link';

export const FooterLists = ({ type, headerText, text, style , data, ...args}) => {
  return (
    <ul id="footerlist" className={['footer__items',`footer__items--${args.variant}`].join(' ')}>
      <li className="footer__item">
        <Heading type='6' label={headerText} className="footer__heading"  />
          <div class="footer__panel">
          {data.map(function(item, index) {
            return (
             <Link key= {index} label={item.text} />
            )})}
          </div>
      </li>
   </ul>
  );
};

FooterLists.defaultProps = {
  variant: 'black',
};