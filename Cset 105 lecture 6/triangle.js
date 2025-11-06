class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
//
class Line {
  constructor(startPoint, endPoint) {
    this.start = startPoint;
    this.end = endPoint;
  }

  // 
  length() {
    return Math.sqrt(
      Math.pow(this.end.x - this.start.x, 2) +
      Math.pow(this.end.y - this.start.y, 2)
    );
  }
}

// 
class Triangle {
  constructor(p1, p2, p3) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }

  // 
  sides() {
    return [
      new Line(this.p1, this.p2).length(),
      new Line(this.p2, this.p3).length(),
      new Line(this.p3, this.p1).length()
    ];
  }

  // 
  isValid() {
    const [a, b, c] = this.sides();
    return (a + b > c) && (b + c > a) && (c + a > b);
  }

  // 
  perimeter() {
    if (!this.isValid()) return NaN;
    const [a, b, c] = this.sides();
    return a + b + c;
  }

  // 
  area() {
    if (!this.isValid()) return NaN;
    return Math.abs(
      (this.p1.x * (this.p2.y - this.p3.y) +
       this.p2.x * (this.p3.y - this.p1.y) +
       this.p3.x * (this.p1.y - this.p2.y)) / 2
    );
  }
}
//
const t1 = new Triangle(
  new Point(0, 0),
  new Point(4, 0),
  new Point(0, 3)
);
//
const t2 = new Triangle(
  new Point(0, 0),
  new Point(2, 0),
  new Point(4, 0)
);

console.log("=== Triangle 1 ===");
console.log("Valid:", t1.isValid());
console.log("Perimeter:", t1.perimeter());
console.log("Area:", t1.area());

console.log("\n=== Triangle 2 ===");
console.log("Valid:", t2.isValid());
console.log("Perimeter:", t2.perimeter());
console.log("Area:", t2.area());

