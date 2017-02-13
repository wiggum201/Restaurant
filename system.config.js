System.config({
        packages: {        
          app: {
            format: 'register',
            defaultExtension: 'js'
          },
          jQuery: {
              //common java script
              format: 'cjs',
              defaultExtension: 'js',
              main: 'jquery'
          },
          owlSlider: {
              format: 'cjs',
              defaultExtension: 'js',
              main: 'owl.carousel'
          },
          bootstrapJs: {
              format: 'cjs',
              defaultExtension: 'js',
              main: 'bootstrap.min'
          },
          bootstrapDatePicker: {
              format: 'cjs',
              defaultExtension: 'js',
              main: 'bootstrap-datepicker'
          },
          bootstrapTimePicker:{
              format: 'cjs',
              defaultExtension: 'js',
              main: 'bootstrap-timepicker.min'
          }

        },
        map: {
            // you can also paste the URL from CDN
            // jQuery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
            jQuery: 'app/assets/plugins/jQuery',
            owlSlider: 'app/assets/plugins/owl/js',
            bootstrapJs: 'app/assets/plugins/bootstrap',
            bootstrapDatePicker: 'app/assets/plugins/bootstrap',
            bootstrapTimePicker: 'app/assets/plugins'
        }

      });
      System.import('app/main')
            .then(null, console.error.bind(console));