<script setup lang="ts">
import AddAccount from "./components/AddAccount.vue";
import SubstrateInfoForLoginAndPass from "./components/SubstrateInfoForLoginAndPass.vue";
import AccountList from "./components/AccountList.vue";
import AccountItem from "./components/AccountItem.vue";
import {useAccountsStore} from "./store/accoutsStore.ts";
import AccountSuccess from "./components/AccountSuccess.vue";

const accountsStore = useAccountsStore();
</script>

<template>
  <AddAccount/>
  <SubstrateInfoForLoginAndPass v-if="accountsStore.accounts.length" />
  <AccountList>
    <AccountItem/>
  </AccountList>
  <AccountSuccess :isVisible="accountsStore.isSuccess"/>
</template>

<style scoped>
</style>
