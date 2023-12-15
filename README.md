## Getting Started


Clone into the current folder and remove all unnecessary (one command):

```bash
git clone https://github.com/Devilkas/hpi_frontend.git .; rm -rf trunk .gitignore .git
```

Or [Download](https://github.com/Devilkas/hpi_frontend/archive/refs/heads/main.zip) **hpi_frontend** from GitHub.

Go to the project folder and run the command to install the node modules :
```bash
npm i
#or
npm install
```
Next step
```bash
cp .env.example .env
```
The next step is to change the [next.config.js](https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites) file to rewrites() if you need to.  

And change
- **HOST_URL**: site domain
- **API_URL**: api domain
- **REVALIDATE_TIME**: To revalidate data at a timed interval, you can use the next.revalidate option of fetch to set the cache lifetime of a resource (in seconds).

## Development server

Run:

```bash
npm run dev
```

## Production server
Run:

1) run command
```bash
npm run build
```
2) run command
```bash
npm run start
```

### You can use [PM2 Process Management](https://pm2.keymetrics.io/docs/usage/quick-start/)

## Main tasks descriptions:

- **npm run dev**: run dev mode
- **npm run build**: project build
- **npm run start**: run production mode
