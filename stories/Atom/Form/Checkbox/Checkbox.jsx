import React from 'react';
import './checkbox.scss';

export const Checkbox = ({ label }) => {
  return (
    <>
      <div className="checkbox-wrapper">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="custom-control-input"/>
        <label for="vehicle1" className="custom-control-label">{ label }</label>
      </div>
      <div className="checkbox-wrapper">
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" className="custom-control-input"/>
        <label for="vehicle2" className="custom-control-label">{ label }</label>
      </div>
    </>
  );
};
