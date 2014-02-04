define(["jquery"], function(jquery) {
 
  return {
    hideStuff: function() {
		$('#buttonTest').on('click', function(){
			$('#myText').css('display', 'none');
		});
		console.log('LLB App working with Require.js');
    }
  }
});