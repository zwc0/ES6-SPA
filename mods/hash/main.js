var content=e=>{
  e=e||'home';
  let main=document.getElementsByTagName('main')[0];
  main.classList.add('loading');
  if(e.startsWith('import')){
    import(`./pages/${e}.c`)
    .then(e=>{
      document.title='title - '+e.t;
      main.innerHTML=e.c;
    });
  }else{
    fetch(`./pages/${e}.c`)
    .then(e=>{
      if(!e.ok||e.url=='(homeurl)'){throw Error('')}
      return e.text()
    })
    .then(e=>document.getElementsByTagName('main')[0].innerHTML=e)
    .catch(e=>location.hash='');
    document.title=`title - ${location.hash.slice(1).split('/').slice(-1)[0]}`;
  };
  document.body.scrollIntoView();
  main.classList.remove('loading');
};
window.onhashchange=()=>content(location.hash.slice(1));
content(location.hash.slice(1));