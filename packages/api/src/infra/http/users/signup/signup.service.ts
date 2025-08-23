import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { repositories } from '../../../../domain/repository';
import { ISignup } from './signup.dto';
import { Plain } from '../../../../domain/constants/plan';
import { permission } from '../../../../domain/constants/permission';
import { Logger } from '../../../../domain/libs';

@Injectable()
export class SignupService {
  constructor() {}

  async signup(body: ISignup, logger: Logger) {
    const getRepository = await repositories.getRepositoryPostgres();

    const createCompany = await getRepository.company.create({
      razao_social: body.nome_empresa,
      documento: body.documento_empresa,
      plano: Plain.free,
    });

    const companyUuid = createCompany.uuid;

    if (!companyUuid) {
      const message = 'Erro ao cadastrar empresa, verifique os dados';
      logger.log(message);
      throw new UnprocessableEntityException(message);
    }

    const findUser = await getRepository.users.findOne({
      email: body.email,
    });

    if (findUser) {
      const error = 'Usuário já existe';
      logger.log(error);
      throw new UnprocessableEntityException(error);
    }

    const createUser = await getRepository.users.create({
      email: body.email,
      senha: body.senha,
      ativo: true,
      empresa_uuid: companyUuid,
      permissao: permission.default,
    });

    if ((body as any).debug) return createUser;

    return {
      signup: true,
    };
  }
}
