export default class AppStateRegistry {
    static store: any = {};

    static register(newStore:any) {
        AppStateRegistry.store = newStore;
    }
}
