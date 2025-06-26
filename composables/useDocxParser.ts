import { ref } from 'vue'
import mammoth from 'mammoth'

export const useDocxParser = () => {
  const htmlContent = ref<string | null>(null)

  const fetchAndParseDocx = async (url: string) => {
    try {
      const response = await fetch(url)
      const arrayBuffer = await response.arrayBuffer()
      const result = await mammoth.convertToHtml({ arrayBuffer })
      htmlContent.value = result.value
    } catch (error) {
      console.error('Error fetching or parsing DOCX:', error)
      htmlContent.value = '<p>Error loading document</p>'
    }
  }

  return { htmlContent, fetchAndParseDocx }
}
