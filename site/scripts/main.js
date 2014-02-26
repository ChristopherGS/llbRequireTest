require.config({

	//baseUrl: 'scripts',
	paths: {
		jquery: '../bower_components/jquery/jquery'
	}

});

require(["app"],function(app){
  app.hideStuff();
});
