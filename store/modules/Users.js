const state = {
    users: []
};

const getters = {
    GET_USERS(state) {
        return state.users;
    }
};
const mutations = {
    SET_USERS(state, payload) {
        state.users = payload;
    }
};
const actions = {
    async getListUser({ commit }) {
        const url = 'https://jsonplaceholder.typicode.com/users';

        const req = await fetch(url);
        const res = await req.json();

        commit("SET_USERS", res);
    }
};

export default { state, getters, mutations, actions, nampespaced: true }