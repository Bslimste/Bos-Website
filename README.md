# Bos-Website
Website for BOS

#####STRUCTURE######
follows same structure as project bslim.

 * assets -> images
 * config -> api (same api as in bslim)

it's recommend to make a folder for each component with a .js and .css in it for the specific component



#####PLUGINS########
Besides the standard packages the following packages have also been added to the package.json.
If you want to add a package that requires .css then you have to add the import in the index.js file under /src

--FRAMEWORKS--
We can use the components from the frameworks to quickly setup a basic website.

  * material-ui/core (https://material-ui.com/getting-started/usage/)
  * material-ui/icons
  
  * reactstrap (https://reactstrap.github.io/)
  * bootstrap
  
--MAP--
In case a map is needed leaflet is added. leaflet works on openstreetmap and does not require a API key.
https://leafletjs.com/examples/quick-start/
 
  * leaflet
  * react-leaflet
  
#####TIPS########
 * work with % and vh (viewport height) for height and vw (viewport width) for width in CSS. this makes the design more responsive.
