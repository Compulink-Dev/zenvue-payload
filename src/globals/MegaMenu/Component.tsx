// components/MegaMenu/MegaMenu.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface MegaMenuLink {
  type?: 'reference' | 'custom'
  url?: string | null
  label?: string | null
  newTab?: boolean | null
  reference?: { slug?: string } | string | null
}

interface MegaMenuItem {
  link?: MegaMenuLink
  description?: string | null
  featuredImage?: { url?: string | null; alt?: string | null } | string | null
}

export interface MegaMenuType {
  nav: MegaMenuItem[]
}

interface MegaMenuProps {
  menuData: MegaMenuType | null
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ menuData }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  if (!menuData?.nav || menuData.nav.length === 0) {
    return null
  }

  const handleMenuEnter = (index: string) => {
    setActiveMenu(index)
    setIsOpen(true)
  }

  const handleMenuLeave = () => {
    setIsOpen(false)
    setActiveMenu(null)
  }

  const renderLink = (item: any) => {
    if (item.link?.type === 'reference' && item.link.reference) {
      return `/${typeof item.link.reference === 'object' ? item.link.reference.slug : ''}`
    }
    if (item.link?.type === 'custom' && item.link.url) {
      return item.link.url
    }
    return '#'
  }

  const getLinkProps = (item: any) => {
    if (item.link?.newTab) {
      return { target: '_blank', rel: 'noopener noreferrer' }
    }
    return {}
  }

  return (
    <div className="relative group" onMouseLeave={handleMenuLeave}>
      {/* Mega Menu Trigger */}
      <button
        onMouseEnter={() => setIsOpen(true)}
        className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
      >
        Menu
      </button>

      {/* Mega Menu Dropdown */}
      {isOpen && (
        <div className="absolute left-0 w-screen max-w-6xl bg-white shadow-2xl border-t border-gray-200 z-50">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuData.nav.map((item, index) => (
                <div
                  key={index}
                  className="group/menu-item"
                  onMouseEnter={() => handleMenuEnter(index.toString())}
                >
                  {/* Menu Item Header */}
                  <div className="mb-4">
                    <Link
                      href={renderLink(item)}
                      {...getLinkProps(item)}
                      className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {item.link?.label || 'Untitled'}
                    </Link>
                    {item.description && (
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    )}
                  </div>

                  {/* Featured Image */}
                  {item.featuredImage && typeof item.featuredImage === 'object' && (
                    <div className="mb-3">
                      <Image
                        src={item.featuredImage.url || '/placeholder-image.jpg'}
                        alt={item.featuredImage.alt || item.link?.label || 'Menu image'}
                        width={200}
                        height={120}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  )}

                  {/* Sub-items could be added here */}
                  <div className="space-y-2">
                    {/* Example sub-items - you might want to add actual sub-menu data */}
                    <Link
                      href="#"
                      className="block text-sm text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      View All
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
