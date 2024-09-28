'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Category } from '@/types/types'

const NewCategoryModal = ({
  categories,
  setCategories,
}: {
  categories: Category[]
  setCategories: (oldCategories: Category[]) => void
}) => {
  const [newCategory, setNewCategory] = useState<{
    title: string
    image: string | null
  }>({ title: '', image: null })

  const handleCreateCategory = () => {
    console.log('Creando nueva categoría:', newCategory)
    setCategories([...categories, newCategory])
    setNewCategory({ title: '', image: null })
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setNewCategory({ ...newCategory, image: URL.createObjectURL(file) })
    }
  }
  return (
    <div className='py-4'>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant='default'
            className='w-full'
          >
            Crear Nueva Categoría
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crear Nueva Categoría</DialogTitle>
            <DialogDescription>
              Ingrese el nombre y suba una imagen para la nueva categoría.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label
                htmlFor='name'
                className='text-right'
              >
                Nombre
              </Label>
              <Input
                id='name'
                value={newCategory.title}
                onChange={(e) =>
                  setNewCategory({
                    ...newCategory,
                    title: e.target.value,
                  })
                }
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label
                htmlFor='image'
                className='text-right'
              >
                Imagen
              </Label>
              <Input
                id='image'
                type='file'
                accept='image/*'
                onChange={handleImageUpload}
                className='col-span-3'
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleCreateCategory}>Crear Categoría</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default NewCategoryModal
