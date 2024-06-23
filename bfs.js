const bfs = (root) => {
  if (root === null) return null;
  const val = [];
  const queue = [];

  while (queue.length != 0) {
    let node = queue.shift();
    val.push(node);

    if (node.left) queue.push(node.left);
    if (node.rigth) queue.push(node.rigth);
  }

  return val;
};
