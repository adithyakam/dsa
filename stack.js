class stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
  }

  pop() {
    this.arr.pop();
  }

  peek() {
    this.arr[this.arr.length - 1];
  }
  isEmpty() {
    return this.arr.length === 0;
  }

  size() {
    return this.arr.length;
  }

  clear() {
    return (this.arr = []);
  }

  contains(data) {
    return this.arr.includes(data);
  }

  print() {
    this.arr.map((ele) => console.log(ele));
  }
}

const stak = new stack();

stak.push(4);
stak.push(5);
stak.pop();
stak.print();
