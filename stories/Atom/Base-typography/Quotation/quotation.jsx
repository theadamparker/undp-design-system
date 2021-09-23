import React from 'react';
import './quotation.scss';

export const Quotation = ({ label }) => {
  return (
    <q>
      { label }
    </q>
  );
};