<script setup lang="ts">
import {useAccountsStore} from "../store/accoutsStore.ts";
import {computed} from "vue";
import AccountItem from "./AccountItem.vue";

const accountsStore = useAccountsStore();

const hasPassword = computed(() =>
    accountsStore.accounts.some((account) => account.type === 'Локальная')
)
</script>

<template>
<div class="accountList">
  <ul class="titles" v-if="accountsStore.accounts.length">
    <li>Метки</li>
    <li>Тип записи</li>
    <li>Логин</li>
    <li v-if="hasPassword">Пароль</li>
  </ul>
  <AccountItem/>
</div>
</template>

<style scoped>
.accountList {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .titles {
    display: flex;
    list-style: none;
    gap: 16px;

    li {
      width: 190px;
    }
  }
}
</style>