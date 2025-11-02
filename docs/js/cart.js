const plusBtns = document.querySelectorAll('.plus');
const minusBtns = document.querySelectorAll('.minus');

plusBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.previousElementSibling;
    input.value = parseInt(input.value) + 1;
  });
});

minusBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.nextElementSibling;
    if (parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
  });
});
