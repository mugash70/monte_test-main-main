<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="pagination">
    <button @click="$emit('page-change', currentPage - 1)" :disabled="currentPage === 1">&laquo;</button>
    <button
      v-for="page in totalPages"
      :key="page"
      @click="$emit('page-change', page)"
      :class="{ active: currentPage === page }"
    >
      {{ page }}
    </button>
    <button @click="$emit('page-change', currentPage + 1)" :disabled="currentPage === totalPages">&raquo;</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentPage: number
  totalPages: number
}>()
</script>

<style scoped>
.pagination {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination button {
  width: 40px;
  height: 40px;
  border: 1px solid grey;
  background-color: transparent;
  color: #333;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.pagination button.active {
  background-color: red;
  color: white;
  border-color: red;
}

.pagination button:hover:not(.active):not(:disabled) {
  background-color: #f0f0f0;
}

.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Gaps */
.pagination > button {
  margin: 0 0.25rem; /* Small gap for page numbers */
}

.pagination > button:first-child,
.pagination > button:last-child {
  margin: 0 0.75rem; /* Larger gap for arrows */
}

</style>
