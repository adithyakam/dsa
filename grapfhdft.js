const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

const dft = (graph, start, vis = new Set()) => {
  if (!vis.has(start)) {
    vis.add(start);
    console.log(start, "sss");
    for (const nei of graph[start]) {
      console.log(nei, "nei");

      dft(graph, nei, vis);
    }
  }
  console.log(vis);
  return vis;
};

dft(graph, "a");
