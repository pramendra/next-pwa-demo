// @flow
/* eslint-disable react/no-danger */
import React from 'react';
import dynamic from 'next/dynamic';

import type { layoutType } from './../../types';
import { rendererHeader, rendererFooter } from './../partials/Headers';
import stylesheet from '../../styles/styles.css';

// const stylesheet = dynamic(import('../../styles/styles.css'), {
//   ssr: false
// });

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
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      {renderHeader()}
      <div className="c-box">{children}</div>
      {renderFooter()}
    </div>
  );
};
