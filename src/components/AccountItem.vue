<script setup lang="ts">
import {useAccountsStore} from "../store/accoutsStore.ts";
import BaseInput from "../ui/BaseInput.vue";
import {onMounted} from "vue";
import BaseSelect from "../ui/BaseSelect.vue";
import AccountDeleteButton from "./AccountDeleteButton.vue";

const accountsStore = useAccountsStore();

onMounted(() => {
  if (!accountsStore.accounts.length) {
    accountsStore.addAccount()
  }
})
</script>

<template>
  <div class="accountItem" v-for="account in accountsStore.accounts" :key="account.id">
    <BaseInput v-model="account.label" :name="account.label"/>
    <BaseSelect v-model="account.type"/>
    <BaseInput v-model="account.login" :name="account.login"/>
    <BaseInput
        v-if="account.type === 'Локальная'"
        v-model="account.password"
        type="password"
        name="password"
    />
    <AccountDeleteButton :id="account.id" />
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