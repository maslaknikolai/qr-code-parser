import { getCurrentMigrationName, setCurrentMigrationName } from './currentMigrationName';

import initialMigration from './initialMigration';
import saveParseDateMigration from './saveParseDateMigration';

const migrations = [
  { name: 'initial', migration: initialMigration },
  { name: 'save parse dates', migration: saveParseDateMigration },
];
const lastMigration = migrations[migrations.length - 1];

function migrate() {
  const currentMigrationName = getCurrentMigrationName();

  if (currentMigrationName === lastMigration.name) {
    console.log('data is actual');
    return;
  }

  const nextMigrationIndex = 1 + migrations.findIndex(
    (migrationItem) => migrationItem.name === currentMigrationName,
  );
  const nextMigration = migrations[nextMigrationIndex];

  nextMigration.migration();
  console.log('Migrated:', nextMigration.name);
  setCurrentMigrationName(nextMigration.name);

  migrate();
}

migrate();
