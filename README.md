# CarltonAtHome Website

Start via `npm run dev`.
View providers at `http://localhost:3000/api/auth/providers`.

## To Do

Use the sql to eventually connect next-auth to a db.

## Creation History

```bash
npm i next-auth
openssl rand -base64 32
```

## GitHub OAuth Setup

GitHub oauth app registered in:
`github->settings->developer settings->oauth apps->reg new app`
with homepage url
`http://localhost:3000`
and authorized callback url
`http://localhost:3000/api/auth/callback/github`

Note you need one oauth for dev and one for prod.

## Google OAuth Setup
