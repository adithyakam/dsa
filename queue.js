class queue {
  constructor() {
    this.que = [];
  }

  enq(data) {
    this.que.push(data);
  }

  deq() {
    this.que.shift();
  }

  peek() {
    this.que[0];
  }

  print() {
    this.que.map((ele) => console.log(ele));
  }
}

let q = new queue();

q.enq(3);
q.enq(4);
q.enq(5);
q.deq();

q.print();
