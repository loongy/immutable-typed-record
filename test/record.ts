import { Record } from "../src/record";

class Point extends Record({
  x: 0,
  y: 0
}) {
  x: number;
  y: number;
}

const point = new Point({ x: 3.14, y: 42 });

