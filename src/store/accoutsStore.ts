import {defineStore} from 'pinia'

export interface Account {
    id: number
    label: string | { text: string }[]
    type: 'Локальная' | 'LDAP'
    login: string
    password: string | null
}

interface State {
    accounts: Account[]
    isSuccess: boolean;
}

const STORAGE_KEY = 'accountsData';

export const useAccountsStore = defineStore('accounts', {
    state: (): State => ({
        accounts: [],
        isSuccess: false,
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
            this.accounts = this.accounts.filter((a) => a.id !== id);
            this.saveToLocalStorage();
        },
        updateAccount(id: number, updated: Partial<Account>) {
            const account = this.accounts.find(a => a.id === id)
            if (!account) return

            Object.assign(account, updated)

            if (account.type === 'LDAP') {
                account.password = null
            }
        },
        saveToLocalStorage() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.accounts))
        },
        loadFromLocalStorage() {
            const saved = localStorage.getItem(STORAGE_KEY)
            if (saved) {
                this.accounts = JSON.parse(saved)
            }
        },
        showSuccess(bool: boolean) {
            this.isSuccess = bool;
        }
    },
})
