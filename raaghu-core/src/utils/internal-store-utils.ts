class Store {
  private _accessToken: string | null = null;
  private _languages: any = {};
  private _localization: any = {};
  private _auth: any = {};
  private _callbacks: (() => void)[] = [];

  public set accessToken(token: string | null) {
    this._accessToken = token;
    this.notify();
  }

  public get accessToken() {
    return this._accessToken;
  }

  public set languages(config: any) {
    this._languages = config;
    this.notify();
  }

  public get languages() {
    return this._languages;
  }

  public set localization(localization: any) {
    this._localization = localization ;
    this.notify();
  }

  public get localization() {
    return this._localization;
  }

  public set auth(auth: any) {
    this._auth = auth ;
    this.notify();
  }

  public get auth() {
    return this._auth;
  }

  public subscribe(callback: () => void) {
    this._callbacks.push(callback);
  }

  public unsubscribe(callback: () => void) {
    this._callbacks = this._callbacks.filter(cb => cb !== callback);
  }

  public notifySubscribers() {
    this._callbacks.forEach(callback => callback());
  }

  private notify() {
    this._callbacks.forEach(callback => callback());
  }
}

const store = new Store();

export { store };