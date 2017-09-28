<html>
    <head>
        <meta charset='utf-8' />
        <script type='text/javascript' src='script.js'></script>
        <title>Validção de Formulários</title>
    </head>
    
    <body>
        <form method='POST' onsubmit='return validar()'> <!-- O onsubmit é ativado quando o botão de submit for ativado -->
            Digite um número de DOIS algarismos:<br/>
            <input type='text' name='numero' id='numero'/><br/><br/>
            
            <input type='submit' value='Enviar' />
        </form>
    
    </body>
</html>
