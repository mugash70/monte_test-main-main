import { ref } from 'vue'
// Import pdfjs-dist with proper type support
import * as pdfjsLib from 'pdfjs-dist'

// Configure pdf.js worker
const workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString()
pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc

export const usePdfRenderer = () => {
  const pdfContainer = ref<HTMLDivElement | null>(null)

  const renderPdf = async (url: string) => {
    const loadingTask = pdfjsLib.getDocument(url)
    const pdf = await loadingTask.promise

    const container = pdfContainer.value
    if (!container) return

    container.innerHTML = ''

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum)
      const viewport = page.getViewport({ scale: 1.2 })

      const canvas = document.createElement('canvas')
      canvas.style.marginBottom = '1rem'
      const context = canvas.getContext('2d')!
      canvas.height = viewport.height
      canvas.width = viewport.width

      await page.render({ canvasContext: context, viewport }).promise
      container.appendChild(canvas)
    }
  }

  return { pdfContainer, renderPdf }
}
