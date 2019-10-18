function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}
if(isIE()){alert('Internet Explorer will not properly display this site. Please use an updated browser such as Chrome to view.')}
