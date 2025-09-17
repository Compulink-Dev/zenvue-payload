import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

type GridColumn = {
  id?: string
  width?: 'full' | 'half' | 'third' | 'twoThirds'
  alignment?: 'left' | 'center' | 'right'
  content?: any
}

export const GridBlock: React.FC<any> = (props) => {
  // Extract the columns from props (they might be nested in the block data)
  const columns = props.columns || props.block?.columns

  const colSpanClasses: Record<string, string> = {
    full: '12',
    half: '6',
    third: '4',
    twoThirds: '8',
  }

  if (!columns || !Array.isArray(columns) || columns.length === 0) {
    return <div>No columns configured</div>
  }

  return (
    <div className="container my-16">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
        {columns.map((col, i) => (
          <div
            key={col.id || i}
            className={cn(`col-span-4 lg:col-span-${colSpanClasses[col.width || 'full']}`, {
              'text-left': col.alignment === 'left',
              'text-center': col.alignment === 'center',
              'text-right': col.alignment === 'right',
            })}
          >
            {col.content && <RichText data={col.content} enableGutter={false} />}
          </div>
        ))}
      </div>
    </div>
  )
}
