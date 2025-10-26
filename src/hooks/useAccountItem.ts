import {type Account, useAccountsStore} from "../store/accoutsStore.ts";
import {onMounted} from "vue";

export const useAccountItem = () => {
    const accountsStore = useAccountsStore();

    const updateField = <K extends keyof Account>(
        id: number,
        field: K,
        value: Account[K]
    ) => {
        const account = accountsStore.accounts.find(a => a.id === id);
        if (!account) return;

        if (field === 'label') {
            const labelList = (value as string).split(';').map((text) => ({text}));
            accountsStore.updateAccount(id, {label: labelList});
        } else {
            accountsStore.updateAccount(id, {[field]: value});
        }

        const isLogin = account.login !== "";
        const isPassword = account.type === "LDAP" || (account.password && account.password !== "");

        if (isLogin && isPassword) {
            accountsStore.showSuccess(true);
            accountsStore.saveToLocalStorage();

            setTimeout(() => accountsStore.showSuccess(false), 1000);
        }
    };

    onMounted(() => {
        accountsStore.loadFromLocalStorage();

        if (!accountsStore.accounts.length) {
            accountsStore.addAccount()
        }
    })

    return {
        updateField
    }
}