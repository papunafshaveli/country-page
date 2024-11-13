export type Country = {
  cca3: string;
  name: {
    common: string;
  };
  population: number;
  area?: number;
  region: string;
  flags: {
    svg: string;
  };
};
