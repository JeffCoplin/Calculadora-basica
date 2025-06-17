function agregarValor(valor){
    document.getElementById('pantalla').value += valor;
}

function limpiar(){
    document.getElementById('pantalla').value = '';
}

function calcular(){
    try {
    const resultado = eval(document.getElementById('pantalla').value);
    document.getElementById('pantalla').value = resultado;
  } catch (error) {
    alert('Operación no válida');
    limpiar();
  }
}

document.addEventListener('keydown', function(event) {
  const tecla = event.key;

  if ((tecla >= '0' && tecla <= '9') || ['+', '-', '*', '/', '.'].includes(tecla)) {
    agregarValor(tecla);
  }

  if (tecla === 'Enter') {
    calcular();
  }

  if (tecla === 'Escape') {
    limpiar();
  }

  if (tecla === 'Backspace') {
    borrarUltimo();
  }
});

function borrarUltimo() {
  const pantalla = document.getElementById('pantalla');
  pantalla.value = pantalla.value.slice(0, -1); 
}