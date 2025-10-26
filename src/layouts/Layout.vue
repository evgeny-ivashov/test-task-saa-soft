<script setup lang="ts">
import SubstrateInfoForLoginAndPass from "../components/SubstrateInfoForLoginAndPass.vue";
import AccountItem from "../components/AccountItem.vue";
import AccountList from "../components/AccountList.vue";
import AddAccount from "../components/AddAccount.vue";
import AccountSuccess from "../components/AccountSuccess.vue";
import {useAccountsStore} from "../store/accoutsStore.ts";
import AccountDisplayList from "../components/AccountDisplayList.vue";

const accountsStore = useAccountsStore();
</script>

<template>
  <AddAccount/>
  <SubstrateInfoForLoginAndPass v-if="accountsStore.accounts.length"/>
  <AccountList>
    <AccountItem/>
  </AccountList>
  <AccountSuccess :isVisible="accountsStore.isSuccess"/>
  <AccountDisplayList :accounts="accountsStore.accounts"/>
</template>

<style scoped>

</style>