<script setup lang="ts">
interface DeleteButtonProps {
  id: number
}

defineProps<DeleteButtonProps>()

import {useAccountsStore} from "../store/accoutsStore.ts";

const accountsStore = useAccountsStore();
</script>

<template>
<button @click="accountsStore.removeAccount(id)">Удалить</button>
</template>

<style scoped>

</style>