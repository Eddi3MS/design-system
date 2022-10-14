# Design System - Rocketseat - Modulo 05

- [x] Text
- [x] Heading
- [x] Box
- [x] Button
- [x] TextInput
- [x] TextArea
- [x] Checkbox
- [x] Avatar
- [x] Multistep

## Comands

npm init -y (cria um package.json)
npm i -D typescript (instala o typescript)
npx tsc --init (cria o tsconfig.json)
npx tsc (transpila os arquivos .ts para .js)

npm i -D react @types/react @types/react-dom
(react -D, em prod quem instalar a lib, já vai ter react.)

npx sb init --builder @storybook/builder-vite --type react --use-npm

### turborepo adicionado

npm rum dev (na raiz do monorepo realizara todos os builds --watch dos packages)

#### util

f1 + restart ts server => bug de types

## cli deploy

npm i @storybook/storybook-deployer --save-dev
