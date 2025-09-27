# Configuração do SQLite3 no Electron

Este documento explica como configurar o SQLite3 para funcionar corretamente no Electron.

## Problema

O Electron não reconhece automaticamente a biblioteca SQLite3 como uma dependência nativa, causando erros de resolução de módulos.

## Solução Implementada

### 1. Scripts Adicionados

- `npm run setup:sqlite` - Configura o SQLite3 para o Electron
- `npm run rebuild:sqlite` - Rebuild específico do SQLite3

### 2. Configurações do Electron Builder

```json
{
  "npmRebuild": false,
  "nodeGypRebuild": false
}
```

### 3. Scripts de Rebuild

- `rebuild:sqlite` - Rebuild apenas do SQLite3
- `postinstall` - Inclui o rebuild automático do SQLite3

## Como Usar

### Primeira Instalação

```bash
npm install
npm run setup:sqlite
```

### Após Atualizações

```bash
npm run rebuild:sqlite
```

### Desenvolvimento

```bash
npm start
```

## Estrutura de Arquivos

```
release/app/
├── node_modules/
│   └── sqlite3/
│       └── lib/
│           └── binding/
│               └── [módulos compilados]
└── package.json
```

## Troubleshooting

### Erro: "Cannot resolve module 'sqlite3'"

1. Execute: `npm run rebuild:sqlite`
2. Verifique se o diretório `release/app/node_modules/sqlite3` existe
3. Verifique se os binários nativos estão em `release/app/node_modules/sqlite3/lib/binding/`

### Erro: "Module not found"

1. Execute: `npm run setup:sqlite`
2. Verifique as permissões do diretório `release/app`

### Rebuild Manual

```bash
cd release/app
npm install
npx electron-rebuild --only sqlite3
```

## Notas Importantes

- O SQLite3 precisa ser recompilado para cada versão do Electron
- Use sempre os scripts fornecidos para rebuild
- O diretório `release/app` é criado automaticamente
- Os binários nativos são específicos para a arquitetura do sistema
