export type Country = {
  independent: boolean;
  capital: string[];
  languages: {
    [key: string]: string;
  };
  currencies: {
    [key: string]: string;
  };
  cca3: string;
  borders: string[];
  name: {
    common: string;
    official?: string;
  };
  population: number;
  area?: number;
  region: string;
  subRegion: string;
  flags: {
    svg: string;
  };
};
