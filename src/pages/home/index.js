import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container, Formulario, List, Menu } from './styles';

function Dashboard() {
  const [servicos, setServicos] = useState([]);

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
            <button type="submit">Menor Caminho</button>
          </Form>
        </Formulario>
      </Menu>
      <List>
        {console.log(servicos)}

        {servicos.map((s, i) => (
          <button type="button" onClick={() => removeServico(i)}>
            <li key={s}>
              {console.log(s)}

              {s.map((t) => `${t},`)}
            </li>
          </button>
        ))}
      </List>
    </Container>
  );
}
export default Dashboard;
