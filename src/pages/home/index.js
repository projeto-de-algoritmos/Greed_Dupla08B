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
      em_casa_ate: disponibilidade,
      tipo_de_servico: servico,
    };

    setServicos([...servicos, data]);
  }

  function removeServico(index) {
    setServicos(servicos.filter((t) => t != servicos[index]));
  }

  function OrganizaAgendamento() {
    // funçao que chama o algoritmo para organizar os agendaentos

    const agenda = new Agenda(servicos); // instancia uma nova agenda passando os serviços do dia
    const agendamento = agenda.melhor_agendamento(); // retona o melhor agendamento possivel
    console.log(agenda);

    setAgendamento(agendamento);
  }

  function adicionarDadosApp(){
    let json = [{
      "cliente": "Arthur",
      "endereço": "Casa 01",
      "em_casa_ate": "12:00",
      "tipo_de_servico": "Trocar o roteador",
    },
    {
        "cliente": "Andre",
        "endereço": "Casa 02",
        "em_casa_ate": "17:00",
        "tipo_de_servico": "Trocar toda a fiação",
    },
    
    {
        "cliente": "Carol",
        "endereço": "Casa 03",
        "em_casa_ate": "11:00",
        "tipo_de_servico": "Trocar o roteador",
    },
    
    {
        "cliente": "Sara",
        "endereço": "Casa 04",
        "em_casa_ate": "10:00",
        "tipo_de_servico": "Trocar antena da TV",
    },
    
    {
        "cliente": "Estela",
        "endereço": "Casa 07",
        "em_casa_ate": "11:00",
        "tipo_de_servico": "Cancelamento do serviço",
    },
    
    {
        "cliente": "Gabriela",
        "endereço": "Casa 08",
        "em_casa_ate": "16:00",
        "tipo_de_servico": "Resolver problema da internet",
    },
    
    ]

    // json.forEach(element => {
    //   AdicionaServico(element)
    // });
    setServicos(json);
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
            <button type="button" onClick={adicionarDadosApp}>
              Adicionar dados do APP
            </button>
            <button type="button" onClick={OrganizaAgendamento}>
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
        </Itens>
      </Template>
    </Container>
  );
}
export default Dashboard;
