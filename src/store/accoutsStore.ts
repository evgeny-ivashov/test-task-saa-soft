import { defineStore } from 'pinia'

export interface Account {
    id: number
    label: string
    type: 'Локальная' | 'LDAP'
    login: string
    password: string
}

interface State {
    accounts: Account[]
}

export const useAccountsStore = defineStore('accounts', {
    state: (): State => ({
        accounts: [],
    }),
    actions: {
        addAccount() {
            this.accounts.push({
                id: Date.now(),
                label: '',
                type: 'Локальная',
                login: '',
                password: '',
            })
        },
        removeAccount(id: number) {
            this.accounts = this.accounts.filter((a) => a.id !== id)
        },
    },
})
