document.addEventListener("DOMContentLoaded", () => {
  // Selección de elementos
  const pauseButton = document.getElementById("pause-btn");
  const resumeButton = document.getElementById("resume-btn");
  const faceElement = document.querySelector(".face");

  // Variable para rastrear el estado de la animación
  let isPaused = false;

  // Función para pausar animaciones
  const toggleAnimations = (state) => {
    const allAnimatedElements = faceElement.querySelectorAll("*");
    allAnimatedElements.forEach((element) => {
      element.style.animationPlayState = state;
    });
    isPaused = state === "paused";
    console.log(
      state === "paused" ? "Pausando animaciones" : "Reanudando animaciones"
    );
  };

  // Eventos de los botones
  pauseButton.addEventListener("click", () => {
    if (!isPaused) toggleAnimations("paused");
  });

  resumeButton.addEventListener("click", () => {
    if (isPaused) toggleAnimations("running");
  });
});

// --------------------------------------------
// document.addEventListener("DOMContentLoaded", () => {
//   const pauseButton = document.getElementById("pause-btn");
//   const resumeButton = document.getElementById("resume-btn");

//   // Agregar logs para verificar funcionalidad de botones
//   pauseButton.addEventListener("click", () => {
//     console.log("Botón de pausa presionado");
//   });

//   resumeButton.addEventListener("click", () => {
//     console.log("Botón de reanudar presionado");
//   });
// });
