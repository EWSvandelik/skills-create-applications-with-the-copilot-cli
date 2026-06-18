// Simple calculator module
// Exports functions and provides a CLI when run directly

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function evaluateExpression(expr) {
  // Allow only digits, whitespace, parentheses, decimal points and +-*/ operators
  if (!/^[0-9+\-*/().\s]+$/.test(expr)) {
    throw new Error('Invalid characters in expression');
  }
  // Use Function to evaluate safely after validation
  // eslint-disable-next-line no-new-func
  return Function(`"use strict"; return (${expr})`)();
}

function evaluatePositional(aStr, op, bStr) {
  const a = Number(aStr);
  const b = Number(bStr);
  if (!Number.isFinite(a) || !Number.isFinite(b)) throw new Error('Invalid number');
  switch (op) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    default: throw new Error('Unsupported operator: ' + op);
  }
}

module.exports = { add, subtract, multiply, divide, evaluateExpression, evaluatePositional };

// CLI
if (require.main === module) {
  const args = process.argv.slice(2);
  try {
    let result;
    if (args.length === 0) {
      console.error('Usage: node calculator.js "2 + 2"  OR  node calculator.js <num> <op> <num>');
      process.exit(2);
    } else if (args.length === 1) {
      result = evaluateExpression(args[0]);
    } else {
      result = evaluatePositional(args[0], args[1], args[2]);
    }
    console.log(result);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}
