var lancamento = 1605823939000;

$(document).ready(e=>
{
    recarrega();
    setInterval(recarrega, 1000);
});

function recarrega()
{
    let atual = new Date().getTime(),
        dif = (lancamento - atual)/1000;

    if(dif>0)
    {
        let mes = Math.floor(dif/2592000),
            dia = Math.floor((dif/86400)%30),
            hora = Math.floor((dif/3600)%24),
            min = Math.floor((dif/60)%60),
            seg = Math.floor(dif%60);

        let texto = 'Faltam ' + 
                    mes + ((mes > 1) ? ' meses, ' : ' mês, ') + 
                    dia + ((dia > 1) ? ' dias, ' : ' dia, ') +
                    hora + ((hora > 1) ? ' horas, ' : ' hora, ') + 
                    min + ((min > 1) ? ' minutos e ' : ' minuto e ') +
                    seg + ((seg > 1) ? ' segundos para o lançamento do jogo.' : ' segundo para o lançamento do jogo.');
        
        $('#cd').text(texto);
    }
    else
    {
        $('#cd').text("O jogo já foi lançado!");
    }
}