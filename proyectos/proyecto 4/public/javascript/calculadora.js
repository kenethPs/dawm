const funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let valorPorHoraElemento = document.getElementById('valorPorHora');
        let valorPorHora = parseFloat(valorPorHoraElemento.value);
        let interfazHoraElemento = document.getElementById('interfazHoras');
        let interfazHora = parseInt(interfazHoraElemento.value);
        let HTMLHorasElemento = document.getElementById('HTMLHoras');
        let HTMLHora = parseInt(HTMLHorasElemento.value);
        let CSSHorasElemento = document.getElementById('CSSHoras');
        let CSSHora = parseInt(CSSHorasElemento.value);
        let JavaScriptHorasElemento = document.getElementById('JavaScriptHoras');
        let JavaScriptHora = parseInt(JavaScriptHorasElemento.value);
        let resultado = valorPorHora * (interfazHora + HTMLHora + CSSHora + JavaScriptHora);
        let valorTotalElemento = document.getElementById('valorTotal');
        valorTotalElemento.value = resultado;
    });

    
};
funcionPredeterminada();