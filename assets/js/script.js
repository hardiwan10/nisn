//disble klik kanan
var isNS = navigator.appName == 'Netscape' ? 1 : 0;
if (navigator.appName == 'Netscape') document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);
function mischandler() {
  return false;
}
function mousehandler(e) {
  var myevent = isNS ? e : event;
  var eventbutton = isNS ? myevent.which : myevent.button;
  if (eventbutton == 2 || eventbutton == 3) return false;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;

//disble tombol
document.onkeydown = function (wd) {
  if (event.keyCode == 123) {
    return false;
  }
  if (wd.ctrlKey && wd.shiftKey && wd.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (wd.ctrlKey && wd.shiftKey && wd.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (wd.ctrlKey && wd.shiftKey && wd.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
  if (wd.ctrlKey && wd.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
  if (wd.ctrlKey && wd.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
};
