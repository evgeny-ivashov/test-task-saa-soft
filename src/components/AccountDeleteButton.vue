<script setup lang="ts">
interface DeleteButtonProps {
  id: number
}

defineProps<DeleteButtonProps>()

import {useAccountsStore} from "../store/accoutsStore.ts";

const accountsStore = useAccountsStore();
</script>

<template>
<button @click="accountsStore.removeAccount(id)">Удалить &#128163;</button>
</template>

<style scoped>

</style>