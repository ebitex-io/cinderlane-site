import { createContentClient } from '@ebitex/content-sdk'
import { ContentProvider, Experience } from '@ebitex/content-sdk/react'
import { EbitexMarkdown, EbitexProvider, ebitexRenderers } from '@ebitex/starter-kit-react/react'

const content = createContentClient({ apiKey: import.meta.env.VITE_CONTENT_DELIVERY_KEY })

export default function App() {
  return (
    <EbitexProvider client={content}>
      <ContentProvider client={content} renderers={ebitexRenderers()} markdown={EbitexMarkdown}>
        <Experience path={window.location.pathname} />
      </ContentProvider>
    </EbitexProvider>
  )
}
