# CarltonAtHome Website

View providers at `http://localhost:3000/api/auth/providers`.
Run migrations via `npm run migrate [-d|-u] #`.
Due to compatibility issues with `kysely` use 'npm i --force'.

## Creation History

```bash
npx create-next-app@latest
cd carltonathome
# ui
npx shadcn-ui@latest init
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add input
npx shadcn-ui@latest add form
# db
npm i kysely @vercel/postgres-kysely
# following use for db migration cli
npm i -D dotenv
npm i -D minimist
npm i -D @types/minimist
npm i -D tsx
# auth
npm install next-auth@beta
npm i kysely @vercel/postgres-kysely
npm i @auth/kysely-adapter --force
```

## SQL Notes

| Command               | Description                |
| --------------------- | -------------------------- |
| dropt table cah_user; | deletes the table cah_user |
