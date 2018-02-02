// @flow
import React from 'react';
import type { layoutType } from './../../types';
import { rendererHeader, rendererFooter } from './../partials/Headers';

export default ({
  children,
  renderHeader = rendererHeader(),
  renderFooter = rendererFooter()
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
