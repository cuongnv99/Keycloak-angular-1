import {TranslateService} from '@ngx-translate/core';

export interface ResultHandlerInterface {

  readonly loading: boolean;
  failed: boolean;
  success: boolean;
  data: boolean;
  error: boolean;

  setResponseParser(parser: (data: any) => any): void;

  startRequest(): void;

  finishRequest(): void;

  onResponse(response: any, translate: TranslateService): void;

  onError(error: any): void;

}
