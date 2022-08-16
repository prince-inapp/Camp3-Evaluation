document.addEventListener('DOMContentLoaded', function() {
    const options  = {
        'edge': 'left',
        'closeOnClick': true
        
    };
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });