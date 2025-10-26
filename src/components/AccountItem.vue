<script setup lang="ts">
import {useAccountsStore} from "../store/accoutsStore.ts";
import BaseInput from "../ui/BaseInput.vue";
import BaseSelect from "../ui/BaseSelect.vue";
import AccountDeleteButton from "./AccountDeleteButton.vue";
import {useAccountItem} from "../hooks/useAccountItem.ts";

const accountsStore = useAccountsStore();

const {updateField} = useAccountItem()
</script>

<template>
  <div class="accountItem" v-for="account in accountsStore.accounts" :key="account.id">
    <BaseInput
        v-model="account.label"
        name="label"
        placeholder="Введите метки через ;"
        :maxlength="50"
        @blur="updateField(account.id, 'label', $event.target.value)"
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
        @blur="updateField(account.id, 'login', $event.target.value)"
    />
    <BaseInput
        required
        v-if="account.type === 'Локальная'"
        v-model="account.password"
        type="password"
        name="password"
        placeholder="Введите пароль"
        :maxlength="100"
        @blur="updateField(account.id, 'password', $event.target.value)"
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