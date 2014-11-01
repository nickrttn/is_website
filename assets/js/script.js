$(document).ready(function(){

  
  var navMenu = $('nav > ul');
  var navButton = $('nav > button');

  // Mobile navigation menu toggle w/ animation, source: http://api.jquery.com/toggle/
  $('nav > button').toggle(
    function() {
      navMenu.show(200, function(){
        navButton.html('Close Menu');
      });
    },

    function() {
      navMenu.hide(200, function(){
        navButton.html('Show Menu');
      });
    }
  );

  // Twitterwidget, source: twitter.com
  if(location.pathname === '/overmij.html') {
    /*  I added the following line to test if this if-statement works, 
        and I'm not taking it out */
    console.log('Yeah');
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
  }

  // Load Typekit fonts
  try{Typekit.load();}catch(e){}

});