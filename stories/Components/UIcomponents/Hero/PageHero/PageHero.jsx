import React, { useEffect } from 'react';
import './page-hero.scss';
import expandToSize from '../../../../assets/js/animation';
import BackgroundVideo from '../../../../assets/video/video_sample.mp4';
import { Video } from '../../../../Atom/Video/Video';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Breadcrumbcomponent } from '../../../Navigationcomponents/Breadcrumbs/Breadcrumbs';

export const PageHero = ({
  data, title, content, variant, imgsrc, imgalt,
}) => {
  useEffect(() => {
    expandToSize('.pagehero-full');
  }, []);
  return (
    <div className="pagehero-full">
      {variant === 'video'
        ? (
          <Video src={BackgroundVideo} width="100%" height="100%" />
        )
        : (
          <div className="overlay-grey">
            <img src={imgsrc} alt={imgalt} />
          </div>
        )}
      <Breadcrumbcomponent data={data} Color="White"/>
      <div className="pagehero-content  medium-offset-1">
        <div className="content-box">
          {content && <Heading type="4" className="color-white" label={content} dataViewport="true"/>}
          {title && <Heading type="2" className="color-white" label={title} dataViewport="true"/>}
        </div>
      </div>
    </div>
  );
};

PageHero.defaultProps = {
  variant: 'image',
};
