# [participant/EWSvandelik] Calculator app

## Feature Description

A Node.js CLI calculator app that performs basic arithmetic operations: addition, subtraction, multiplication, and division. The calculator should be implemented in `calculator.js` and expose a simple command-line interface for evaluating expressions or taking positional arguments.

## Use Case

Developers and learners need a small, dependency-free CLI tool to perform quick arithmetic in scripts or from the terminal without opening a REPL or separate calculator application.

## Proposed Solution

- Implement `calculator.js` exporting a function and/or CLI that accepts either:
  - A single quoted expression (e.g., `"2 + 2 * 3"`)
  - Or positional arguments: `<operand1> <operator> <operand2>` (e.g., `4 * 5`)
- Support operations: addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`).
- Validate inputs and handle division by zero with a clear error message and non-zero exit code.
- Include usage examples in README and add simple tests if the repository uses a test runner.

## Additional Context

- File to implement: `calculator.js` at repository root or in a suitable `bin/` folder.
- Example usage:
  - `node calculator.js "(2 + 3) * 4"`
  - `node calculator.js 6 / 3`

Please assign the enhancement label and implement the feature in `calculator.js`.
