import 'isomorphic-fetch';
import { Aurelia, PLATFORM } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import moment from 'moment';

import environment from './environment';

import regeneratorRuntime from 'babel-runtime/regenerator';
window.regeneratorRuntime = regeneratorRuntime;

import 'materialize-css';

//import {PLATFORM} from 'aurelia-pal';
//import 'babel-polyfill';
//import * as Bluebird from 'bluebird';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
//Bluebird.config({ warnings: { wForgottenReturn: false } });



function waitForMaterialize() {
  return new Promise((resolve, reject) => {
    let iterations = 0;
    const handler = window.setInterval(() => {
      iterations++;
      let ma = (window).Materialize;
      if (
        ma.elementOrParentIsFixed &&
          ma.escapeHash &&
          ma.fadeInImage &&
          ma.guid &&
          ma.scrollFire &&
          ma.showStaggeredList &&
          ma.toast &&
          ma.updateTextFields
      ) {
        console.log(`waited ${iterations} iterations for Materialize to finish loading`);
        window.clearInterval(handler);
        resolve();
      }
    }, 1);
  });
}

export async function configure(aurelia) {
  
  // https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/337
  // without this we have "Uncaught TypeError: Materialize.updateTextFields is not a function".
  // Remove this when the issue is closed.
  //setTimeout(function() {
      let test = await waitForMaterialize();
    //}, 1000);

  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  //if (environment.testing) {
  //  aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  //}

  new HttpClient().configure(config => {
    const baseUrl = document.getElementsByTagName('base')[0].href;
    config.withBaseUrl(baseUrl);
  });

  

aurelia.use
  .plugin(PLATFORM.moduleName('aurelia-validation'))
  .plugin(PLATFORM.moduleName('aurelia-materialize-bridge'), b => b.useAll());
  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app/components/app/app')));
}
