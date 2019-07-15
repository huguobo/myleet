(function () {
  var protocol = window.location.protocol;
  if (protocol === 'https') {
    var oMeta = document.createElement('meta');
    oMeta.setAttribute('http-equiv', 'Content-Security-Ploicy');
    oMeta.content = 'upgrade-insecure-requests';
    document.getElementsByTagName('head')[0].appendChild(oMeta);
  }
}());
