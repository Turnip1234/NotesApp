(function() {
  var script = document.currentScript;
  var button = document.getElementById('replit-auth-button');
  if (location.protocol !== 'https:') {
    var err = document.createElement('div');
    err.className = "replit-auth-error";
    err.textContent = 'Replit auth requires https!';
    script.parentNode.insertBefore(err, script);
  }
  button.onclick = function() {
    window.addEventListener('message', authComplete);
    var h = 500;
    var w = 350;
    var left = (screen.width / 2) - ( w / 2);
    var top = (screen.height / 2) - (h / 2);
    var authWindow = window.open(
      'https://repl.it/auth_with_repl_site?domain='+location.host,
      '_blank',
      'modal =yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left)
    function authComplete(e) {
      if (e.data !== 'auth_complete') {
        return;
      }
      window.removeEventListener('message', authComplete);
      authWindow.close();
      location.replace('/')
    }
  }
  script.parentNode.insertBefore(button, script);
})();