
  
  const iconRowImgs = document.querySelectorAll('.icon-row img');
  const aboutMeLis = document.querySelectorAll('.about-me li');
  
  iconRowImgs.forEach((img) => {
    img.addEventListener('mouseover', () => {
      const imgDataId = img.getAttribute('data-id');
      const correspondingLi = document.querySelector(`.about-me li[data-id="${imgDataId}"]`);
      if (correspondingLi){
        correspondingLi.classList.add('hovered');
        console.log(correspondingLi)
    } else { console.log ("doesn't exist")}
      

    });
  
    img.addEventListener('mouseout', () => {
      const imgDataId = img.getAttribute('data-id');
      const correspondingLi = document.querySelector(`.about-me li[data-id="${imgDataId}"]`);
      if (correspondingLi){
        correspondingLi.classList.remove('hovered');

      }
      else { console.log ("doesn't exist")}
    });
  });
  
  