// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
// Helper: read a matrix from the user
function readMatrix(name, rows, cols) {
    const matrix = [];
    console.log(`Enter matrix ${name} (${rows} x ${cols}):`);
    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `)
                              .split(" ")
                              .map(Number);
        matrix.push(row);
    }
    return matrix;
}

// Helper: display a matrix in grid format
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join("\t"));
    }
}

// PART A: Transpose
function transposeMatrix() {
    const rows = readlineSync.questionInt("Enter number of rows: ");
    const cols = readlineSync.questionInt("Enter number of columns: ");
    const matrix = readMatrix("", rows, cols);

    const transposed = [];
    for (let j = 0; j < cols; j++) {
        const newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        transposed.push(newRow);
    }

    console.log("\nOriginal Matrix:");
    printMatrix(matrix);
    console.log("\nTransposed Matrix:");
    printMatrix(transposed);
}

// PART B: Add Two Matrices
function addMatrices() {
    const rows = readlineSync.questionInt("Enter number of rows: ");
    const cols = readlineSync.questionInt("Enter number of columns: ");

    const A = readMatrix("A", rows, cols);
    const B = readMatrix("B", rows, cols);

    const result = [];
    for (let i = 0; i < rows; i++) {
        const newRow = [];
        for (let j = 0; j < cols; j++) {
            newRow.push(A[i][j] + B[i][j]);
        }
        result.push(newRow);
    }

    console.log("\nMatrix A + Matrix B =");
    printMatrix(result);
}

// PART C: Multiply Two Matrices
function multiplyMatrices() {
    const m = readlineSync.questionInt("Enter rows of A: ");
    const n = readlineSync.questionInt("Enter columns of A (= rows of B): ");
    const p = readlineSync.questionInt("Enter columns of B: ");

    const A = readMatrix("A", m, n);
    const B = readMatrix("B", n, p);

    const result = [];
    for (let i = 0; i < m; i++) {
        const newRow = [];
        for (let j = 0; j < p; j++) {
            let sum = 0;
            for (let k = 0; k < n; k++) {
                sum += A[i][k] * B[k][j];
            }
            newRow.push(sum);
        }
        result.push(newRow);
    }

    console.log("\nMatrix A x Matrix B =");
    printMatrix(result);
}

// MAIN
function main() {
    console.log("\n--- PART A: Transpose ---");
    transposeMatrix();

    console.log("\n--- PART B: Add Two Matrices ---");
    addMatrices();

    console.log("\n--- PART C: Multiply Two Matrices ---");
    multiplyMatrices();
}

main();
