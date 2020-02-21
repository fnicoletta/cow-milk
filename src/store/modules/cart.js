import { cookieFunctions } from "@/mixins/cookiesMixin"

// initial state
const state = {
	cart: [],
	saved: []
}

// getters
const getters = {
	getCart(state) {
		return state.cart
	},
	getSaved(state) {
		return state.saved
	}
}

// actions
const actions = {
	addToCart({ commit }, cartItem) {
		let temp = []
		if (!state.cart.length) {
			temp = [...temp, cartItem]
			commit("setCart", temp)
			return
		}

		temp = state.cart
		let exists = temp.find(items => items.cartID === cartItem.cartID)
		if (exists) {
			exists.quantity = Number(cartItem.quantity) + Number(exists.quantity)
		} else {
			temp = [...temp, cartItem]
		}
		commit("setCart", temp)
	},
	saveCart() {
		cookieFunctions.setCookie("cart", JSON.stringify(state.cart), 99999)
	},
	storeSavedItems() {
		cookieFunctions.setCookie("saved", JSON.stringify(state.saved), 99999)
	},

	removeItem({ commit }, cartId) {
		let temp = state.cart.filter(items => items.cartID !== cartId)
		commit("setCart", temp)
	},

	saveItem({ commit, dispatch }, cartId) {
		let temp = state.cart.filter(items => items.cartID == cartId)
		commit("setSaved", temp)
		dispatch("removeItem", cartId)
		dispatch("saveCart")
	}
}

// mutations
const mutations = {
	setCart(state, cart) {
		state.cart = cart
	},
	setSaved(state, savedItem) {
		state.saved = [...state.saved, savedItem]
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
