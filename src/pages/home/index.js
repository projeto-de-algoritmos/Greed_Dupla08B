import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container, Formulario, List, Menu, Template, Itens } from './styles';
import Agenda from '../../functions/agendamento';
function Dashboard() {
  const [servicos, setServicos] = useState([]);
  const [Agendamento, setAgendamento] = useState([]);

  function AdicionaServico({ cliente, endereco, disponibilidade, servico }) {
    var data = {
      cliente: cliente,
      endereco: endereco,
      disponibilidade: disponibilidade,
      servico: servico,
    };

    setServicos([...servicos, data]);
    console.log(servicos);
  }

  function removeServico(index) {
    setServicos(servicos.filter((t) => t != servicos[index]));
  }
  function OrganizaRota() {
    const agenda = new Agenda(servicos);
    console.log(agenda);
    setAgendamento(servicos);
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

            <Input
              name="servico"
              list="opcoes"
              type="fieldName"
              placeholder="Serviço"
            />
            <datalist id="opcoes">
              <option value="Trocar o roteador" />
              <option value="Trocar antena da TV" />
              <option value="Instalar ponto adicional" />
              <option value="Cancelamento do serviço" />
              <option value="Resolver problema da internet" />
              <option value="Trocar toda a fiação" />
            </datalist>

            <button type="submit">Adicionar Serviço</button>
            <button type="button" onClick={OrganizaRota}>
              Organizar Rota
            </button>
          </Form>
        </Formulario>
      </Menu>
      <h2>Serviços:</h2>

      <List>
        {Object.entries(servicos).map(([index, v]) => (
          <button type="button" onClick={() => removeServico(index)}>
            <li key={index}>
              {Object.entries(v).map(
                ([chave, value]) => `${chave}: ${value}\n`
              )}
            </li>
          </button>
        ))}
      </List>
      <Template>
        <h1>Rota: </h1>
        <Itens>
          {Object.entries(Agendamento).map(([index, v]) => (
            <li key={index}>
              {Object.entries(v).map(
                ([chave, value]) => `${chave}: ${value}\n`
              )}
            </li>
          ))}

          {/* {Agendamento.map((s, i) => (
            <li key={s}>{s.map((t) => `${t} ,`)}</li>
          ))} */}
        </Itens>
      </Template>
    </Container>
  );
}
export default Dashboard;
