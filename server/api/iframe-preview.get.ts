// Mock API - no database needed for preview

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { page, locale, key, value } = query
  
  // In a real implementation, this would:
  // 1. Fetch the actual page HTML
  // 2. Temporarily replace the translation for the key
  // 3. Return the modified HTML with the translation applied
  
  // For demo purposes, we'll return a mock HTML snippet
  const mockHtml = getMockHtml(String(page), String(locale), String(key), String(value))
  
  return mockHtml
})

function getMockHtml(page: string, locale: string, key: string, value: string) {
  // This is a simplified mock - in a real app, you'd have actual page templates
  
  // Common styles for all pages
  const commonStyles = `
    body { font-family: system-ui, sans-serif; margin: 0; padding: 0; }
    .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(to right, #2563eb, #7c3aed); color: white; padding: 20px; }
    .content { padding: 20px 0; }
    .footer { background: #f3f4f6; padding: 20px; margin-top: 20px; }
    .highlight { background: rgba(59, 130, 246, 0.1); border: 1px dashed #3b82f6; }
  `
  
  // Page-specific content
  let pageContent = ''
  
  if (page === 'responsibility-monte' && key === 'responsibility.top.description') {
    pageContent = `
      <div class="header">
        <div class="container">
          <h1>Corporate Responsibility</h1>
        </div>
      </div>
      <div class="container content">
        <h2>Our Commitment</h2>
        <div class="top-description highlight">
          ${value}
        </div>
        <div style="margin-top: 20px;">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    `
  } else if (page === 'company-profile' && key === 'company.about.mission') {
    pageContent = `
      <div class="header">
        <div class="container">
          <h1>Company Profile</h1>
        </div>
      </div>
      <div class="container content">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h3>Our Mission</h3>
        <div class="mission-statement highlight">
          ${value}
        </div>
      </div>
    `
  } else if (page === 'coal-industry' && key === 'products.coal.description') {
    pageContent = `
      <div class="header">
        <div class="container">
          <h1>Coal Industry</h1>
        </div>
      </div>
      <div class="container content">
        <div class="product-image" style="float: left; margin-right: 20px; width: 200px; height: 150px; background-color: #ddd;"></div>
        <div class="product-description highlight">
          ${value}
        </div>
        <div style="clear: both; margin-top: 20px;">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    `
  } else {
    pageContent = `
      <div class="header">
        <div class="container">
          <h1>Page Preview</h1>
        </div>
      </div>
      <div class="container content">
        <p>No preview available for this key on this page.</p>
      </div>
    `
  }
  
  // Return the complete HTML
  return `
    <!DOCTYPE html>
    <html lang="${locale}">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Preview</title>
      <style>${commonStyles}</style>
    </head>
    <body>
      ${pageContent}
    </body>
    </html>
  `
}