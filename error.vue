<template>
  <div class="error-page">
    <div class="error-container">
      <div class="error-content">
        <h1 class="error-code">{{ error.statusCode }}</h1>
        <h2 class="error-message">{{ errorMessage }}</h2>
        <p class="error-description">{{ errorDescription }}</p>
        
        <div class="error-actions">
          <button @click="handleError" class="btn btn-primary">
            {{ t('error.goHome') }}
          </button>
          <button @click="refresh" class="btn btn-secondary">
            {{ t('error.refresh') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface NuxtError {
  statusCode: number
  statusMessage?: string
  message?: string
}

const props = defineProps<{
  error: NuxtError
}>()

const errorMessage = computed(() => {
  switch (props.error.statusCode) {
    case 404:
      return t('error.notFound')
    case 500:
      return t('error.serverError')
    default:
      return props.error.statusMessage || t('error.generic')
  }
})

const errorDescription = computed(() => {
  switch (props.error.statusCode) {
    case 404:
      return t('error.notFoundDescription')
    case 500:
      return t('error.serverErrorDescription')
    default:
      return props.error.message || t('error.genericDescription')
  }
})

const handleError = () => {
  clearError({ redirect: '/' })
}

const refresh = () => {
  clearError()
}
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-family: 'Arial', sans-serif;
}

.error-container {
  text-align: center;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
}

.error-content {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.error-code {
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.error-message {
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: 300;
}

.error-description {
  font-size: 1.1rem;
  margin: 1.5rem 0 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: #4CAF50;
  color: white;
}

.btn-primary:hover {
  background: #45a049;
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .error-code {
    font-size: 4rem;
  }
  
  .error-message {
    font-size: 1.5rem;
  }
  
  .error-content {
    padding: 2rem 1rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 200px;
  }
}
</style>
