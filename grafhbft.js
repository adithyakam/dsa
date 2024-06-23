const bfs = (graph, start) => {
  const vis = new Set();
  const queue = [start];

  while (queue.length !== 0) {
    let node = queue.shift();
    console.log(node, "sss");
    for (const nei of graph[node]) {
      console.log(nei, "nei");

      if (!vis.has(nei)) {
        vis.add(nei);
        queue.push(nei);
      }
    }
  }
  return;
};

const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

bfs(graph, "a");
