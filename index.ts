import express from 'express';

const app = express();

app.use(express.json);

app.use("/");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running'))