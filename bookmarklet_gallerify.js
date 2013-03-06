/**
 * Gallerifying Bookmarklet
 *
 * Part of Hoogli Gallery. See http://hoogli.com/gallery
 *
 * Copyright Andrew H. Cox 2012. All rights reserved worldwide.
 **/

GALLERY_HOST_PREFIX="http://hoog.li/g?g=";
var e=window.location;
/* console.log("Going to build a gallery for: "+e); */
var t=encodeURIComponent(e),n=GALLERY_HOST_PREFIX+t;
console.log("About to hop to: "+n),window.location=n,define("bookmarklet_gallerify",function(){});

