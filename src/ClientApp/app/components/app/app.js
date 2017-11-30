import { PLATFORM } from 'aurelia-framework';
import { Router } from 'aurelia-router';

import 'bootstrap';


export class App {
     
    configureRouter(config, router) {
        config.title = 'Bodywork';

        config.options.pushState = true;
        
        config.map([{
            route: [ '', 'home' ],
            name: 'home',
            settings: { icon: 'home' },
            moduleId: PLATFORM.moduleName('../home/home', 'home'),
            nav: true,
            title: 'Home'
        }, {
            route: 'counter',
            name: 'counter',
            settings: { icon: 'education' },
            moduleId: PLATFORM.moduleName('../counter/counter', 'counter'),
            nav: true,
            title: 'Counter'
        }, {
            route: 'calculate',
            name: 'calculate',
            settings: { icon: 'education' },
            moduleId: PLATFORM.moduleName('../calculate/calculate', 'calculate'),
            nav: true,
            title: 'Workout calculating'
        }, {
            route: 'fetch-data',
            name: 'fetchdata',
            settings: { icon: 'th-list' },
            moduleId: PLATFORM.moduleName('../fetchdata/fetchdata', 'fetchdata'),
            nav: true,
            title: 'Fetch data'
        }, {
                route: 'registration',
                name: 'registration',
                settings: { icon: 'th-list' },
                moduleId: PLATFORM.moduleName('../registration/registration', 'registration'),
                nav: true,
                title: 'Registration'
            }
        ]);

        this.router = router;
    }

    navbar = null;
    scroll_distance = 500;
    toggle = null;


  /*


  nowuiKit = {
    misc: {
      navbar_menu_visible: 0
    },

    checkScrollForTransparentNavbar: debounce(function () {
      if ($(document).scrollTop() > this.scroll_distance) {
        if (transparent) {
          transparent = false;
          $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
        }
      } else {
        if (!transparent) {
          transparent = true;
          $('.navbar[color-on-scroll]').addClass('navbar-transparent');
        }
      }
    }, 17),

    initNavbarImage: function () {
      var $navbar = $('.navbar').find('.navbar-translate').siblings('.navbar-collapse');
      var background_image = $navbar.data('nav-image');

      if ($(window).width() < 991 || $('body').hasClass('burger-menu')) {
        if (background_image != undefined) {
          $navbar.css('background', "url('" + background_image + "')")
            .removeAttr('data-nav-image')
            .css('background-size', "cover")
            .addClass('has-image');
        }
      } else if (background_image != undefined) {
        $navbar.css('background', "")
          .attr('data-nav-image', '' + background_image + '')
          .css('background-size', "")
          .removeClass('has-image');
      }
    },

    initSliders: function () {
      // Sliders for demo purpose in refine cards section
      var slider = document.getElementById('sliderRegular');

      noUiSlider.create(slider, {
        start: 40,
        connect: [true, false],
        range: {
          min: 0,
          max: 100
        }
      });

      var slider2 = document.getElementById('sliderDouble');

      noUiSlider.create(slider2, {
        start: [20, 60],
        connect: true,
        range: {
          min: 0,
          max: 100
        }
      });
    },

    checkScrollForParallax: debounce(function () {

      oVal = ($(window).scrollTop() / 3);
      big_image.css({
        'transform': 'translate3d(0,' + oVal + 'px,0)',
        '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
        '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
        '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
      });

    }, 6),

    initContactUsMap: function () {
      var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
      var mapOptions = {
        zoom: 13,
        center: myLatlng,
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [{
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e9e9e9"
          }, {
            "lightness": 17
          }]
        }, {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f5f5f5"
          }, {
            "lightness": 20
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 17
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 29
          }, {
            "weight": 0.2
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 18
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 16
          }]
        }, {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f5f5f5"
          }, {
            "lightness": 21
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dedede"
          }, {
            "lightness": 21
          }]
        }, {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "visibility": "on"
          }, {
            "color": "#ffffff"
          }, {
            "lightness": 16
          }]
        }, {
          "elementType": "labels.text.fill",
          "stylers": [{
            "saturation": 36
          }, {
            "color": "#333333"
          }, {
            "lightness": 40
          }]
        }, {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f2f2f2"
          }, {
            "lightness": 19
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#fefefe"
          }, {
            "lightness": 20
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#fefefe"
          }, {
            "lightness": 17
          }, {
            "weight": 1.2
          }]
        }]
      };

      var map = new google.maps.Map(document.getElementById("contactUsMap"), mapOptions);

      var marker = new google.maps.Marker({
        position: myLatlng,
        title: "Hello World!"
      });

      // To add the marker to the map, call setMap();
      marker.setMap(map);
    },


    initContactUs2Map: function () {
      var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
      var mapOptions = {
        zoom: 13,
        center: myLatlng,
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [{
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e9e9e9"
          }, {
            "lightness": 17
          }]
        }, {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f5f5f5"
          }, {
            "lightness": 20
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 17
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 29
          }, {
            "weight": 0.2
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 18
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 16
          }]
        }, {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f5f5f5"
          }, {
            "lightness": 21
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dedede"
          }, {
            "lightness": 21
          }]
        }, {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "visibility": "on"
          }, {
            "color": "#ffffff"
          }, {
            "lightness": 16
          }]
        }, {
          "elementType": "labels.text.fill",
          "stylers": [{
            "saturation": 36
          }, {
            "color": "#333333"
          }, {
            "lightness": 40
          }]
        }, {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f2f2f2"
          }, {
            "lightness": 19
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#fefefe"
          }, {
            "lightness": 20
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#fefefe"
          }, {
            "lightness": 17
          }, {
            "weight": 1.2
          }]
        }]
      };

      var map = new google.maps.Map(document.getElementById("contactUs2Map"), mapOptions);

      var marker = new google.maps.Marker({
        position: myLatlng,
        title: "Hello World!"
      });

      // To add the marker to the map, call setMap();
      marker.setMap(map);
    }
  }


  */





