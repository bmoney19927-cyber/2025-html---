// 
class Matrix2x2 {
	//
	constructor(values) {
		if (!Array.isArray(values)) {
			throw new TypeError('values must be an array of length 4');
		}
		if (values.length !== 4) {
			throw new RangeError('values array must have length 4');
		}
		this.values = values.slice(); // copy
	}

	get(x, y) {
		if (![0, 1].includes(x) || ![0, 1].includes(y)) {
			throw new RangeError('row and column indices must be 0 or 1');
		}
		const index = x * 2 + y;
		return this.values[index];
	}
    //
	set(x, y, value) {
		if (![0, 1].includes(x) || ![0, 1].includes(y)) {
			throw new RangeError('row and column indices must be 0 or 1');
		}
		const index = x * 2 + y;
		this.values[index] = value;
	}

	//
	clone() {
		return new Matrix2x2(this.values);
	}

	// 
	toString() {
		return `[[${this.values[0]}, ${this.values[1]}],[${this.values[2]}, ${this.values[3]}]]`;
	}
}

// 
function addMatrix(arr, matrix) {
	if (!Array.isArray(arr)) throw new TypeError('arr must be an array');
	if (!(matrix instanceof Matrix2x2)) throw new TypeError('matrix must be a Matrix2x2');
	arr.push(matrix);
	return arr.length - 1; 
}
//
function updateMatrix(arr, index, matrix) {
	if (!Array.isArray(arr)) throw new TypeError('arr must be an array');
	if (!(matrix instanceof Matrix2x2)) throw new TypeError('matrix must be a Matrix2x2');
	if (typeof index !== 'number' || !Number.isInteger(index)) throw new TypeError('index must be an integer');
	if (index < 0 || index >= arr.length) throw new RangeError('index out of bounds');
	arr[index] = matrix;
	return true;
}

function removeMatrix(arr, index) {
	if (!Array.isArray(arr)) throw new TypeError('arr must be an array');
	if (typeof index !== 'number' || !Number.isInteger(index)) throw new TypeError('index must be an integer');
	if (index < 0 || index >= arr.length) throw new RangeError('index out of bounds');
	const removed = arr.splice(index, 1)[0];
	return removed;
}
//
//
if (require.main === module) {
	const a = new Matrix2x2([1, 2, 3, 4]);
	const b = new Matrix2x2([5, 6, 7, 8]);
	console.log('a:', a.toString());
	console.log('a[0,0]:', a.get(0, 0));
	console.log('a[1,0]:', a.get(1, 0));

	const arr = [];
	console.log('add a at index', addMatrix(arr, a));
	console.log('add b at index', addMatrix(arr, b));
	console.log('arr length:', arr.length);

	const c = new Matrix2x2([9, 9, 9, 9]);
	updateMatrix(arr, 1, c);
	console.log('after update index 1:', arr[1].toString());

	const removed = removeMatrix(arr, 0);
	console.log('removed:', removed.toString());
	console.log('final arr:', arr.map(m => m.toString()));
}

