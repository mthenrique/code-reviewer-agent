import express from 'express';

import { env, loadParameter } from './infra/env/index';

const app = express();
app.use(express.json());

const main = async () => {
  await loadParameter({ test: false });

  const { app } = await import('@/infra/http/app');

  app.listen(env.PORT, () =>
    console.log(`🚀 Server running on port ${env.PORT}`),
  );
};

main();
