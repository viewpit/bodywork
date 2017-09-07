import 'isomorphic-fetch';
import { Aurelia, PLATFORM } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'bootstrap/scss/bootstrap.scss';
//import { Config } from "aurelia-bootstrapper";
import * as BootstrapConfig from 'aurelia-bootstrap';
//import 'bootstrap'
//import BootstrapConfig from 'aurelia-bootstrap';

declare const IS_DEV_BUILD: boolean; // The value is supplied by Webpack during the build

export function configure(aurelia: Aurelia) {
    aurelia.use.standardConfiguration();

    if (IS_DEV_BUILD) {
        aurelia.use.developmentLogging();
    }

    new HttpClient().configure(config => {
        const baseUrl = document.getElementsByTagName('base')[0].href;
        config.withBaseUrl(baseUrl);
    });

    aurelia.use.plugin(PLATFORM.moduleName('aurelia-bootstrap'));//, (config: BootstrapConfig) => { config.options.version = 4 });
//        .feature('resources');

    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app/components/app/app')));
}
