function initshader() {
    // Lógica de inicialização do WebGL
    const canvas = document.getElementById('webgl-canvas');
    const gl = canvas.getContext('webgl2');
  
    if (!gl) {
      console.error('Seu navegador não suporta WebGL 2.');
      return null;
    }
  
    // Lógica adicional de inicialização do shader
  
    return gl;
  }
  
  function createControl() {
    // Lógica para criar controles do WebGL
    // Por exemplo, manipulação de câmera, luzes, etc.
  }
  
// script.js

const fantasma = document.getElementById('fantasma');

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Atualiza a posição do fantasma com base nas coordenadas do mouse
  fantasma.style.left = mouseX + 'px';
  fantasma.style.top = mouseY + 'px';
});
