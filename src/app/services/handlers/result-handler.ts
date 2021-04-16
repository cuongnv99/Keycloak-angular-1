import { isDevMode } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ResultHandlerInterface } from './result-handler.interface';

export class ResultHandler implements ResultHandlerInterface {

  private _loading = false;
  private _success = true;
  private _data: any;
  private _error: any;
  private _parser: (data: any) => any;

  get loading(): boolean {
    return this._loading;
  }

  get failed(): boolean {
    return !this._loading && !this._success;
  }

  get success(): boolean {
    return !this._loading && this._success;
  }

  get data(): any {
    return this._data;
  }

  get error(): any {
    return this._error;
  }

  setResponseParser(parser: (data: any) => any) {
    this._parser = parser;
  }

  startRequest() {
    this._loading = true;
  }

  finishRequest() {
    this._loading = false;
  }

  onResponse(response: any, translate: TranslateService) {
    try {
      const result = this._parser ? this._parser(response) : null;
      this._data = (result != null) ? result : response;
      this._success = true;
    } catch (exception) {
      if (isDevMode()) {
        console.error(exception);
      }
      this._error = {
        status: response.status,
        message: ''
        error: exception
      };
      this._success = false;
    }
  }

  onError(error: any) {
    this._error = error;
    this._success = false;
  }

}
