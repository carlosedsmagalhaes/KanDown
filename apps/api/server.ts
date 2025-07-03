import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import express from 'express';
import quadroRoutes from './routes/quadroRoutes';
import colunaRoutes from './routes/colunaRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/quadros', quadroRoutes);
app.use('/api/colunas', colunaRoutes);

export default app;