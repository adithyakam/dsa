const dfs = (root) => {
  if (!root) return null;

  return root.key + dfs(root.left) + dfs(root.right);
};

const dfsRec = (root) => {
  if (root === null) {
    return; // return a message or empty
  }
  const values = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.key);

    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
  return values;
};
