## Url Shortener

This is a basic URL Shortener built with Next.js and Prisma. It was primarly
created for my own use, but anyone is welcome to use it under the MIT license.

## Enviornment variables

In order to use this on your own you need to create the following enviornment
variables (`.env`):

```
# PostgreSQL instance
DATABASE_URL=

# a unique identifier which you need to create links on the /api/createLink endpoint
AUTH_TOKEN=

# the domain this codebase is deployed on
# remove if deployed on Vercel, that is auto detected
DOMAIN=http://localhost:3000
```

## License

This codebase is licensed under the MIT License.
