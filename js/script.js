// smooth scrolls to projects section
if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}


// reveals dropdown navigation menu
var tglbtn = document.getElementById("nav-toggle");
var navlst = document.getElementById("nav-list")

tglbtn.addEventListener('click', () => {
  navlst.classList.toggle("active");
});