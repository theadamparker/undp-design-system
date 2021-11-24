import React from 'react';

export const Searchbox = ({
  id, type, rows, cols, placeholder, required, mode, labelText, errorText, disabled, minlength, helpText,
}) => {
  return (
    <>
      <div className="input-group">
        {labelText && <label htmlFor={[`${type}`]} className={[`input-group__label--${mode}`].join(' ')}>{ labelText }</label>}
        <div className={[`input-group__icon ${type}-field ${mode}`].join(' ')}>
          <input type={type} id={id} disabled={disabled} required={required}placeholder={placeholder} minlength={minlength} cols={cols} rows={rows} className={['input__controls', `input__controls--${type} ${mode}`].join(' ')}/>
        </div>
        {helpText && <div htmlFor={[`${type}`]} className={[`input-group__label--${mode}-help`].join(' ')}>{ helpText }</div>}
        {errorText && <div htmlFor={[`${type}`]} className={['input-error', `input-group__label--${mode}-error`].join(' ')}>{ errorText }</div>}
      </div>
    </>
  );
};