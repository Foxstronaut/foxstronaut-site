const shapeSelect = document.getElementById('shape');
const parameterInputs = document.getElementById('parameter-inputs');
const calculateButton = document.getElementById('calculate');
const outputDiv = document.getElementById('output');
const logList = document.getElementById('log-list');

function createInput(label, id) {
  const inputGroup = document.createElement('div');
  inputGroup.className = 'input-group';
  const labelElement = document.createElement('label');
  labelElement.textContent = label + ':';
  labelElement.setAttribute('for', id);
  const inputElement = document.createElement('input');
  inputElement.type = 'number';
  inputElement.id = id;
  inputGroup.appendChild(labelElement);
  inputGroup.appendChild(inputElement);
  return inputGroup;
}

function updateParameterInputs() {
  parameterInputs.innerHTML = '';
  const selectedShape = shapeSelect.value;
  let inputs = [];

  switch (selectedShape) {
    case 'rectangle':
      inputs = [
        createInput('Length', 'length'),
        createInput('Width', 'width'),
        createInput('Height', 'height')
      ];
      break;
    case 'cylinder':
      inputs = [createInput('Radius', 'radius'), createInput('Height', 'height')];
      break;
    case 'sphere':
      inputs = [createInput('Radius', 'radius')];
      break;
    case 'hemisphere':
      inputs = [createInput('Radius', 'radius')];
      break;
    case 'quarter_sphere':
      inputs = [createInput('Radius', 'radius')];
      break;
    case 'cone':
      inputs = [createInput('Radius', 'radius'), createInput('Height', 'height')];
      break;
    case 'truncated_cone':
      inputs = [
        createInput('Radius 1', 'radius1'),
        createInput('Radius 2', 'radius2'),
        createInput('Height', 'height')
      ];
      break;
    case 'triangle':
      inputs = [createInput('Base', 'base'), createInput('Triangle Height', 'triHeight'), createInput('Prism Height', 'prismHeight')];
      break;
    default:
      break;
  }

  inputs.forEach(input => parameterInputs.appendChild(input));
}

shapeSelect.addEventListener('change', updateParameterInputs);
updateParameterInputs();

calculateButton.addEventListener('click', function () {
  const selectedShape = shapeSelect.value;
  let params = [];
  let result;
  let equation = "";

  switch (selectedShape) {
    case 'rectangle':
      params = [
        parseFloat(document.getElementById('length').value),
        parseFloat(document.getElementById('width').value),
        parseFloat(document.getElementById('height').value)
      ];
      break;
    case 'cylinder':
      params = [
        parseFloat(document.getElementById('radius').value),
        parseFloat(document.getElementById('height').value)
      ];
      break;
    case 'sphere':
      params = [parseFloat(document.getElementById('radius').value)];
      break;
    case 'hemisphere':
      params = [parseFloat(document.getElementById('radius').value)];
      break;
    case 'quarter_sphere':
      params = [parseFloat(document.getElementById('radius').value)];
      break;
    case 'cone':
      params = [
        parseFloat(document.getElementById('radius').value),
        parseFloat(document.getElementById('height').value)
      ];
      break;
    case 'truncated_cone':
      params = [
        parseFloat(document.getElementById('radius1').value),
        parseFloat(document.getElementById('radius2').value),
        parseFloat(document.getElementById('height').value)
      ];
      break;
    case 'triangle':
      params = [parseFloat(document.getElementById('base').value), parseFloat(document.getElementById('triHeight').value), parseFloat(document.getElementById('prismHeight').value)];
      break;
    default:
      break;
  }

  if (params.every(num => !isNaN(num))) {
    switch (selectedShape) {
      case 'rectangle':
        result = rectangularPrismVolume(...params);
        equation = `Volume = length * width * height = ${params[0]} * ${params[1]} * ${params[2]}`;
        break;
      case 'cylinder':
        result = cylinderVolume(...params);
        equation = `Volume = π * radius² * height = π * ${params[0]}² * ${params[1]}`;
        break;
      case 'sphere':
        result = sphereVolume(...params);
        equation = `Volume = (4/3) * π * radius³ = (4/3) * π * ${params[0]}³`;
        break;
      case 'hemisphere':
        result = hemisphereVolume(...params);
        equation = `Volume = (2/3) * π * radius³ = (2/3) * π * ${params[0]}³`;
        break;
      case 'quarter_sphere':
        result = quarterSphereVolume(...params);
        equation = `Volume = (1/3) * π * radius³ = (1/3) * π * ${params[0]}³`;
        break;
      case 'cone':
        result = coneVolume(...params);
        equation = `Volume = (1/3) * π * radius² * height = (1/3) * π * ${params[0]}² * ${params[1]}`;
        break;
      case 'truncated_cone':
        result = truncatedConeVolume(...params);
        equation = `Volume = (1/3) * π * height * (r1² + r1*r2 + r2²) = (1/3) * π * ${params[2]} * (${params[0]}² + ${params[0]}*${params[1]} + ${params[1]}²)`;
        break;
      case 'triangle':
        result = triangularPrismVolume(...params);
        equation = `Volume = 0.5 * base * triangleHeight * prismHeight = 0.5 * ${params[0]} * ${params[1]} * ${params[2]}`;
        break;
      default:
        result = "Unknown shape.";
    }
    outputDiv.textContent = `Volume: ${result}`;
    logCalculation(selectedShape, params, result, equation);
  } else {
    outputDiv.textContent = "Invalid parameters.";
  }
});

function rectangularPrismVolume(length, width, height) {
  return length * width * height;
}

function cylinderVolume(radius, height) {
  return Math.PI * radius * radius * height;
}

function sphereVolume(radius) {
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

function hemisphereVolume(radius) {
  return (2 / 3) * Math.PI * Math.pow(radius, 3);
}

function quarterSphereVolume(radius) {
  return (1 / 3) * Math.PI * Math.pow(radius, 3);
}

function coneVolume(radius, height) {
  return (1 / 3) * Math.PI * radius * radius * height;
}

function truncatedConeVolume(r1, r2, height) {
  return (1 / 3) * Math.PI * height * (r1 * r1 + r1 * r2 + r2 * r2);
}

function triangularPrismVolume(base, height, prismHeight) {
  return 0.5 * base * height * prismHeight;
}

function logCalculation(shape, params, result, equation) {
  const listItem = document.createElement('li');
  listItem.textContent = `${shape}: ${equation} = ${result}`;
  logList.appendChild(listItem);
}