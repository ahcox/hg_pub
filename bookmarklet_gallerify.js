/**
 * Gallerifying Bookmarklet
 *
 * Part of Hoogli Gallery. See http://hoogli.com/gallery
 *
 * Copyright Andrew H. Cox 2012. All rights reserved worldwide.
 **/

/*
GALLERY_HOST_PREFIX="http://hoog.li/g?g="
var gallery_target = window.location;

try {
   console.log("Going to build a gallery for: " + gallery_target);
} catch(e) {}
var encoded_target = encodeURIComponent(gallery_target);

var next_loc = GALLERY_HOST_PREFIX+encoded_target;
try{ console.log("About to hop to: " + next_loc); } catch(e){}

window.location = next_loc;
*/

window.location = "http://hoog.li/g?g=" + encodeURIComponent(window.location);
