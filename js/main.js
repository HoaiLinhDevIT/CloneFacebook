// Popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

// GenderSelect
// if(window.location.pathname = "/") {
    const radioBtn1 = document.querySelector("#flexRadioDefault1");
    const radioBtn2 = document.querySelector("#flexRadioDefault2");
    const radioBtn3 = document.querySelector("#flexRadioDefault3");
    const GenderSelect = document.querySelector("#genderSelect");

    radioBtn1.addEventListener("change", ()=> {
        GenderSelect.classList.add("d-none");
    });
    radioBtn2.addEventListener("change", ()=> {
        GenderSelect.classList.add("d-none");
    });
    radioBtn3.addEventListener("change", ()=> {
        GenderSelect.classList.remove("d-none");
    });
// }