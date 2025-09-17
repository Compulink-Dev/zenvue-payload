import React from 'react'

import type { CTAGridBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const CTAGridBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <div className="">
      <div className="border-border border ml-[120px] lg:ml-[300px]">
        <div className="">
          <div className="p-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
            <div className="max-w-[48rem] flex items-center">
              {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
            </div>
            <div className="flex flex-col gap-8 mr-24 lg:mr-64">
              {(links || []).map(({ link }, i) => {
                return <CMSLink key={i} {...link} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
