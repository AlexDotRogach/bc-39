export default function formControl() {
  const actionBtn = document.querySelector(".control-btn");

  actionBtn.addEventListener("click", onClickControl);

  function onClickControl(e) {
    if (e.target.hasAttribute("control")) {
      const { classList: idForm } = e.target;

      const formElement = document.querySelector(`#${idForm}`);

      hideForms();
      toggleClass("show", formElement);
    }

    if (e.target.classList.contains("hide")) {
      hideForms();
    }
  }
}

function toggleClass(className, form) {
  const status = className === "show" ? "hide" : "show";

  form.classList.remove(status);
  form.classList.add(className);
}

function hideForms() {
  const forms = document.querySelectorAll("[data-control]");

  forms.forEach((form) => {
    form.classList.remove("show");
    form.classList.add("hide");
  });
}

// v 2
// export default function formControl() {
//   const actionBtn = document.querySelector(".control-btn");
//   let formElement = "";

//   actionBtn.addEventListener("click", onClickControl);

//   function onClickControl(e) {
//     if (e.target.hasAttribute("control")) {
//       const { classList: idForm } = e.target;

//       if (formElement) toggleClass("hide", formElement);

//       formElement = document.querySelector(`#${idForm}`);

//       toggleClass("show", formElement);
//     }

//     if (e.target.classList.contains("hide")) {
//       toggleClass("hide", formElement);
//     }
//   }
// }

// function toggleClass(className, form) {
//   const status = className === "show" ? "hide" : "show";

//   form.classList.remove(status);
//   form.classList.add(className);
// }

// function hideForms() {
//   const forms = document.querySelectorAll("[data-control]");

//   forms.forEach((form) => {
//     form.classList.remove("show");
//     form.classList.add("hide");
//   });
// }
