const symbols = [
    {
        symbol : 'BNBUSDT', // Валютная пара
        tradeSym : 'BNB', // Валюта для торговли
        baseSym : 'USDT', // Базовая валюта
        minSum : 0.001, // Минимально допустимое количество валюты для торговли
        lifeTime : 15, // Время жизни ордера на покупку в минутах
        razryad : 4, // Количество знаков в цене после запятой
        razryadQ : 3, // Количество знаков в цене после запятой в количестве
    },
    {
        symbol : 'LINKUSDT', // Валютная пара
        tradeSym : 'LINK', // Валюта для торговли
        baseSym : 'USDT', // Базовая валюта
        minSum : 0.001, // Минимально допустимое количество валюты для торговли
        razryad : 4, // Количество знаков в цене после запятой
        razryadQ : 2, // Количество знаков в цене после запятой в количестве
    },
    {
        symbol : 'ETHUSDT', // Валютная пара
        tradeSym : 'ETH', // Валюта для торговли
        baseSym : 'USDT', // Базовая валюта
        minSum : 0.00001, // Минимально допустимое количество валюты для торговли
        razryad : 2, // Количество знаков в цене после запятой
        razryadQ : 5, // Количество знаков в цене после запятой в количестве
    },
    {
        symbol : 'BTCUSDT', // Валютная пара
        tradeSym : 'BTC', // Валюта для торговли
        baseSym : 'USDT', // Базовая валюта
        minSum : 0.00001, // Минимально допустимое количество валюты для торговли
        razryad : 2, // Количество знаков в цене после запятой
        razryadQ : 6, // Количество знаков в цене после запятой в количестве
    },
]

module.exports = symbols