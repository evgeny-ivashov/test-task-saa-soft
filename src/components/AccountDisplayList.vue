<script setup lang="ts">
import type {Account} from "../store/accoutsStore.ts";

interface AccountDisplayListProps {
  accounts: Account[]
}

defineProps<AccountDisplayListProps>();

const formatLabel = (account: Account) => {
  if (Array.isArray(account.label)) {
    return account.label.map(l => l.text).join("; ")
  }
  return account.label
}
</script>

<template>
  <table class="accountTable">
    <thead>
    <tr>
      <th>#</th>
      <th>Метки</th>
      <th>Тип записи</th>
      <th>Логин</th>
      <th>Пароль</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(account, index) in accounts" :key="account.id">
      <td>{{ index + 1 }}</td>
      <td v-if="account.label">{{ formatLabel(account) }}</td>
      <td>{{ account.type }}</td>
      <td>{{ account.login }}</td>
      <td v-if="account.password">{{ account.password }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
.accountTable {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid;
  border-radius: 10px;
  background: aliceblue;
  margin-top: 20px;
  overflow: hidden;
}

.accountTable th,
.accountTable td {
  padding: 10px;
  border-bottom: 1px solid;
  text-align: left;
}

.accountTable th {
  background: #d9f0ff;
}

.accountTable tr:last-child td {
  border-bottom: none;
}
</style>