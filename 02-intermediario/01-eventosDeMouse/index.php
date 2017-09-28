<html>
    <head>
        <meta charset='utf-8' />
        <script type='text/javascript' src='script.js'></script>
        <title>Eventos de mouse</title>
    </head>
    
    <body>
        
        <!-- Mouse clicanco para baixo -->
        <!-- Soltando o mouse -->
        <!-- Mouse passando por cima -->
        <!-- Mouse saindo de cima -->
        <!-- Mouse se mechendo em cima do botão -->

        <button onMouseDown='apertouMouse()' onMouseUp='soltouMouse()'
            onMouseOver='mouseEmCima()' onMouseOut='mouseSaiuDeCima()'
            onMouseMove='moveuMouse()'>BOTÃO</button> <!-- Pode ser também onmousedown -->
        
        <br/><br/>
        <br/><br/>
        
        <!-- Clique completo no mouse -->
        <!-- Clique duplo -->

        <button onclick='clicou()' ondblclick='clicouDuasVezes()'>BOTÃO 2</button>
        
        <br/><br/>
        <br/><br/>
        
        <!-- Identifica o botao direito do mouse -->
        <button oncontextmenu='return botaodireito()'>BOTÃO 3</button>
    </body>
</html>
