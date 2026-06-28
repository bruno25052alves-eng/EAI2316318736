function mostrarInfo(sistema){
    let texto = "";

    if(sistema==="ios"){
        texto=`
        <h2>📱 iOS</h2>
        <p><b>Criador:</b> Apple</p>
        <p><b>Lançamento:</b> 2007</p>
        <p><b>Descrição:</b> Sistema operacional exclusivo dos iPhones.</p>
        <p><b>Vantagens:</b> Segurança elevada, desempenho excelente, interface intuitiva.</p>
        <p><b>Desvantagens:</b> Menor personalização e aparelhos caros.</p>
        <p><b>Curiosidade:</b> Antes era chamado iPhone OS.</p>`;
    }

    if(sistema==="android"){
        texto=`
        <h2>🤖 Android</h2>
        <p><b>Criador:</b> Google</p>
        <p><b>Lançamento:</b> 2008</p>
        <p><b>Descrição:</b> Sistema mobile mais utilizado no mundo.</p>
        <p><b>Vantagens:</b> Alta personalização e variedade de dispositivos.</p>
        <p><b>Desvantagens:</b> Segurança varia conforme fabricante.</p>
        <p><b>Curiosidade:</b> Mais de 70% dos smartphones usam Android.</p>`;
    }

    if(sistema==="linux"){
        texto=`
        <h2>🐧 Linux</h2>
        <p><b>Criador:</b> Linus Torvalds</p>
        <p><b>Lançamento:</b> 1991</p>
        <p><b>Descrição:</b> Sistema open-source muito usado em servidores.</p>
        <p><b>Vantagens:</b> Seguro, leve e gratuito.</p>
        <p><b>Desvantagens:</b> Curva de aprendizado maior.</p>
        <p><b>Curiosidade:</b> Grande parte da internet roda em Linux.</p>`;
    }

    if(sistema==="windows"){
        texto=`
        <h2>🪟 Windows</h2>
        <p><b>Criador:</b> Microsoft</p>
        <p><b>Lançamento:</b> 1985</p>
        <p><b>Descrição:</b> Sistema dominante em PCs.</p>
        <p><b>Vantagens:</b> Compatível com programas e jogos.</p>
        <p><b>Desvantagens:</b> Mais alvo de vírus.</p>
        <p><b>Curiosidade:</b> É o sistema de desktop mais usado do mundo.</p>`;
    }

    document.getElementById("infoBox").innerHTML = texto;

    document.getElementById("infoBox").scrollIntoView({
        behavior:"smooth"
    });
}
