class Agendamento {

    constructor(json) {
        this.dados = json;
        this.conjunto_solucao = {};
    }

    obterDados(){
        console.log(this.dados);
    }

    minutosParaHoras(minutos) {
        let horas = Math.floor(minutos / 60);
        let sobra = minutos % 60;

        if(horas < 10 && sobra < 10)
            return "0" + horas.toString() + ":0" + sobra.toString();
        if(horas < 10 && sobra >= 10)
            return "0" + horas.toString() + ":" + sobra.toString();
        if(horas >= 10 && sobra < 10)
            return horas.toString() + ":0" + sobra.toString();
        if(horas >= 10 && sobra >= 10)
            return horas.toString() + ":" + sobra.toString();
    }

    tipoDeServico(nome_do_servico) {
        if(nome_do_servico === "Trocar o roteador")
            return 15;
        if(nome_do_servico === "Trocar antena da TV")
            return 30;
        if(nome_do_servico === "Instalar ponto adicional")
            return 45;
        if(nome_do_servico === "Cancelamento do serviço")
            return 60;
        if(nome_do_servico === "Resolver problema da internet")
            return 90;
        if(nome_do_servico === "Trocar toda a fiação")
            return 120;
    }

    melhor_agendamento() {
        this.dados.sort(function(a,b) {
            return a.em_casa_ate < b.em_casa_ate ? -1 : a.em_casa_ate > b.em_casa_ate ? 1 : 0;
        });

        let tempo_inicio = 480; // 480 minutos = 8 horas

        this.dados.forEach(servico => {
            servico['duracao_estimada'] = this.tipoDeServico(servico.tipo_de_servico);
            servico['hora_de_inicio'] = this.minutosParaHoras(tempo_inicio);
            servico['hora_de_termino'] = this.minutosParaHoras(tempo_inicio + servico['duracao_estimada']);
        
            tempo_inicio += servico['duracao_estimada'];
        });

        return this.dados

    }


}
