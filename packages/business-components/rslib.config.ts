import { getConfig } from '../../rslib.config';

export default getConfig({
  source: {
    entry: {
      index: ['./src/**'],
    },
    tsconfigPath: './tsconfig.build.json',
  },
});
