class Agendamento {

    constructor(json) {
        this.dados = json;
        this.conjunto_solucao = {};
    }

    obterDados(){
        console.log(this.dados);
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
