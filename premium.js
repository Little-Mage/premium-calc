function premiumCalc() {
    const silver = parseFloat(document.getElementById('s').value);
    const troy = parseFloat(document.getElementById('t').value);
    const coin = parseFloat(document.getElementById('c').value);

    if (isNaN(silver) || isNaN(troy) || isNaN(coin)) {
        document.getElementById('p1').innerHTML = 'Invalid input';
        document.getElementById('p2').innerHTML = '';
        return;
    }

    const melt = silver * troy;
    const premium = (coin - melt).toFixed(2);
    const percent = (((coin - melt) / melt) * 100).toFixed(1);

    document.getElementById('p1').innerHTML = `Premium: $${premium}`;
    document.getElementById('p2').innerHTML = `Percent: ${percent}%`;
}
