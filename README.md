# CarltonAtHome Website

View providers at `http://localhost:3000/api/auth/providers`.
Run migrations via `npm run migrate [-d|-u] #`.

## Creation History

```bash
npx create-next-app@latest
cd carltonathome
# ui
npx shadcn-ui@latest init
npx shadcn-ui@latest add dropdown-menu
# db
npm i kysely @vercel/postgres-kysely
# following use for db migration cli
npm i -D dotenv
npm i -D minimist
npm i --save-dev @types/minimist
npm i -D tsx
```

## SQL Notes

| Command               | Description                |
| --------------------- | -------------------------- |
| dropt table cah_user; | deletes the table cah_user |
