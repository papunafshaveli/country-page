export type Dimensions = {
  width: number;
  height: number;
};

export const getDimensions = (): Dimensions => {
  const height = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  const width = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  return {
    width,
    height,
  };
};
