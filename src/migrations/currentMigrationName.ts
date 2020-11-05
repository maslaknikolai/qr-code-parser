const STORE_KEY = 'lastMigrationName';

export function getCurrentMigrationName() {
  return localStorage.getItem(STORE_KEY);
}

export function setCurrentMigrationName(lastMigrationName: string) {
  return localStorage.setItem(STORE_KEY, lastMigrationName);
}
