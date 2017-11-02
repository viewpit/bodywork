import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

//require('jquery/dist/jquery');
//require('popper.js/dist/umd/popper');
//require('bootstrap/dist/js/bootstrap');

//require('bootstrap');

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'BodyWork';

        config.options.pushState = true;
        
        config.map([{
            route: [ '', 'home' ],
            name: 'home',
            settings: { icon: 'home' },
            moduleId: PLATFORM.moduleName('../home/home'),
            nav: true,
            title: 'Home'
        }, {
            route: 'counter',
            name: 'counter',
            settings: { icon: 'education' },
            moduleId: PLATFORM.moduleName('../counter/counter'),
            nav: true,
            title: 'Counter'
        }, {
            route: 'calculate',
            name: 'calculate',
            settings: { icon: 'education' },
            moduleId: PLATFORM.moduleName('../calculate/calculate'),
            nav: true,
            title: 'Workout calculating'
        }, {
            route: 'fetch-data',
            name: 'fetchdata',
            settings: { icon: 'th-list' },
            moduleId: PLATFORM.moduleName('../fetchdata/fetchdata'),
            nav: true,
            title: 'Fetch data'
        }]);

        this.router = router;
    }
}
