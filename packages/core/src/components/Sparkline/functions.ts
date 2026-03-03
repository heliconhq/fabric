function getX(value, length) {
  return (value / (length - 1)) * length - 1;
}

function getY(value: number, height: number, min: number) {
  return height - (height * (value / height) - min);
}

export default function getStroke(
  values: number[],
  height: number,
  min: number
) {
  const d = values.reduce(
    (acc, value, i) =>
      `${acc} L${getX(i, values.length)},${getY(value, height, min)}`,
    ''
  );

  return {
    stroke: `
          M${getX(0, values.length)},${getY(values[0], height, min)}
          ${d}
        `,
    fill: `
          M${getX(0, values.length)},${getY(0, height, min)}
          ${d}
          L${getX(values.length - 1, values.length)},${getY(0, height, min)}
        `,
  };
}
