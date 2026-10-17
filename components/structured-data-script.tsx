'use client'

interface StructuredDataScriptProps {
  data: object
  id?: string
}

/** JSON-LD in the server-rendered HTML. Client pages can import this; do not inject it after hydration. */
export default function StructuredDataScript({ data, id = 'structured-data' }: StructuredDataScriptProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
