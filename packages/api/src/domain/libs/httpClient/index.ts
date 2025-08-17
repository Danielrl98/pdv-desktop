export interface IHttpParams {
  url: string;
  method: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}

export interface IHttpResult {
  headers: Response["headers"];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
  status: number;
}

export class HttpClient {
  async request(params: IHttpParams): Promise<IHttpResult> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = {
      status: 400,
      body: {},
      headers: {},
    };

    try {
      const response = await fetch(params.url, {
        ...params,
      });

      const resultJson = await response.json();

      result.body = resultJson;
      result.status = response.status;
      result.headers = response.headers;
    } catch (error) {
      result.body = {
        error: error.message,
      };
    }

    return result;
  }
}
