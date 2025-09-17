'use client'

import React, { useState, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, FileText, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'

interface NewsItem {
  id: string
  title: string
  description?: string
  category: string
  date: string
  link: string
  image?: string
}

interface NewsSectionProps {
  title?: string
  subtitle?: string
  limit?: number
  showCategoryFilter?: boolean
  categoriesToShow?: string[]
  layout?: 'grid' | 'list' | 'carousel'
}

const categoryInfo = {
  announcement: { label: 'Announcement', bgColor: 'bg-blue-100', color: 'text-blue-800' },
  event: { label: 'Event', bgColor: 'bg-green-100', color: 'text-green-800' },
  update: { label: 'Update', bgColor: 'bg-yellow-100', color: 'text-yellow-800' },
  newsletter: { label: 'Newsletter', bgColor: 'bg-purple-100', color: 'text-purple-800' },
  report: { label: 'Report', bgColor: 'bg-red-100', color: 'text-red-800' },
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  title = 'Latest News & Updates',
  subtitle,
  limit = 6,
  showCategoryFilter = true,
  categoriesToShow = ['announcement', 'event', 'update', 'newsletter', 'report'],
  layout = 'grid',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [news] = useState<NewsItem[]>([
    // This would come from your API in a real implementation
    {
      id: '1',
      title: 'New School Policy Announcement',
      description: 'Important updates to our school policies for the upcoming academic year.',
      category: 'announcement',
      date: '2024-03-15',
      link: '/documents/policy-update.pdf',
    },
    {
      id: '2',
      title: 'Annual Sports Day Event',
      description: 'Join us for our annual sports day celebration on March 25th.',
      category: 'event',
      date: '2024-03-10',
      link: '/events/sports-day',
    },
    // Add more mock data or fetch from API
  ])

  const filteredNews = useMemo(() => {
    let filtered = news

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    if (limit > 0) {
      filtered = filtered.slice(0, limit)
    }

    return filtered
  }, [news, selectedCategory, limit])

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy')
  }

  const getGridClass = () => {
    switch (layout) {
      case 'grid':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
      case 'list':
        return 'space-y-4'
      case 'carousel':
        return 'flex overflow-x-auto space-x-4 pb-4'
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
    }
  }

  const getCardClass = () => {
    switch (layout) {
      case 'carousel':
        return 'min-w-[300px]'
      default:
        return ''
    }
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
        </div>

        {showCategoryFilter && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All News
            </button>
            {categoriesToShow.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? `${categoryInfo[category as keyof typeof categoryInfo].bgColor} ${categoryInfo[category as keyof typeof categoryInfo].color}`
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {categoryInfo[category as keyof typeof categoryInfo].label}
              </button>
            ))}
          </div>
        )}

        <div className={getGridClass()}>
          {filteredNews.map((news) => {
            const info = categoryInfo[news.category as keyof typeof categoryInfo]

            return (
              <Card
                key={news.id}
                className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 ${getCardClass()}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${info.bgColor} ${info.color}`}
                    >
                      {info.label}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(news.date)}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {news.description && (
                    <CardDescription className="mb-4 line-clamp-3">
                      {news.description}
                    </CardDescription>
                  )}
                  <Button asChild variant="outline" className="w-full">
                    <a href={news.link} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      View Document
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No news items found.</p>
          </div>
        )}
      </div>
    </section>
  )
}
