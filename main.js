let formData = {};

const form = document.querySelector('form');
const saveBtn = document.querySelector('.buttonsave');

saveBtn.addEventListener('click', function (event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
});

if (localStorage.getItem('formData')){
    formData = JSON.parse(localStorage.getItem('formData'));
    // console.log(formData);

    for (let key in formData){
        form.elements[key].value = formData[key];
    }
}


