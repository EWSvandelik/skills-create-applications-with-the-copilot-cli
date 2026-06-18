const calc = require('./calculator');

const examples = [
  {input: '2 + 3', expected: 5},
  {input: '10 - 4', expected: 6},
  {input: '45 * 2', expected: 90},
  {input: '20 / 5', expected: 4},
];

let allPassed = true;

console.log('Running calculator examples:\n');
for (const ex of examples) {
  try {
    const outExpr = calc.evaluateExpression(ex.input);
    const parts = ex.input.trim().split(/\s+/);
    const outPos = calc.evaluatePositional(parts[0], parts[1], parts[2]);
    const okExpr = Object.is(outExpr, ex.expected);
    const okPos = Object.is(outPos, ex.expected);
    console.log(`${ex.input} => expression: ${outExpr} ${okExpr ? '✓' : '✗ (expected ' + ex.expected + ')'}`);
    console.log(`${ex.input} => positional: ${outPos} ${okPos ? '✓' : '✗ (expected ' + ex.expected + ')'}`);
    if (!okExpr || !okPos) allPassed = false;
  } catch (err) {
    console.log(`${ex.input} => Error: ${err.message}`);
    allPassed = false;
  }
  console.log('');
}

if (allPassed) {
  console.log('All examples passed.');
  process.exit(0);
} else {
  console.log('Some examples failed.');
  process.exit(1);
}
