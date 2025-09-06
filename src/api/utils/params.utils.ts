import environment from '../../environment';
import type { Methods } from '../models/Methods';
import type { Params } from '../models/Params';

export class ParamsUtils {
  public static setParams<Method extends Methods>(
    method: Method,
    params: Params[Method]
  ) {
    return {
      api_key: environment.api_key,
      method,
      format: 'json',
      ...params,
    };
  }
}
