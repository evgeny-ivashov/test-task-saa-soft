<script setup lang="ts">
import {useAccountsStore} from "../store/accoutsStore.ts";

const accountsStore = useAccountsStore();
</script>

<template>
<button class="addAccount" @click="accountsStore.addAccount()">
  Учетные записи +
</button>
</template>

<style scoped lang="scss">
.addAccount {
  font-size: 25px;
  padding: 10px;
  border-radius: 10px;
  background: aliceblue;
  border: 1px solid;
}
</style>