    activate() {


      /*!

 =========================================================
 * Now-ui-kit-pro - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit-pro
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
  * View License on http://www.creative-tim.com/license

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

      var transparent = true;
      var big_image;

      var transparentDemo = true;
      var fixedTop = false;

      var navbar_initialized,
        backgroundOrange = false,
        toggle_initialized = false;

      
        //  Activate the Tooltips
        $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

        //    Activate bootstrap-select
        if ($(".selectpicker").length != 0) {
          $(".selectpicker").selectpicker({
            iconBase: "now-ui-icons",
            tickIcon: "ui-1_check"
          });
        };

        if ($(window).width() >= 768) {
          big_image = $('.header[data-parallax="true"]');
          if (big_image.length != 0) {
            // HER nowuiKit: $(window).on('scroll', nowuiKit.checkScrollForParallax);
          }
        }

        // Activate Popovers and set color for popovers
        $('[data-toggle="popover"]').each(function () {
          color_class = $(this).data('color');
          $(this).popover({
            template: '<div class="popover popover-' + color_class + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
          });
        });

        // Activate the image for the navbar-collapse
      // HER nowuiKit:nowuiKit.initNavbarImage();

        this.navbar = $('.navbar[color-on-scroll]');
        this.scroll_distance = this.navbar.attr('color-on-scroll') || 500;

        // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.
        if ($('.navbar[color-on-scroll]').length != 0) {
          // HER nowuiKit:nowuiKit.checkScrollForTransparentNavbar();
          // HER nowuiKit:$(window).on('scroll', nowuiKit.checkScrollForTransparentNavbar)
        }

        $('.form-control').on("focus", function () {
          $(this).parent('.input-group').addClass("input-group-focus");
        }).on("blur", function () {
          $(this).parent(".input-group").removeClass("input-group-focus");
        });

        // Activate bootstrapSwitch
        $('.bootstrap-switch').each(function () {
          $this = $(this);
          data_on_label = $this.data('on-label') || '';
          data_off_label = $this.data('off-label') || '';

          $this.bootstrapSwitch({
            onText: data_on_label,
            offText: data_off_label
          });
        });

        if ($(window).width() >= 992) {
          big_image = $('.page-header-image[data-parallax="true"]');

          // HER nowuiKit:$(window).on('scroll', nowuiKit.checkScrollForParallax);
        }

        // Activate Carousel
        $('.carousel').carousel({
          interval: 4000
        });

        if ($(".datetimepicker").length != 0) {
          $('.datetimepicker').datetimepicker({
            icons: {
              time: "now-ui-icons tech_watch-time",
              date: "now-ui-icons ui-1_calendar-60",
              up: "fa fa-chevron-up",
              down: "fa fa-chevron-down",
              previous: 'now-ui-icons arrows-1_minimal-left',
              next: 'now-ui-icons arrows-1_minimal-right',
              today: 'fa fa-screenshot',
              clear: 'fa fa-trash',
              close: 'fa fa-remove'
            }
          });

          $('.datepicker').datetimepicker({
            format: 'MM/DD/YYYY',
            icons: {
              time: "now-ui-icons tech_watch-time",
              date: "now-ui-icons ui-1_calendar-60",
              up: "fa fa-chevron-up",
              down: "fa fa-chevron-down",
              previous: 'now-ui-icons arrows-1_minimal-left',
              next: 'now-ui-icons arrows-1_minimal-right',
              today: 'fa fa-screenshot',
              clear: 'fa fa-trash',
              close: 'fa fa-remove'
            }
          });

          $('.timepicker').datetimepicker({
            //          format: 'H:mm',    // use this format if you want the 24hours timepicker
            format: 'h:mm A', //use this format if you want the 12hours timpiecker with AM/PM toggle
            icons: {
              time: "now-ui-icons tech_watch-time",
              date: "now-ui-icons ui-1_calendar-60",
              up: "fa fa-chevron-up",
              down: "fa fa-chevron-down",
              previous: 'now-ui-icons arrows-1_minimal-left',
              next: 'now-ui-icons arrows-1_minimal-right',
              today: 'fa fa-screenshot',
              clear: 'fa fa-trash',
              close: 'fa fa-remove'
            }
          });
        };
      

      $(window).on('resize', function () {
        // HER nowuiKit:nowuiKit.initNavbarImage();
      });

      $(document).on('click', '.navbar-toggler', function () {
        this.toggle = $(this);

        // HER nowuiKit: //if (nowuiKit.misc.navbar_menu_visible == 1) {
        //  $('html').removeClass('nav-open');
        //  nowuiKit.misc.navbar_menu_visible = 0;
        //  $('#bodyClick').remove();
        //  setTimeout(function () {
        //    this.toggle.removeClass('toggled');
        //  }, 550);
        //} else {
        //  setTimeout(function () {
        //    this.toggle.addClass('toggled');
        //  }, 580);
        //  div = '<div id="bodyClick"></div>';
        //  $(div).appendTo('body').click(function () {
        //    $('html').removeClass('nav-open');
        //    nowuiKit.misc.navbar_menu_visible = 0;
        //    setTimeout(function () {
        //      this.toggle.removeClass('toggled');
        //      $('#bodyClick').remove();
        //    }, 550);
        //  });

          $('html').addClass('nav-open');
        // HER nowuiKit:nowuiKit.misc.navbar_menu_visible = 1;
        //}
      });

      // Returns a function, that, as long as it continues to be invoked, will not
      // be triggered. The function will be called after it stops being called for
      // N milliseconds. If `immediate` is passed, trigger the function on the
      // leading edge, instead of the trailing.

      function debounce(func, wait, immediate) {
        var timeout;
        return function () {
          var context = this,
            args = arguments;
          clearTimeout(timeout);
          timeout = setTimeout(function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          }, wait);
          if (immediate && !timeout) func.apply(context, args);
        };
      };







    }
}
