export default {
   data() {
      return {
         exchangeRates: {
            USA: 1,
            Europe: .9,
            UK: .76,
            Mexico: 18.84,
            Canada: 1.32,
            Palestine: 3.45,
            Thailand: 32.21
         }
      }
   },
   methods: {
      setCurrencyType(countryCode, currencyType, country) {
         const price = Math.random() * (20 - 7) + 7

         return new Intl.NumberFormat(countryCode, {
            style: 'currency',
            currency: currencyType,
         }).format((1 * this.exchangeRates[country]) * price)
      },
   },
}