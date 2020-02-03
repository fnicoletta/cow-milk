export default {
   data() {
      return {
         exchangeRates: {
            us: {
               rate: 1,
               location: 'us',
               currency: 'USD'
            },
            europe: {
               rate: .9,
               location: 'de',
               currency: 'EUR'
            },
            uk: {
               rate: .76,
               location: 'uk',
               currency: 'GBP'
            },
            mexico: {
               rate: 18.84,
               location: 'mx',
               currency: 'MXN'
            },
            canada: {
               rate: 1.32,
               location: 'ca',
               currency: 'CAD'
            },
            palestine: {
               rate: 3.45,
               location: 'ps',
               currency: 'ILS'
            },
            thailand: {
               rate: 32.21,
               location: 'th',
               currency: 'THB'
            }
         }
      }
   },
   methods: {
      setCurrencyType(countryCode, currencyType, country) {
         const price = Math.random() * (20 - 7) + 7

         return new Intl.NumberFormat(countryCode, {
            style: 'currency',
            currency: currencyType,
         }).format((1 / this.exchangeRates[country].rate) * price)
      },
   },
}