//the function show the clicked page, hide others page
//input the clicked item
function showCorrectPage(targetPage) {
  const home = document.getElementById('main')
  const menu = document.getElementById('menu')
  const contact = document.getElementById('contact-us')
  console.log(targetPage.id)

  home.style.display = 'none'; 
  menu.style.display = 'none'; 
  contact.style.display = 'none'; 
  
  if (targetPage.id == 'home-page') {
    home.style.display = 'block';
  }
  else if (targetPage.id == 'menu-page') {
    menu.style.display = 'block';
  }
  else {
    contact.style.display = 'block';
  }

}


//transform to other page
//input is the page will be transformed to
//output is change the page
function TransformPage(targetPage) {
  console.log('test')
  console.log(targetPage.style)

  if (noNavList(targetPage.id)) {
    console.log('ok')
    showCorrectPage(targetPage) 
  }
}

//the function exclude the clicked object is not the pages
function noNavList(pageId) {
  return pageId != 'nav-list';
}



export default TransformPage;