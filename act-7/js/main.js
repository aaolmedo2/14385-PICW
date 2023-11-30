// Define el Web Component
class CounterComponent extends HTMLElement {
  constructor() {
    super();
    // Estado interno del contador
    this._counterValue = 0;

    // Crear la interfaz del componente
    const shadow = this.attachShadow({ mode: "open" });

    // Contenedor principal
    const container = document.createElement("div");
    container.id = "counter-container";

    // Caja con bordes y título
    const counterBox = document.createElement("div");
    counterBox.id = "counter-box";

    // Título de la caja
    const title = document.createElement("div");
    title.id = "counter-title";
    title.textContent = "Contador";

    // Valor del contador
    this._counterDisplay = document.createElement("div");
    this._counterDisplay.id = "counter-value";
    this._counterDisplay.textContent = this._counterValue;

    // Botones de suma y resta
    const counterButtons = document.createElement("div");
    counterButtons.id = "counter-buttons";

    const addButton = document.createElement("button");
    addButton.textContent = "+";
    addButton.addEventListener("click", () => this._increment());

    const subtractButton = document.createElement("button");
    subtractButton.textContent = "-";
    subtractButton.addEventListener("click", () => this._decrement());

    // Añadir elementos al shadow DOM
    counterBox.appendChild(title);
    counterBox.appendChild(this._counterDisplay);
    counterButtons.appendChild(addButton);
    counterButtons.appendChild(subtractButton);
    counterBox.appendChild(counterButtons);
    container.appendChild(counterBox);

    // Agregar estilos al sombreado (shadow DOM)
    const style = document.createElement("style");
    style.textContent = `
      #counter-container {
        text - align: center;
      margin: 20px auto;
      font-family: Arial, sans-serif;
              }

      #counter-box {
        border: 2px solid blue;
      border-radius: 5px;
      padding: 20px;
      margin-bottom: 20px;
              }

      #counter-title {
        font - size: 1.5em;
      margin-bottom: 10px;
              }

      #counter-value {
        font - size: 4em;
      margin-bottom: 20px;
      animation: count-up 0.5s ease-out;
              }

      #counter-buttons {
        display: flex;
      justify-content: center;
              }


      #counter-buttons button {
        font - size: 2em;
      margin: 0 10px;
      padding: 10px 20px;
      cursor: pointer;
      background-color: blue;
      color: white;
      border: none;
      border-radius: 5px;
              }

      @keyframes count-up {
        from {
        opacity: 0;
      transform: translateY(-20px);
                }
      to {
        opacity: 1;
      transform: translateY(0);
                }
              }
      `;

    // Añadir estilos al sombreado (shadow DOM)
    shadow.appendChild(style);

    // Añadir contenedor principal al sombreado (shadow DOM)
    shadow.appendChild(container);
  }

  // Método para incrementar el contador
  _increment() {
    this._counterValue++;
    this._updateDisplay();
  }

  // Método para decrementar el contador
  _decrement() {
    this._counterValue--;
    this._updateDisplay();
  }

  // Método para actualizar la interfaz con el valor actual del contador
  _updateDisplay() {
    this._counterDisplay.textContent = this._counterValue;
  }
}

// Registrar el componente personalizado
customElements.define("counter-component", CounterComponent);
