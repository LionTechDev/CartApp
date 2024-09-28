/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import IaGenerate from './IaGenerate'
import GoBackButton from './GoBackButton'
import NewCategoryModal from './NewCategoryModal'
import { Category } from '@/types/types'

function Sidebar() {
  const [categories, setCategories] = useState<Category[]>([
    {
      title: 'Pizzas',
      image:
        'https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Categoría 2',
      image: '/placeholder.svg?height=100&width=200',
    },
    {
      title: 'Categoría 3',
      image: '/placeholder.svg?height=100&width=200',
    },
  ])
  const [selectedCategory, setSelectedCategory] = useState(categories[0].title)

  const moveCategory = (index: number, direction: 'up' | 'down') => {
    const newCategories = [...categories]
    if (direction === 'up' && index > 0) {
      ;[newCategories[index - 1], newCategories[index]] = [
        newCategories[index],
        newCategories[index - 1],
      ]
    } else if (direction === 'down' && index < categories.length - 1) {
      ;[newCategories[index], newCategories[index + 1]] = [
        newCategories[index + 1],
        newCategories[index],
      ]
    }
    setCategories(newCategories)
  }

  return (
    <section className='w-full md:h-screen flex flex-col'>
      <div className='flex flex-col flex-1 pb-4'>
        <GoBackButton />
        <NewCategoryModal
          categories={categories}
          setCategories={setCategories}
        />
        <ScrollArea>
          {categories.map(({ title }, index) => {
            return (
              <div
                key={title}
                className='flex items-center gap-4 mb-1'
              >
                <Button
                  variant='ghost'
                  className={`flex-grow justify-start h-12 ${
                    selectedCategory === title ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => setSelectedCategory(title)}
                >
                  {title}
                </Button>
                <div className='flex flex-col'>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='h-6 w-6'
                    onClick={() => moveCategory(index, 'up')}
                    disabled={index === 0}
                  >
                    <ChevronUp className='h-4 w-4' />
                  </Button>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='h-6 w-6'
                    onClick={() => moveCategory(index, 'down')}
                    disabled={index === categories.length - 1}
                  >
                    <ChevronDown className='h-4 w-4' />
                  </Button>
                </div>
              </div>
            )
          })}
        </ScrollArea>
      </div>

      <IaGenerate />
    </section>
  )
}

export default Sidebar
