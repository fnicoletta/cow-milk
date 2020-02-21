import { cookieFunctions } from "@/mixins/cookiesMixin"

const state = {
	currencyCode: {
		countryCode: "us",
		currencyType: "USD",
		country: "USA"
	}
}

const getters = {
	CURRENCY: state => state.currencyCode.currencyType,
	CODE: state => state.currencyCode.countryCode,
	COUNTRY: state => state.currencyCode.country
}

const mutations = {
	setCurrency(state, { countryCode, country, currencyType }) {
		state.currencyCode.countryCode = countryCode
		state.currencyCode.country = country
		state.currencyCode.currencyType = currencyType

		cookieFunctions.setCookie(
			"currencyCode",
			JSON.stringify(state.currencyCode),
			99999
		)
	}
}

const actions = {
	setCurrency(commit, value) {
		commit("setCurrency", value)
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
