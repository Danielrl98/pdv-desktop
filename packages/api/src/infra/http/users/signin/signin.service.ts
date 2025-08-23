import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ISignin } from './signin.dto';
import { Logger } from '../../../../domain/libs';
import { repositories } from '../../../../domain/repository';
import { JWT } from '../../../../domain/libs/jwt';
import { getConfigEnv } from '../../../../infra/config';
import { Plain } from '../../../../domain/constants/plan';

@Injectable()
export class SigninService {
  private jwt = new JWT();
  constructor() {}

  async signin(body: ISignin, logger: Logger) {
    const getRepository = await repositories.getRepositoryPostgres();

    const findUser = await getRepository.users.findOne({
      email: body.email,
      senha: body.senha,
    });

    if (!findUser) {
      const error = 'Email ou senha inválidos';
      logger.log(error);
      throw new UnauthorizedException(error);
    }

    let expiredIn = '3d';

    const findCompany = await getRepository.company.findOne({
      uuid: findUser.empresa_uuid,
    });

    if (findCompany?.plano === Plain.free) {
      expiredIn = '1d';

      const verifyDate = this.verifyExpiredPlan(new Date(findUser.createdAt));

      if (verifyDate === true) {
        const error = 'Plano expirado, entre em contato com o administrador';
        logger.log(error);
        throw new UnauthorizedException(error);
      }
    }

    const accessToken = await this.jwt.createToken(getConfigEnv('SECRET_JWT'), {
      email: body.email,
      empresa_id: findUser.empresa_uuid,
      usuario_id: findUser.uuid,
      expiredIn,
      plano: findCompany?.plano,
    });

    return {
      accessToken,
      expiredIn,
    };
  }

  private verifyExpiredPlan(dateToCheck: Date) {
    const now = new Date();
    const diffMs = dateToCheck.getTime() - now.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    return diffDays > 3;
  }
}
