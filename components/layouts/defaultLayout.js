import React from 'react';
import { renderNull } from './../../helpers/utilities';
import type { layoutType } from './../../types';

export default ({
  children,
  renderHeader = renderNull,
  renderFooter = renderNull
}: layoutType) => {
  if (typeof window !== 'undefined') {
    document.addEventListener('gesturestart', e => {
      e.preventDefault();
    });
  }

  return (
    <div className="p-box">
      {renderHeader()}
      <div className="c-box">{children}</div>
      {renderFooter()}
    </div>
  );
};
