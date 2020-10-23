import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container, Formulario, List, Menu, Template, Itens } from './styles';

function Dashboard() {
  const [servicos, setServicos] = useState([]);
  const [classificados, setClassificados] = useState([]);
  function AdicionaServico({
    cliente,
    endereco,
    disponibilidade,
    servico,
    tempo,
  }) {
    var data = [cliente, endereco, disponibilidade, servico, tempo];

    setServicos([...servicos, data]);
    console.log(servicos);
  }

  function removeServico(index) {
    setServicos(servicos.filter((t) => t != servicos[index]));
  }
  function OrganizaRota() {
    setClassificados(servicos);
  }
  return (
    <Container>
      <Menu>
        <Formulario>
          <Form onSubmit={AdicionaServico}>
            <Input name="cliente" type="fieldName" placeholder="Cliente" />
            <Input name="endereco" type="fieldName" placeholder="Endereço" />
            <Input
              name="disponibilidade"
              type="fieldName"
              placeholder="Disponibilidade"
            />

            <Input name="servico" type="fieldName" placeholder="Serviço" />

            <Input name="tempo" type="fieldName" placeholder="Tempo estimado" />
            <button type="submit">Adicionar Serviço</button>
            <button type="button" onClick={OrganizaRota}>
              Organizar Rota
            </button>
          </Form>
        </Formulario>
      </Menu>
      <h2>Serviços:</h2>
      <List>
        {servicos.map((s, i) => (
          <button type="button" onClick={() => removeServico(i)}>
            <li key={s}>
              {console.log(s)}

              {s.map((t) => `${t},`)}
            </li>
          </button>
        ))}
      </List>
      <Template>
        <h1>Rota: </h1>
        <Itens>
          {classificados.map((s, i) => (
            <li key={s}>
              {console.log(s)}
              {s.map((t) => `${t} ,`)}
            </li>
          ))}
        </Itens>
      </Template>
    </Container>
  );
}
export default Dashboard;
