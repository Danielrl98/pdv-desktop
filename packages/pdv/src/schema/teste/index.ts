import mongoose from "../../config";

const entitiesSchema = new mongoose.Schema({
  entity_type: {
    type: "string",
  },
  name: {
    type: "string",
  },
  surname: {},
  company_name: {},
  trade_name: {},
  document: {
    type: "string",
  },
  state_registration: {},
  municipal_inscription: {},
  type: {},
  duns_number: {},
  id_number: {},
  id_issuer: {},
  id_issuer_state: {},
  id_issuer_date: {},
  voter_id: {},
  lawyer_id: {},
  lawyer_state: {},
  lawyer_type: {},
  gender: {
    type: "string",
  },
  birthdate: {
    type: "object",
    properties: {
      $date: {
        type: "object",
        properties: {
          $numberLong: {
            type: "string",
          },
        },
        required: ["$numberLong"],
      },
    },
    required: ["$date"],
  },
  birthstate: {},
  birthplace: {},
  nationality: {},
  naturalness: {},
  marital_status: {},
  mother_name: {},
  father_name: {},
  website: {},
  url: {},
  content: {},
  html_content: {},
  text: {},
  data: {
    type: "object",
    properties: {
      rede_cnpj: {},
      pdpj: {},
      datajud: {},
      comunica: {},
      oab: {},
      receitaws: {},
      speedio: {},
      brasilapi: {},
      pdpj_pessoas: {
        type: "object",
        properties: {
          id: {},
          tipoPessoa: {
            type: "string",
          },
          estrangeiro: {
            type: "boolean",
          },
          email: {},
          ativo: {},
          nome: {
            type: "string",
          },
          nomeSocial: {
            type: "string",
          },
          cpf: {
            type: "string",
          },
          nomeMae: {
            type: "string",
          },
          nomePai: {},
          sexo: {
            type: "string",
          },
          dataNascimento: {
            type: "string",
          },
          dataObito: {},
          interditado: {},
          gravidaLactante: {},
          dataProvavelParto: {},
          anoObito: {
            type: "number",
          },
        },
        required: [
          "id",
          "tipoPessoa",
          "estrangeiro",
          "email",
          "ativo",
          "nome",
          "nomeSocial",
          "cpf",
          "nomeMae",
          "nomePai",
          "sexo",
          "dataNascimento",
          "dataObito",
          "interditado",
          "gravidaLactante",
          "dataProvavelParto",
          "anoObito",
        ],
      },
    },
    required: [
      "rede_cnpj",
      "pdpj",
      "datajud",
      "comunica",
      "oab",
      "receitaws",
      "speedio",
      "brasilapi",
      "pdpj_pessoas",
    ],
  },
  metadata: {
    type: "object",
    properties: {},
    required: [],
  },
  priority: {
    type: "number",
  },
  completed: {
    type: "number",
  },
  properties: {
    type: "object",
    properties: {
      request_id: {},
      request_date: {},
      request_status: {},
      request_retries: {
        type: "number",
      },
      request_errors: {
        type: "number",
      },
      response_id: {},
      response_date: {},
      response_status: {},
      response_errors: {
        type: "number",
      },
    },
    required: [
      "request_id",
      "request_date",
      "request_status",
      "request_retries",
      "request_errors",
      "response_id",
      "response_date",
      "response_status",
      "response_errors",
    ],
  },
  created_at: {
    type: "object",
    properties: {
      $date: {
        type: "string",
      },
    },
    required: ["$date"],
  },
  updated_at: {
    type: "object",
    properties: {
      $date: {
        type: "string",
      },
    },
    required: ["$date"],
  },
  "data.pdpj_pessoas": {
    type: "object",
    properties: {
      id: {},
      tipoPessoa: {
        type: "string",
      },
      estrangeiro: {
        type: "boolean",
      },
      email: {},
      ativo: {},
      nome: {
        type: "string",
      },
      nomeSocial: {
        type: "string",
      },
      cpf: {
        type: "string",
      },
      nomeMae: {
        type: "string",
      },
      nomePai: {},
      sexo: {
        type: "string",
      },
      dataNascimento: {
        type: "string",
      },
      dataObito: {},
      interditado: {},
      gravidaLactante: {},
      dataProvavelParto: {},
      anoObito: {
        type: "number",
      },
    },
    required: [
      "id",
      "tipoPessoa",
      "estrangeiro",
      "email",
      "ativo",
      "nome",
      "nomeSocial",
      "cpf",
      "nomeMae",
      "nomePai",
      "sexo",
      "dataNascimento",
      "dataObito",
      "interditado",
      "gravidaLactante",
      "dataProvavelParto",
      "anoObito",
    ],
  },
  addresses: {
    type: "array",
    items: {},
  },
  attributes: {
    type: "object",
    properties: {
      homonyms: {},
      foreigner: {
        type: "boolean",
      },
      status: {},
      status_date: {},
      active: {},
      active_date: {},
      decease: {},
      decease_date: {},
      decease_year: {},
    },
    required: [
      "homonyms",
      "foreigner",
      "status",
      "status_date",
      "active",
      "active_date",
      "decease",
      "decease_date",
      "decease_year",
    ],
  },
  code: {},
  emails: {
    type: "array",
    items: {},
  },
  facebook: {},
  id: {},
  instagram: {},
  phones: {
    type: "array",
    items: {},
  },
  telegram: {},
  whatsapp: {},
});

export const entities = mongoose.model("entities", entitiesSchema);
