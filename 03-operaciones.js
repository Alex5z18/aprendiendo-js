<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Calculadora</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .calculator {
      background: #fff;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      width: 260px;
    }
    .display {
      width: 100%;
      height: 50px;
      font-size: 1.5rem;
      text-align: right;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-bottom: 15px;
    }
    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }
    button {
      padding: 15px;
      font-size: 1.2rem;
      border: none;
      border-radius: 8px;
      background: #e0e0e0;
      cursor: pointer;
      transition: background 0.2s;
    }
    button:hover {
      background: #d0d0d0;
    }
    .operator {
      background: #ff9800;
      color: #fff;
    }
    .operator:hover {
      background: #e68900;
    }
    .equal {
      background: #4caf50;
      color: #fff;
      grid-column: span 2;
    }
    .equal:hover {
      background: #3e8e41;
    }
    .clear {
      background: #f44336;
      color: #fff;
    }
    .clear:hover {
      background: #d32f2f;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <input type="text" class="display" id="display" disabled>
    <div class="buttons">
      <button class="clear" onclick="clearDisplay()">C</button>
      <button onclick="appendValue('/')">÷</button>
      <button onclick="appendValue('*')">×</button>
      <button onclick="appendValue('-')">−</button>

      <button onclick="appendValue('7')">7</button>
      <button onclick="appendValue('8')">8</button>
      <button onclick="appendValue('9')">9</button>
      <button onclick="appendValue('+')">+</button>

      <button onclick="appendValue('4')">4</button>
      <button onclick="appendValue('5')">5</button>
      <button onclick="appendValue('6')">6</button>
      <button onclick="appendValue('.')">.</button>

      <button onclick="appendValue('1')">1</button>
      <button onclick="appendValue('2')">2</button>
      <button onclick="appendValue('3')">3</button>
      <button class="equal" onclick="calculate()">=</button>

      <button onclick="appendValue('0')" style="grid-column: span 2;">0</button>
    </div>
  </div>

  <script>
    let display = document.getElementById('display');

    function appendValue(val) {
      display.value += val;
    }

    function clearDisplay() {
      display.value = '';
    }

    function calculate() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    }
  </script>
</body>
</html>
