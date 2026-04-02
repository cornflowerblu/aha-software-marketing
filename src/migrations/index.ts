import * as migration_20260324_122536 from './20260324_122536';
import * as migration_20260402_062157 from './20260402_062157';

export const migrations = [
  {
    up: migration_20260324_122536.up,
    down: migration_20260324_122536.down,
    name: '20260324_122536',
  },
  {
    up: migration_20260402_062157.up,
    down: migration_20260402_062157.down,
    name: '20260402_062157'
  },
];
