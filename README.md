<img width="64" height="64" align="left" style="float: left; margin: 10px 10px 0 0;" alt="Icon" src="https://imgur.com/TNMd4lE.png">

# Dank Memer's Website

> This is the repo for Dank Memer's current website.

<img alt="Screenshot" src="https://i.imgur.com/VnjqKe7.png">

## Setup

Node.js 16.6.0 or newer is required.

1. Run:

```bash
$ git clone https://github.com/DankMemer/dankmemer.lol.git
$ cd ./dankmemer.lol
```

2. Create .env file:

```shell
COOKIE_SECRET=reXJAoQMYnoLgVWYucVevfg69QTdvbxh
CLIENT_ID=906898913498382396
CLIENT_SECRET=4NxcL8z_cLeH-bQbY5ivDDiW-u-KglKu
CRYPT_KEYS=["C9xGOZLhIqFX1evGDHj1LLA5N1BDIKVqEFkjmhx1d4U=","qG+ZpgiYZu2Ui/KYu5D4lA=="]
DOMAIN=http://localhost:3000
MONGODB_URI=mongodb+srv://user1:123@heckler.jz0jl.mongodb.net/WebsiteData?retryWrites=true&w=majority
MONGODB_DB=website
FEEDBACK_WEBHOOK=https://discord.com/api/webhooks/908563617706819645/XThkY9hSUzymHFd5BakNJZsDGTqxllzzOVswo9j4la-pkciPQZwfrw51Px13w-4A0YSL
REPORTS_USER_WEBHOOK=https://discord.com/api/webhooks/908563617706819645/XThkY9hSUzymHFd5BakNJZsDGTqxllzzOVswo9j4la-pkciPQZwfrw51Px13w-4A0YSL
REPORTS_SERVER_WEBHOOK=https://discord.com/api/webhooks/908563617706819645/XThkY9hSUzymHFd5BakNJZsDGTqxllzzOVswo9j4la-pkciPQZwfrw51Px13w-4A0YSL
APPEALS_USER_WEBHOOK=https://discord.com/api/webhooks/908563617706819645/XThkY9hSUzymHFd5BakNJZsDGTqxllzzOVswo9j4la-pkciPQZwfrw51Px13w-4A0YSL
APPEALS_SUPPORT_WEBHOOK=https://discord.com/api/webhooks/908563617706819645/XThkY9hSUzymHFd5BakNJZsDGTqxllzzOVswo9j4la-pkciPQZwfrw51Px13w-4A0YSL
APPEALS_COMMUNITY_WEBHOOK=https://discord.com/api/webhooks/908563617706819645/XThkY9hSUzymHFd5BakNJZsDGTqxllzzOVswo9j4la-pkciPQZwfrw51Px13w-4A0YSL
```

-   You can generate CRYPT_KEYS by running: <br/>
    `node -p "[ 32, 16 ].map(n => crypto.randomBytes(n).toString('base64'))"`
-   COOKIE_SECRET should be at least 32 characters long. Generate one using: <br/>
    [`https://1password.com/password-generator/`](https://1password.com/password-generator/)

3. Run:

```bash
$ npm i
$ npm run dev
```

## Authors

-   **Ronin** - _Initial work_ - [TheCyberRonin](https://github.com/TheCyberRonin)
-   **Mel** - _Initial design_ - [Melmsie](https://github.com/melmsie)
-   **Aetheryx** - _Basically the whole thing_ - [Aetheryx](https://github.com/aetheryx)
-   **InBlue** - _Taken over work for redesign_ - [InBlue](https://github.com/inblue)
-   **Badosz** - _Rewrite and feedback page_ - [badosz0](https://github.com/badosz0)

## License

[MIT](https://tldrlegal.com/license/mit-license)
