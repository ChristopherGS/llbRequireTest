require.config({

	//baseUrl: 'scripts',
	paths: {
		jquery: '../bower_components/jquery/jquery',
		bootstrap: 'bower_components/bootstrap/dist/js/bootstrap'
	},
	
	shim: {
		underscore: {
		  exports: '_'
		},
		bootstrap: {
		  deps: ['jquery'],
		  exports: 'jQuery'
		}
		
	}

});

require(["app"],function(app){
  app.hideStuff();
});