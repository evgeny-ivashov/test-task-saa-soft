<script setup lang="ts">
import {type Account, useAccountsStore} from "../store/accoutsStore.ts";
import BaseInput from "../ui/BaseInput.vue";
import {onMounted} from "vue";
import BaseSelect from "../ui/BaseSelect.vue";
import AccountDeleteButton from "./AccountDeleteButton.vue";

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
    accountsStore.updateAccount(id, { label: labelList });
  } else {
    accountsStore.updateAccount(id, {[field]: value});
  }


  const isLogin = account.login !== "";
  const isPassword = account.type === "LDAP" || (account.password && account.password !== "");

  if (isLogin && isPassword) accountsStore.saveToLocalStorage();
};

onMounted(() => {
  accountsStore.loadFromLocalStorage();

  if (!accountsStore.accounts.length) {
    accountsStore.addAccount()
  }
})
</script>

<template>
  <div class="accountItem" v-for="account in accountsStore.accounts" :key="account.id">
    <BaseInput
        v-model="account.label"
        name="label"
        placeholder="Введите метки через ;"
        :maxlength="50"
        @blur="updateField(account.id, 'label', account.label)"
    />
    <BaseSelect
        v-model="account.type"
    />
    <BaseInput
        required
        v-model="account.login"
        name="login"
        placeholder="Введите логин"
        :maxlength="100"
        @blur="updateField(account.id, 'login', account.login)"
    />
    <BaseInput
        required
        v-if="account.type === 'Локальная'"
        v-model="account.password"
        type="password"
        name="password"
        placeholder="Введите пароль"
        :maxlength="100"
        @blur="updateField(account.id, 'password', account.password)"
    />
    <AccountDeleteButton :id="account.id"/>
  </div>
</template>

<style scoped>
.accountItem {
  display: flex;
  gap: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid;
  width: fit-content;
}
</style>