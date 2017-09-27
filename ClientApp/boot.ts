import 'isomorphic-fetch';
import { Aurelia, PLATFORM } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'bootstrap/scss/bootstrap.scss';
//import { Config } from "aurelia-bootstrapper";
//import * as BootstrapConfig from 'aurelia-bootstrap';
//import 'bootstrap'
//import BootstrapConfig from 'aurelia-bootstrap';

import 'materialize-css';

declare const IS_DEV_BUILD: boolean; // The value is supplied by Webpack during the build


function waitForMaterialize() {
    return new Promise((resolve, reject) => {
        let iterations = 0;
        const handler = window.setInterval(() => {
            iterations++;
            let ma = (window as any).Materialize;
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



export async function configure(aurelia: Aurelia) {

    // https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/337
    // without this we have "Uncaught TypeError: Materialize.updateTextFields is not a function".
    // Remove this when the issue is closed.
    await waitForMaterialize();

    aurelia.use.standardConfiguration();

    if (IS_DEV_BUILD) {
        aurelia.use.developmentLogging();
    }

    new HttpClient().configure(config => {
        const baseUrl = document.getElementsByTagName('base')[0].href;
        config.withBaseUrl(baseUrl);
    });

    //aurelia.use.plugin(PLATFORM.moduleName('aurelia-bootstrap'),
    //    (config: BootstrapConfig) => {
    //        config.options.version = 4;
    //    });//.feature('resources');

    // Install and configure the plugin
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-materialize-bridge'), b => b.useAll());

    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app/components/app/app')));
}
