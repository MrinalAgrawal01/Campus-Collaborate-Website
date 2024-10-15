//image default
function setDefaultImage() {
    document.querySelector("img").src = "default.jpg";
  }

//por delete
document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector('#singlepor');
    list.addEventListener('click', (e) => {
      if(e.target.classList.contains('deletepor')){
        const container = e.target.closest('.por-container');
        container.parentNode.removeChild(container);
      }
    });
});

//skill delete
document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector('#singleskill');
    list.addEventListener('click', (e) => {
      if(e.target.classList.contains('deleteskill')){
        const container = e.target.closest('.skill-container');
        container.parentNode.removeChild(container);
      }
    });
});


//project delete
document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector('#singleproject');
    list.addEventListener('click', (e) => {
      if(e.target.classList.contains('deleteproject')){
        const container = e.target.closest('.project-container');
        container.parentNode.removeChild(container);
      }
    });
});