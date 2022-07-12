// src/functions/graphql/index.ts
// This file is the lambda configuration for the api path
const handlerDir = `${__dirname
  .split(process.cwd())[1]
  .substring(1)
  .replace(/\\/g, '/')}`;

const slsFunc = {
  handler: `${handlerDir}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'graphql',
      },
    },
    {
      http: {
        method: 'post',
        path: 'graphql',
      },
    },
  ],
};

export default slsFunc;
