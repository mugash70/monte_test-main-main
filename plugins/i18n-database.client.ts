// Client-side plugin to load translations from database
export default defineNuxtPlugin(async () => {
  const { $i18n } = useNuxtApp();
  
  // Helper function to convert flat key-value pairs to nested object
  function buildNestedObject(translations: Array<{ key: string; value: string }>): Record<string, any> {
    const result: Record<string, any> = {};
    
    for (const { key, value } of translations) {
      const keys = key.split('.');
      let current = result;
      
      for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        if (!(k in current)) {
          current[k] = {};
        }
        current = current[k];
      }
      
      current[keys[keys.length - 1]] = value;
    }
    
    return result;
  }
  
  try {
    // Fetch translations from API using fetch instead of $fetch to avoid TypeScript issues
    const fetchResponse = await fetch('/api/i18n/translations');
    const response = await fetchResponse.json() as {
      success: boolean;
      data: Record<string, Array<{ key: string; value: string }>>;
      error?: string;
    };
    
    if (response.success && response.data) {
      const translationsByLocale = response.data;
      
      // Load messages for each locale
      for (const [locale, translations] of Object.entries(translationsByLocale)) {
        if (['en', 'mn', 'ch'].includes(locale)) {
          const nestedMessages = buildNestedObject(translations);
          
          // Set messages for this locale
          $i18n.setLocaleMessage(locale, nestedMessages);
        }
      }
      
      console.log('✅ Translations loaded from database');
    }
  } catch (error) {
    console.warn('❌ Failed to load translations from database:', error);
  }
});
