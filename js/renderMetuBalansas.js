function renderMetuBalansas(selector, data) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }

    let HTML = '';
    for (let { pavadinimas } of data) {
        HTML += `
            <div class="table">
                <div class="table-head">
                    <div class="cell">#</div>
                    <div class="cell">Mėnuo</div>
                    <div class="cell">Įplaukos</div>
                    <div class="cell">Išlaidos</div>
                    <div class="cell">Balansas</div>
                </div>
                <div class="table-content">
                    <div class="table-row">
                        <div class="cell">1</div>
                        <div class="cell">Sausis</div>
                        <div class="cell">150.00 Eur</div>
                        <div class="cell">-</div>
                        <div class="cell">150.00 Eur</div>
                    </div>
                    <div class="table-row">
                        <div class="cell">1</div>
                        <div class="cell">Sausis</div>
                        <div class="cell">150.00 Eur</div>
                        <div class="cell">-</div>
                        <div class="cell">150.00 Eur</div>
                    </div>
                    <div class="table-row">
                        <div class="cell">1</div>
                        <div class="cell">Sausis</div>
                        <div class="cell">150.00 Eur</div>
                        <div class="cell">-</div>
                        <div class="cell">150.00 Eur</div>
                    </div>
                    <div class="table-row">
                        <div class="cell">1</div>
                        <div class="cell">Sausis</div>
                        <div class="cell">150.00 Eur</div>
                        <div class="cell">-</div>
                        <div class="cell">150.00 Eur</div>
                    </div>
                </div>
                <div class="table-footer">
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell">0.00 Eur</div>
                    <div class="cell">0.00 Eur</div>
                    <div class="cell">0.00 Eur</div>
                </div>
            </div>
            `;
    }
    if (HTML === '') {
        return false;
    }
    DOM.innerHTML = HTML;
    return true;
}
export { renderMetuBalansas }