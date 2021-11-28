export function checkForIndexedDb() {
    if (!window.indexedDB) {
        console.log("Your browser does not support IndexedDB");
        return false;
    }
    return true;
}

