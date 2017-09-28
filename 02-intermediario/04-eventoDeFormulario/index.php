<html>
    <head>
        <meta charset='utf-8' />
        <script type='text/javascript' src='script.js'></script>
        <title>Eventos de Formulário</title>
    </head>
    
    <body>
        <form method='POST' onsubmit='return false'><!-- Executa o evento ao enviar o formulário (Caso seja return false, não envia o formulário) -->
            <!-- Executa uma ação ao selecionar um item do select -->
             <select name='cidade' onchange='mudouOpcao(this)'> <!-- this = envia o próprio objeto (no caso, o item selecionado) -->
                 <option>São Paulo</option>
                 <option>Rio de Janeiro</option>
                 <option>Belo Horizonte</option>
                 <option>Recife</option>
             </select><br/><br/>
             <input type='submit' value='Enviar'/>
             
             <!--Executa evento quando o foco entrar e sair do campo -->
             <input type='text' name='texto' onfocus='focou()' onblur='desfocou()'/>
             
        </form>
    
    </body>
</html>
