export default {
   methods: {
      setCurrencyType(country, currencyType) {
         const number = Math.random() * (20 - 7) + 7

         return new Intl.NumberFormat(country, {
            style: 'currency',
            currency: currencyType,
         }).format(number)
      },
   },
}