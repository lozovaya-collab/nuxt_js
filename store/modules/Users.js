const state = {
    users: [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
        { id: 4, name: "User 4" },
        { id: 5, name: "User 5" },
        { id: 6, name: "User 6" },
        { id: 7, name: "User 7" },
    ]
};

const getters = {
    GET_USERS(state) {
        return state.users;
    }
};
const mutations = {};
const actions = {};

export default { state, getters, mutations, actions, nampespaced: true }
