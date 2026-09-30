import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
  return response.status(200).json({
    message: "Hello World!"
  });
});

routes.get("/number-aleatori", (request, response) => {
  const numero = Math.floor(Math.random() * 100) + 1;

  return response.status(200).json({
    numero: numero
  });
});

routes.get("/fibonacci/:numero", (request, response) => {
  const numero = Number(request.params.numero);

  const sequencia = [0, 1];

  for (let i = 2; i < numero; i++) {
    sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
  }

  return response.status(200).json({
    numero: numero,
    fibonacci: sequencia
  });
});

routes.get("/factorial/:numero", (request, response) => {
  const numero = Number(request.params.numero);

  let resultado = 1;

  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  return response.status(200).json({
    numero: numero,
    factorial: resultado
  });
});

export default routes;
