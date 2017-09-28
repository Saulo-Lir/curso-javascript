<html>
    <head>
        <meta charset='utf-8' />
        <script type='text/javascript' src='script.js'></script>
        <title>Eventos de Teclado</title>
    </head>
    
    <body>
        
        <!-- Quando a tecla é pressionada -->
        <input type='text' onkeydown='apertouTecla(event)'/> <!-- event = Identifica a tecla que foi pressioanada -->
    
        <br/><br/>
        
        <!-- Quando soltar a tecla -->
        <input type='text' onkeyup='soltouTecla(event)'/>
        
        <br/><br/>
        
        <!-- Enquanto a tecla tiver pressionada -->
        <input type='text' onkeypress='teclaPressionada(event)'/>
    
    </body>
</html>