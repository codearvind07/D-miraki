'use client'

import React, { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { useTheme } from '@/components/theme-provider'

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })

interface Props {
  content: string
  onChange: (content: string) => void
}

const JoditTextEditor: React.FC<Props> = ({ content, onChange }) => {
  const theme = useTheme()
  const editor = useRef(null)
  const [value, setValue] = useState(content)

  return (
    <div className="border rounded p-2">
      <JoditEditor
        ref={editor}
        value={value}
        config={{
          readonly: false,
          height: 400,
          toolbarSticky: false,
          placeholder: 'Start typing...',
          style: {
            background: '#1e1e2f',
            color: '#f0f0f0',
          },
        }}
        className="bg-transparent"
        onBlur={(newContent) => {
          setValue(newContent)
          onChange(newContent)
        }}
      />
    </div>
  )
}

export default JoditTextEditor
