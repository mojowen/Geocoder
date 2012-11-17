# Geocoder #

Hey this is a really really simple app built off of [AppJS](http://appjs.org).

It is available for Mac OSX and PC - although not very tested - and is super super basic.

Basically you paste in a list of addresses/cities/zip codes/anything Google Maps could eat and it'll give you a list back of lat/lngs - as provided by Google. Tested to about 800 or so.

## Get It ##

 * [Mac](https://github.com/downloads/mojowen/Geocoder/geocoder_mac.zip). Unzip from the file and run it. Yup pretty easy.
 * [PC](https://github.com/downloads/mojowen/Geocoder/geocoder_windows.zip). Unzip the directory and then run geocoder.exe.

AppJS makes adding linux very easy if there's interest.

## How Does This Work? ###

Well it's pretty much just a Chromium (the open source version of Chrome) window with a web page. So this isn't much fancier than a webpage...

If you want to learn more about it - I'd suggest looking at the following files:

 * App.sh launches the node file data/app.js
 * App.js launches data/content/index.html which acts just like a web page

I will do a longer blog post about creating the geocoder.app  and geocoder.exe file - there isn't a lot of documentation how to get from AppJS to something more normal looking.

## This Relies Upon ##

 * [AppJS](http://AppJS.org/) Yup. Which is built on [Node JS](http://nodejs.org/)
 * [Google Maps API](https://developers.google.com/maps/documentation/javascript/) - also if I'm violating a TOS I'm really sorry. I also use [Google's Static Maps API](https://developers.google.com/maps/documentation/staticmaps/)
 * [JQuery](http://jquery.com/) natch