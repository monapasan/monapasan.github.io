window.onload = function() {
  var link = document.createElement('a');
  link.href = 'http://google.com';
  var imageT = document.createElement('img');
  link.target = '_blank';
  imageT.setAttribute('src', srcInitialisation());
  imageT.setAttribute('alt', '');
  imageT.setAttribute('border', 0);
  link.appendChild(imageT);
  function srcInitialisation() {
    return 'http://www.crn.com/ckfinder/userfiles/images/crn/images/whitebox400.jpg';
  };
  document.body.style.marginTop = '0px';
  document.body.style.marginLeft = '0px';
  document.body.appendChild(link)
};
