<script setup lang="ts">
import {useAccountsStore} from "../store/accoutsStore.ts";
import BaseInput from "../ui/BaseInput.vue";
import {onMounted} from "vue";
import BaseSelect from "../ui/BaseSelect.vue";

const accountsStore = useAccountsStore();

onMounted(() => {
  if (!accountsStore.accounts.length) {
    accountsStore.addAccount()
  }
})
</script>

<template>
<div class="accountsList" v-for="account in accountsStore.accounts" :key="account.id">
  <BaseInput v-model="account.label"/>
  <BaseSelect v-model="account.type"/>
  <BaseInput v-model="account.login"/>
  <BaseInput v-model="account.password"/>
</div>
</template>

<style scoped>

</style>