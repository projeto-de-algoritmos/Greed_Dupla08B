export default class Agendamento {
  constructor(json) {
    this.dados = json;
    this.conjunto_solucao = {};

    this.dados.forEach((servico) => {
      servico['duracao_estimada'] = this.tipoDeServico(servico.tipo_de_servico);
    });
  }

  obterDados() {
    console.log(this.dados);
  }

  somaDosHorarios() {
    let total = 0;

    this.dados.forEach((servico) => {
      total += servico.duracao_estimada;
    });

    return total;
  }

  minutosParaHoras(minutos) {
    if (minutos < 60) {
      if (minutos < 10) {
        return '00:' + '0' + minutos.toString();
      }
      return '00:' + minutos.toString();
    }
    let horas = Math.floor(minutos / 60);
    let sobra = minutos % 60;

    if (horas < 10 && sobra < 10)
      return '0' + horas.toString() + ':0' + sobra.toString();
    if (horas < 10 && sobra >= 10)
      return '0' + horas.toString() + ':' + sobra.toString();
    if (horas >= 10 && sobra < 10)
      return horas.toString() + ':0' + sobra.toString();
    if (horas >= 10 && sobra >= 10)
      return horas.toString() + ':' + sobra.toString();
  }
  horasParaMinutos(horas) {
    let total_em_minutos = 0;

    let resultado = horas.split(':');
    total_em_minutos =
      parseInt(resultado[0], 10) * 60 + parseInt(resultado[1], 10);

    return total_em_minutos;
  }

  tipoDeServico(nome_do_servico) {
    if (nome_do_servico === 'Trocar o roteador') return 15;
    if (nome_do_servico === 'Trocar antena da TV') return 30;
    if (nome_do_servico === 'Instalar ponto adicional') return 45;
    if (nome_do_servico === 'Cancelamento do serviço') return 60;
    if (nome_do_servico === 'Resolver problema da internet') return 90;
    if (nome_do_servico === 'Trocar toda a fiação') return 120;
  }

  melhor_agendamento() {
    this.dados.sort(function (a, b) {
      return a.em_casa_ate < b.em_casa_ate
        ? -1
        : a.em_casa_ate > b.em_casa_ate
        ? 1
        : 0;
    });

    let tempo_inicio = 480; // 480 minutos = 8 horas
    let atraso_maximo = 0;

    this.dados.forEach((servico) => {
      servico['hora_de_inicio'] = this.minutosParaHoras(tempo_inicio);
      servico['hora_de_termino'] = this.minutosParaHoras(
        tempo_inicio + servico['duracao_estimada']
      );

      tempo_inicio += servico['duracao_estimada'];
      let disponibilidade_ate = this.horasParaMinutos(servico.em_casa_ate);
      servico['atraso'] = 0;
      if (tempo_inicio > disponibilidade_ate) {
        servico['atraso'] = tempo_inicio - disponibilidade_ate;
        atraso_maximo = +tempo_inicio - disponibilidade_ate;
      }
      servico['duracao_estimada'] = this.minutosParaHoras(
        servico['duracao_estimada']
      );
    });

    console.log('Atraso maximo: ', atraso_maximo);

    return this.dados;
  }
}
