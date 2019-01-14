export const rowsAsArray = (x: { [key: string]: object }) => {
  return Array.from(Object.keys(x)).map((key) => {
    return { ...x[key] };
  });
};
