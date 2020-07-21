/* eslint-disable linebreak-style */
/* eslint-disable indent */
const togglePopup = () => {
  const popup = document.querySelector('.popup');
  const popupContent = document.querySelector('.popup-content');
  const popupBtn = document.querySelectorAll('.popup-btn');

  let count = -200;


  popup.addEventListener('click', event => {
    let target = event.target;
    count = -200;
    if (target.classList.contains('popup-close')) {
      popup.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popup.style.display = 'none';
      }
    }
  });

   const openPopup = () => {
      if (document.documentElement.clientWidth <= 768) {
        popupContent.style.transform = `translate(0)`;
          return;
      }

      const requestId = requestAnimationFrame(openPopup);
      count += 5;
      popupContent.style.transform = `translate(${count}%)`;
      if (count >= 0) {
          cancelAnimationFrame(requestId);

      }
  };

  popupBtn.forEach(elem => {
      elem.addEventListener('click', () => {
          popup.style.display = 'block';
          openPopup();
      });
  });
};

export default togglePopup;
