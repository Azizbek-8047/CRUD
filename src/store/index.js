import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: () => ({
        list: [{
                id: 1,
                title: 'Luce',
                username: 'user_luce',
                email: 'luce@gmail.com',
                phone: '564585'
            },
            {
                id: 2,
                title: 'Walker',
                username: 'user_walker',
                email: 'walker@gmail.com',
                phone: '595689'
            },
            {
                id: 3,
                title: 'Solis',
                username: 'user_solis',
                email: 'solis@gmail.com',
                phone: '897845'

            },
            {
                id: 4,
                title: 'Emilia',
                username: 'user_emilia',
                email: 'emilia@gmail.com',
                phone: '546654'
            },
            {
                id: 5,
                title: 'Campos',
                username: 'user_campos',
                email: 'campos@gmail.com',
                phone: '564585'
            },
            {
                id: 6,
                title: 'Travis',
                username: 'user_campos',
                email: 'campos@gmail.com',
                phone: '564585'
            },
            {
                id: 7,
                title: 'Berger',
                username: 'user_berger',
                email: 'berger@gmail.com',
                phone: '568925'
            },
            {
                id: 8,
                title: 'Nevaeh',
                username: 'user_nevaeh',
                email: 'nevaeh@gmail.com',
                phone: '852545'
            },
            {
                id: 9,
                title: 'Kent',
                username: 'user_kent',
                email: 'kent@gmail.com',
                phone: '457845'
            },
            {
                id: 10,
                title: 'Allison',
                username: 'user_allison',
                email: 'allison@gmail.com',
                phone: '898785'
            },
            {
                id: 11,
                title: 'Santana',
                username: 'user_santana',
                email: 'santana@gmail.com',
                phone: '985823'
            },
            {
                id: 12,
                title: 'James',
                username: 'user_james',
                email: 'james@gmail.com',
                phone: '982545'
            },
            {
                id: 13,
                title: 'Robbins',
                username: 'user_robbins',
                email: 'robbins@gmail.com',
                phone: '568925'
            },
            {
                id: 14,
                title: 'Marley',
                username: 'user_marley',
                email: 'marley@gmail.com',
                phone: '982345'
            },
            {
                id: 15,
                title: 'Watkins',
                username: 'user_watkins',
                email: 'watkins@gmail.com',
                phone: '895825'
            },
            {
                id: 16,
                title: 'Zaniyah',
                username: 'user_zaniyah',
                email: 'zaniyah@gmail.com',
                phone: '852545'
            },
            {
                id: 17,
                title: 'Fernandez',
                username: 'user_fernandez',
                email: 'fernandez@gmail.com',
                phone: '852545'
            },
            {
                id: 18,
                title: 'Isabelle',
                username: 'user_isabelle',
                email: 'isabelle@gmail.com',
                phone: '852545'
            },
            {
                id: 19,
                title: 'Callahan',
                username: 'user_callahan',
                email: 'callahan@gmail.com',
                phone: '852545'
            },
            {
                id: 20,
                title: 'Demarion',
                username: 'user_demarion',
                email: 'demarion@gmail.com',
                phone: '852545'
            },
            {
                id: 21,
                title: 'Galloway',
                username: 'user_galloway',
                email: 'galloway@gmail.com',
                phone: '852545'
            },
            {
                id: 22,
                title: 'Annalise',
                username: 'user_annalise',
                email: 'annalise@gmail.com',
                phone: '874877'
            },
            {
                id: 23,
                title: 'Olsen',
                username: 'user_olsen',
                email: 'olsen@gmail.com',
                phone: '458545'
            },
            {
                id: 24,
                title: 'Oscar',
                username: 'user_oscar',
                email: 'oscar@gmail.com',
                phone: '895845'
            },
            {
                id: 25,
                title: 'Mcneil',
                username: 'user_mcneil',
                email: 'mcneil@gmail.com',
                phone: '369646'
            },
            {
                id: 26,
                title: 'Twinkly',
                username: 'user_twinkly',
                email: 'twinkly@gmail.com',
                phone: '129858'
            },
            {
                id: 27,
                title: 'Kirby',
                username: 'user_kiirby',
                email: 'kiirby@gmail.com',
                phone: '654585'
            },
            {
                id: 28,
                title: 'Drake',
                username: 'user_drake',
                email: 'drake@gmail.com',
                phone: '394955'
            },
            {
                id: 29,
                title: 'Einstein',
                username: 'user_einstein',
                email: 'einstein@gmail.com',
                phone: '282529'
            },
            {
                id: 30,
                title: 'Tater',
                username: 'user_tater',
                email: 'tater@gmail.com',
                phone: '123456'
            },
            {
                id: 31,
                title: 'Kirby',
                username: 'user_kirby',
                email: 'kirby@gmail.com',
                phone: '987655'
            },
            {
                id: 32,
                title: 'Drake',
                username: 'user_drake',
                email: 'drake@gmail.com',
                phone: '586945'
            },
            {
                id: 33,
                title: 'Einstein',
                username: 'user_einstein',
                email: 'einstein@gmail.com',
                phone: '987654'
            },
            {
                id: 34,
                title: 'Luce',
                username: 'user_luce',
                email: 'luce@gmail.com',
                phone: '564857'
            },
        ],
        result: []
    }),
    getters: {
        getList(state) {
            return state.list
        },
        getCount(state) {
            return state.result.length
        },
        getResult(state) {
            return state.result
        }
    },
    mutations: {
        filter(state, payload) {
            state.result = state.list.filter(el => el.title.toLocaleLowerCase().includes(payload.toLocaleLowerCase()))
        }
    }
})

export default store