import Express from "express";
import "dotenv/config";
import mailRoutes from "./routes/mail.route";
import Cors from "cors";

const port = process.env.PORT || 3000;

const app = Express();

app.use(Cors());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

app.use(mailRoutes);

app.listen(port, () => {
  console.log(`Servidor iniciado en puerto ${port}`);
});
