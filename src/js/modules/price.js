const price  = ()  => {
    let select = document.getElementById('size');
    let select2 = document.getElementById('material');
    let select3 = document.getElementById('options');
    let select4 = document.getElementById('promocode');
    select.addEventListener('change', getPrice);
    select2.addEventListener('change', getPrice);
    select3.addEventListener('change', getPrice);
    select4.addEventListener('change', getPrice);
    function getPrice() {
        let value = select.options[select.selectedIndex].text;
        let value2 = select2.options[select2.selectedIndex].text;
        let price = 0;
        let value3 = select3.options[select3.selectedIndex].text;
        if (value !== 'Выберите размер картины' && value2 !== 'Выберите материал картины') {
            if(value === '40x50') {
                price = price + 10;
            }
            if (value === '50x70') {
                price = price + 20
            }
            if (value === '70x70') {
                price = price + 30
            }
            if (value ==='70x100') {
                price = price + 40
            }
            if(value2 === 'Холст из волокна') {
                price = price + 10
            }
            if (value2 === 'Льняной холст') {
                price = price + 20
            }
            if (value2 === 'Холст из натурального хлопка')  {
                price = price + 30
            }
            if(value3 === 'Покрытие арт-гелем'){
                price = price + 10
            }
            if( value3 === 'Экспресс-изготовление') {
                price = price + 20
            }
            if( value3 === 'Доставка готовых работ') {
                price = price + 30
            }
            let promocode = document.getElementById('promocode').value;
            if(promocode === 'IWANTPOPART') {
                price = price * 70 /100
            }
            let priceElement = document.getElementById('calc-price')
            priceElement.textContent = price;
        }
    }
};
export default price