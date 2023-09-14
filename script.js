  function animatableLoaded() {
    document.querySelector("body").classList.remove("d-none");
  }
  if (customElements) {
    customElements.whenDefined("animatable-component").then(animatableLoaded);
  } else animatableLoaded();