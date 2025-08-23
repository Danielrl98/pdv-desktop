import * as jwt from 'jsonwebtoken';

export type JWTProps = {
  id: number;
  email: string;
  validate: boolean;
  role: 0 | 1;
  createdAt: Date;
  updatedAt: Date;
  iat: number;
  exp: number;
};

export class JWT {
  async createToken(secretKey: string, payload: object, expiresIn = '3d') {
    const options = {
      expiresIn,
      algorithm: 'HS256',
    };

    const token = await this.token(payload, secretKey, options);

    return token;
  }
  private async token(payload: object, secretKey: string, options: any) {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, secretKey, options, (err, token) => {
        if (err) {
          return reject(err);
        }
        return resolve(token);
      });
    });
  }
  async decodeToken(token: string, secretKey: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          return reject(err);
        }
        resolve(decoded);
      });
    });
  }
  async validateToken(token: string, secretKey: string): Promise<JWTProps> {
    let result: any;
    await this.decodeToken(token, secretKey)
      .then((decoded) => {
        result = decoded;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return result;
  }
}

// (async function () {
//   const res = await new JWT().createToken('secret', {
//     email: 'daniel',
//   });

//   console.log(res);
// })();
