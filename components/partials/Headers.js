// @flow
import React from 'react';

export const rendererHeader = () => () => (
  <h1 className="text-red m-2">Buy & Sell</h1>
);
export const rendererFooter = () => () => (
  <div className="bg-grey-lighter">
    <hr />
    <div className="inline-flex">
      <div className="flex text-grey-darker text-center px-4 py-2 m-2">
        About Us
      </div>
      <div className="flex text-grey-darker text-center px-4 py-2 m-2">
        Contact
      </div>
    </div>
  </div>
);
