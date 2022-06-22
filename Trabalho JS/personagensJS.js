numero=0;
function nacao(){
    if(numero >=1){
        return;
    }
    numero++

    novaDiv = document.createElement("p");
    novaDiv.innerHTML = `
            <b>
            <p>Hobbit</p>
            </b>

            <li>Id: 1 </li>
            <li>Nação: Hobbit </li>
            <li>Casa: O Condado </li>
            <li>Descrição: Os hobbits
            pés-peludos são o tipo mais comum de hobbit. São morenos, preferem planícies e
            regiões banhadas por rios. Os cascalvas tem a pele e o cabelo mais claros, são
            mais altos e mais esguios que os outros tipos de hobbit, preferem bosques e
            florestas para morar além de serem descendentes de elfos. Outros hobbits dizem
            que estes têm 'sangue de fada', por conta de sua ascendência. Os grados são
            tipos de hobbit mais robustos e frequentemente cultivam barbas. São mais próximos
            aos anões, e Sméagol costumava ser um cascalva antes de ser corrompido pelo
            anel </li>
            <li>Personagens-saga: Bilbo Bolseiro, Samwise Gamgee, Frodo
            Bolseiro, Peregrin Tûk, Rosinha Villa.</li>

            <b>
                <p>Orc Snaga</p>
            </b>

            <li>Id: 2</li>
            <li>Nação: Orc Snaga </li>
            <li>Casa: Cirith Ungol</li>
            <li>Descrição: Os orcs são criaturas bestiais e beligerantes, que habitam o subterrâneo ou regiões selvagens. 
            Esses seres monstruosos são, quase sem exceção, saqueadores e assassinos, atacando comunidades civilizadas para roubar e matar. </li>
            <li>Personagens-saga: Bolg, Snaga-hai.</li>

            <b>
            <p>Uruk-hai</p>
            </b>

            <li>Id: 3</li>
            <li>Nação: Uruk-hai </li>
            <li>Casa: Portão Negro</li>
            <li>Descrição: Uruk é o nome dado a uma especie orc selvagem, mais forte e mais poderosa que os orcs comuns.</li>
            <li>Personagens-saga: Uglúk, Azog, Shagrat.</li>
            
            <b>
            <p>Cavaleiro de Rohan</p>
            </b>

            <li>Id: 4</li>
            <li>Nação: Cavaleiro de Rohan</li>
            <li>Casa: Abismo de Helm</li>
            <li>Descrição: Durante a XIII século de Terceira Idade (TA), os governantes de Gondor formaram
            uma aliança estreita com os habitantes do território do norte de Rhovanion, um
            pai de três pessoas Casas do Edain da Primeira Era. Estes homens foram dizimados
            pela Grande Peste de 1636 TA, e ainda mais pelas invasões dos carrinhos de
            Pessoas-de- no final do XX século. Após essas invasões, alguns desses homens,
            liderados por um certo Frumgar, migraram para o vale superior do Anduin em 1977
            TA. No local, eles entraram em conflito com os Anões sobre o compartilhamento
            do tesouro do dragão Scatha, morto por Fram, filho de Frumgar. Esses homens, que
            tomaram o nome de Éothéod, viveram por vários séculos ao redor das nascentes do
            Anduin, mas se tornaram cada vez mais numerosos e se sentiam confinados em suas
            terras. Apesar do afastamento, eles mantiveram laços com Gondor, e quando o
            Administrador Cirion se viu atacado por hordas de Orientais e Orcs, em 2510 AT,
            ele chamou Eorl, o Jovem, o novo Senhor dos Éothéod. Ele chegou inesperadamente
            e venceu a batalha decisiva dos Campos de Celebrant.</li>
            <li>Personagens-saga: Théoden, Théodred, Deorwine. </li>

            <b>
            <p>Guerreiro de Gondor </p>
            </b>

            <li>Id: 5</li>
            <li>Nação: Guerreiro de Gondor</li>
            <li>Casa: Minas Tirith</li>
            <li>Descrição: Gondor é o reinado mais poderoso dos Homens em Terra-Média, 
            guerreiros são exímios lutadores, sempre prontos para o combate. </li>
            <li>Personagens-saga: Aragorn. </li>

            <b>
            <p>Elfo da Floresta</p>
            </b>

            <li>Id: 6</li>
            <li>Nação: Elfo da Floresta</li>
            <li>Casa: Floresta das Trevas</li>
            <li>Descrição: Elfos da Floresta são um povo mágico e selvagem, de ferocidade e destreza sobrenatural, que domam e se tornam parte das 
            florestas que habitam.</li>
            <li>Personagens-saga: Thranduil.</li>

            <b>
            <p>Elfo de Lothlórien</p>
            </b>

            <li>Id: 7</li>
            <li>Nação: Elfo de Lothlórien</li>
            <li>Casa: Caras Galadhon</li>
            <li>Descrição: Lothlórien é um reino e floresta dos elfos restantes na Terra Média durante a Terceira Era. O reino tem um papel importante como o 
            centro élfico de resistência contra Sauron e é um símbolo à estética élfica de preservação florestal que fornece um espaço 'fora do tempo' 
            para os personagens que ambos vivem e visitam lá.</li>
            <li>Personagens-saga: Noldor, Teleri.</li>

            <b>
            <p>Anão</p>
            </b>

            <li>Id: 8</li>
            <li>Nação: Anão</li>
            <li>Casa: Colinas de Ferro</li>
            <li>Descrição: Anões são uma raça de seres que habita Arda, a Terra pré-histórica fictícia que inclui o continente da Terra Média</li>
            <li>Personagens-saga: Bombur, Balin, Bofur, Durin.</li>
            `
document.body.append(novaDiv)
}