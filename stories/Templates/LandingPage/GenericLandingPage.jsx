import React from 'react';
import './genericlandingpage.scss';
import { PageHeroOption } from '../../Components/UIcomponents/Hero/Pagehero/PageHeroOption';
import  FilterAndSearchBar  from "../../Patterns/FilterAndSearchBar/FilterAndSearchBar";
import { ContentCard } from '../../Organism/Blocks/ContentCard/ContentCard';
import { Footer } from '../../Organism/Footer/Footer';
import logo from '../../assets/images/logo.svg';
import logowhite from '../../assets/images/logo-white.svg';

export const GenericLandingPage = ({
  data, active, herodata, title, imgsrc, videosrc, footerData, content, groupcontentdata, buttonname, activeFilterText, clearText,
}) => (
  <>
    <div className="grid-container fluid">
      <div className="grid-x grid-margin-x">
        <div className="cell large-12">
          <PageHeroOption
            data={herodata}
            title={title}
            content={content}
            active={active}
            imgsrc={imgsrc}
            imgalt={imgsrc}
            videosrc={videosrc}
          />
        </div>
      </div>
    </div>
    <div className="grid-container fluid contentbottom">
      <div className="grid-x grid-margin-x mtop-three">
        <div className="cell large-3 small-12">
          <div className="column">
            <FilterAndSearchBar data={data} clearText={clearText} activeFilterText={activeFilterText} />
          </div>
        </div>
        <div className="cell large-9 small-12 mtop-four">
          <div className="column">
            <ContentCard
              data={groupcontentdata}
              buttontype={buttonname}
            />
          </div>
        </div>
      </div>
    </div>
    <Footer
      src={logo}
      srctwo={logowhite}
      headerText={footerData.headerText}
      headerText2={footerData.headerText2}
      style="default"
      alt="UNDP Logo"
      element="input"
      type="email"
      required="required"
      mode="form-email"
      errorText={footerData.errorLabel}
      label={footerData.labelname}
      button={footerData.buttonname}
      placeholder={footerData.placeholdername}
      menutitle={footerData.pageTitle}
      data={footerData.footerdata}
      copyright={footerData.copyright}
      menudata={footerData.menudata}
      {...{ color: 'blue' }}
    />

  </>
);
