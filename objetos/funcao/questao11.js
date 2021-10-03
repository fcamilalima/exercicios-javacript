function anosBissextos(ano) {
    if (ano % 400 == 0)
        console.log(`O ano ${ano} é bissexto.`)
    else {
        if (ano % 100 == 0)
            console.log(`O ano ${ano} não é bissexto.`)
        else {
            if (ano % 4 == 0)
                console.log(`O ano ${ano} é bissexto.`)
            else
                console.log(`O ano ${ano} não é bissexto.`)
        }
    }
}

anosBissextos(1993)
anosBissextos(2000)
anosBissextos(1600)
anosBissextos(1996)
anosBissextos(2400)
anosBissextos(1995)
anosBissextos(2020)
anosBissextos(1992)