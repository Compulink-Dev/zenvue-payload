import React from 'react'
import { cn } from '@/utilities/ui'

export type SpacerBlockProps = {
  blockType: 'spacer'
  size?: 'small' | 'medium' | 'large'
  // Optional: Add visibility for different screen sizes
  responsive?: boolean
  // Optional: Add custom class names
  className?: string
}

export const SpacerBlock: React.FC<SpacerBlockProps> = ({
  size = 'medium',
  responsive = false,
  className,
}) => {
  const sizeClasses = {
    small: 'h-8 md:h-12', // 32px / 48px on medium screens and up
    medium: 'h-16 md:h-20', // 64px / 80px on medium screens and up
    large: 'h-24 md:h-32', // 96px / 128px on medium screens and up
  }

  const responsiveClasses = responsive
    ? sizeClasses[size]
    : {
        small: 'h-8',
        medium: 'h-16',
        large: 'h-24',
      }[size]

  return <div className={cn(responsiveClasses, className)} aria-hidden="true" role="presentation" />
}
