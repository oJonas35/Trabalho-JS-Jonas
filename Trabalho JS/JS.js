numero=1;
function NovoPersonagem() {
    if(numero >=8){
        return;
    }
numero++;

    novaDiv = document.createElement("div");
    novaDiv.innerHTML = `<td>
    <h3>Personagem ${numero}</h3>			
        <div class = "for1">	
            <form class="form">
             </br></br>
              <div class="sobre-habilidades">
               <label for="Habilidades">Habilidades</label>
               </div>
                <div class="for3">
                  <div>
                   <label for="nome-personagem">Força</label>
                    <select name ="força"> 
                    <option value="20">20</option>
                    <option value="19">19</option>
                    <option value="18">18</option>
                                     <option value="17">17</option>
                                     <option value="16">16</option>
                                     <option value="15">15</option>
                                     <option value="14">14</option>
                                     <option value="13">13</option>
                                     <option value="12">12</option>
                                     <option value="11">11</option>
                                     <option value="10">10</option>
                                     <option value="09">09</option>
                                     <option value="08">08</option>
                                     <option value="07">07</option>
                                     <option value="06">06</option>
                                     <option value="05">05</option>
                                     <option value="04">04</option>
                                     <option value="03">03</option>
                                     <option value="02">02</option>
                                     <option value="01">01</option>
                                 </select>
                             </div>
                             </br>

                             <div>
                                 <label for="nome-personagem">Precisão</label>
                                 <select name ="força"> 
                                     <option value="20">20</option>
                                     <option value="19">19</option>
                                     <option value="18">18</option>
                                     <option value="17">17</option>
                                     <option value="16">16</option>
                                     <option value="15">15</option>
                                     <option value="14">14</option>
                                     <option value="13">13</option>
                                     <option value="12">12</option>
                                     <option value="11">11</option>
                                     <option value="10">10</option>
                                     <option value="09">09</option>
                                     <option value="08">08</option>
                                     <option value="07">07</option>
                                     <option value="06">06</option>
                                     <option value="05">05</option>
                                     <option value="04">04</option>
                                     <option value="03">03</option>
                                     <option value="02">02</option>
                                     <option value="01">01</option>
                                 </select>
                             </div>
                             </br>
                             <div>
                                 <label for="nome-personagem">Velocidade</label>
                                 <select name ="força"> 
                                     <option value="20">20</option>
                                     <option value="19">19</option>
                                     <option value="18">18</option>
                                     <option value="17">17</option>
                                     <option value="16">16</option>
                                     <option value="15">15</option>
                                     <option value="14">14</option>
                                     <option value="13">13</option>
                                     <option value="12">12</option>
                                     <option value="11">11</option>
                                     <option value="10">10</option>
                                     <option value="09">09</option>
                                     <option value="08">08</option>
                                     <option value="07">07</option>
                                     <option value="06">06</option>
                                     <option value="05">05</option>
                                     <option value="04">04</option>
                                     <option value="03">03</option>
                                     <option value="02">02</option>
                                     <option value="01">01</option>
                                 </select>
                             </div>
                             </br>
                             <div>
                                 <label for="nome-personagem">Armadura</label>
                                 <select name ="força"> 
                                     <option value="20">20</option>
                                     <option value="19">19</option>
                                     <option value="18">18</option>
                                     <option value="17">17</option>
                                     <option value="16">16</option>
                                     <option value="15">15</option>
                                     <option value="14">14</option>
                                     <option value="13">13</option>
                                     <option value="12">12</option>
                                     <option value="11">11</option>
                                     <option value="10">10</option>
                                     <option value="09">09</option>
                                     <option value="08">08</option>
                                     <option value="07">07</option>
                                     <option value="06">06</option>
                                     <option value="05">05</option>
                                     <option value="04">04</option>
                                     <option value="03">03</option>
                                     <option value="02">02</option>
                                     <option value="01">01</option>
                                 </select>
                             </div>
                             </br>
                             <div>
                                 <label for="nome-personagem">Recuperação</label>
                                 <select name ="força"> 
                                     <option value="20">20</option>
                                     <option value="19">19</option>
                                     <option value="18">18</option>
                                     <option value="17">17</option>
                                     <option value="16">16</option>
                                     <option value="15">15</option>
                                     <option value="14">14</option>
                                     <option value="13">13</option>
                                     <option value="12">12</option>
                                     <option value="11">11</option>
                                     <option value="10">10</option>
                                     <option value="09">09</option>
                                     <option value="08">08</option>
                                     <option value="07">07</option>
                                     <option value="06">06</option>
                                     <option value="05">05</option>
                                     <option value="04">04</option>
                                     <option value="03">03</option>
                                     <option value="02">02</option>
                                     <option value="01">01</option>
                                 </select>
                             </div>
                         </div>
                        <div>
                            <input type="checkbox" name="caixa-inclusão-personagem">Incluir este personagem na batalha
                        </div></br></br>

                        <div>
                            <label for="nome-personagem">Nome</label>
                            <input type="text" name="nome-personagem">
                        </div></br></br>

                    <div class= "for2">
                        <div class="nação2">
                            </br></br>
                            <input type="radio" name="Nação">Elfo da Floresta</br>
                            <input type="radio" name="Nação">Elfo de Lothlórien</br>
                            <input type="radio" name="Nação">Orc Snaga</br>
                            <input type="radio" name="Nação">Uruk-hai
                    
                        </div>
                        <div class=nação1>
                            Nação</br></br>
                            <input type="radio" name="Nação">Anão</br>
                            <input type="radio" name="Nação">Hobbit</br>
                            <input type="radio" name="Nação">Cavaleiro de Rohan</br>
                            <input type="radio" name="Nação">Guerreiro de Gondor							
                        </div>				
                    </div>
                    <div class="button">
                        <button type="button" onclick="NovoPersonagem()">Novo Personagem</button>
                        <button type="button">Criar Personagem</button>
                        <button>Reiniciar</button>
                    </div>
                            
                </form>

            </div>
        </td>
    </tr>
    `
        
    document.body.append(novaDiv)
}