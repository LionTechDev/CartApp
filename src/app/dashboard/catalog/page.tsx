/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { ChevronLeft, Plus, Trash2, Edit, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { ScrollArea } from '@/components/ui/scroll-area'
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
import Image from 'next/image'

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState('Categoría 1')
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState({ type: '', name: '' })
  const [newCategory, setNewCategory] = useState({ name: '', image: null })
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])

  const categories = [
    {
      name: 'Pizzas',
      count: 2,
      image:
        'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=3876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Burguers',
      count: 1,
      image: '/placeholder.svg?height=100&width=200',
    },
    {
      name: 'Sandwiches',
      count: 1,
      image: '/placeholder.svg?height=100&width=200',
    },
  ]

  const products = [
    {
      id: 1,
      name: 'Pizza Peperoni',
      price: '15€',
      description: 'Deliciosa pizza con peperoni y queso mozzarella',
      image:
        'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=3876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Pizzas',
    },
    {
      id: 2,
      name: 'Pasta Carbonara',
      price: '12€',
      description: 'Pasta con salsa carbonara cremosa',
      image: 'https://placehold.co/500x500/EEE/31343C',
      category: 'Pizzas',
    },
    {
      id: 3,
      name: 'Ensalada César',
      price: '8€',
      description: 'Ensalada fresca con pollo y aderezo César',
      image: 'https://placehold.co/500x500/EEE/31343C',
      category: 'Burguers',
    },
    {
      id: 4,
      name: 'Tiramisú',
      price: '6€',
      description: 'Postre italiano con café y mascarpone',
      image: 'https://placehold.co/500x500/EEE/31343C',
      category: 'Sandwiches',
    },
  ]

  const handleDelete = (type, name) => {
    setItemToDelete({ type, name })
    setIsDeleteModalOpen(true)
  }

  const confirmDelete = () => {
    // Aquí iría la lógica para eliminar el item
    console.log(`Eliminando ${itemToDelete.type}: ${itemToDelete.name}`)
    setIsDeleteModalOpen(false)
    setSelectedProducts([])
  }

  const handleCreateCategory = () => {
    // Aquí iría la lógica para crear la nueva categoría
    console.log('Creando nueva categoría:', newCategory)
    setNewCategory({ name: '', image: null })
  }

  const handleProductSelect = (productId: number) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    )
  }

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredProducts = products.filter(
      (p) => p.category === selectedCategory
    )
    if (event.target.checked) {
      setSelectedProducts(filteredProducts.map((p) => p.id))
    } else {
      setSelectedProducts([])
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setNewCategory({ ...newCategory, image: file })
    }
  }

  const filteredProducts = products.filter(
    (p) => p.category === selectedCategory
  )

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
      <div className='w-64 bg-white shadow-md'>
        <div className='p-4 border-b'>
          <Button
            variant='ghost'
            className='w-full justify-start'
          >
            <ChevronLeft className='mr-2 h-4 w-4' />
            Volver
          </Button>
        </div>
        <div className='p-4'>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant='outline'
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
                    value={newCategory.name}
                    onChange={(e) =>
                      setNewCategory({ ...newCategory, name: e.target.value })
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
        <ScrollArea className='h-[calc(100vh-120px)]'>
          {categories.map((category) => (
            <Button
              key={category.name}
              variant='ghost'
              className={`w-full justify-start py-2 px-4 ${
                selectedCategory === category.name
                  ? 'bg-gray-100 rounded-none'
                  : ''
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </ScrollArea>
        <div className='absolute bottom-0 w-64 p-4 border-t bg-white'>
          <Button className='w-full'>Generar carta con IA</Button>
          <p className='text-xs text-gray-500 mt-2 text-center'>
            Con nuestra aplicación puedes crear tu carta en segundos utilizando
            los datos
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 p-8 flex'>
        {/* Left side - Product Management */}
        <div className='w-2/3 pr-4'>
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-2xl font-bold'>{selectedCategory}</h1>
            <Button
              variant='outline'
              onClick={() => handleDelete('categoría', selectedCategory)}
            >
              <Trash2 className='mr-2 h-4 w-4' />
              Eliminar Categoría
            </Button>
          </div>
          <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center'>
              <Checkbox
                id='select-all'
                checked={
                  selectedProducts.length === filteredProducts.length &&
                  filteredProducts.length > 0
                }
                onCheckedChange={handleSelectAll}
              />
              <label
                htmlFor='select-all'
                className='ml-2 text-sm font-medium'
              >
                Seleccionar todo
              </label>
              {selectedProducts.length > 1 && (
                <Button
                  variant='link'
                  className='ml-4'
                  onClick={() =>
                    handleDelete(
                      'productos seleccionados',
                      `${selectedProducts.length} productos`
                    )
                  }
                >
                  Eliminar Productos
                </Button>
              )}
            </div>
            <Button>
              <Plus className='mr-2 h-4 w-4' />
              Agregar Producto
            </Button>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className='overflow-hidden shadow-sm'
              >
                <CardContent className='p-0 relative'>
                  <div className='absolute top-2 left-2 z-10'>
                    <Checkbox
                      className='bg-white/80 border-2 border-black/50'
                      checked={selectedProducts.includes(product.id)}
                      onCheckedChange={() => handleProductSelect(product.id)}
                    />
                  </div>
                  <div className='aspect-square flex items-center justify-center'>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='object-cover aspect-square'
                    />
                  </div>
                </CardContent>
                <CardFooter className='flex flex-col p-2'>
                  <div className='flex justify-between w-full mb-2'>
                    <span className='text-sm font-medium'>{product.name}</span>
                    <span className='text-sm text-gray-600'>
                      {product.price}
                    </span>
                  </div>
                  <div className='flex w-full'>
                    <Button
                      variant='secondary'
                      className='flex-1 mr-1 text-xs py-1 h-8'
                      onClick={() => console.log(`Editando ${product.name}`)}
                    >
                      <Edit className='h-3 w-3 mr-1' />
                      Editar
                    </Button>
                    <Button
                      variant='destructive'
                      className='flex-1 ml-1 text-xs py-1 h-8'
                      onClick={() => handleDelete('producto', product.name)}
                    >
                      <Trash2 className='h-3 w-3 mr-1' />
                      Eliminar
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Right side - Menu Preview */}
        <div className='w-1/3 pl-4'>
          <h2 className='text-xl font-bold mb-4 px-6'>
            Previsualización de la Carta
          </h2>
          <Card className='h-[70vh] border-0 overflow-y-auto'>
            <CardContent className='p-0 rounded-t-xl overflow-hidden'>
              <ScrollArea>
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className='flex flex-col gap-4 pb-4'
                  >
                    <div
                      className='relative py-10 overflow-hidden'
                      style={{
                        backgroundImage: `url(${category.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                        <h3 className='text-xl font-semibold text-white py-4'>
                          {category.name}
                        </h3>
                      </div>
                    </div>
                    {products
                      .filter((p) => p.category === category.name)
                      .map((product) => (
                        <div
                          key={product.id}
                          className='flex items-start px-4 w-full gap-4'
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className='rounded-md object-cover aspect-square max-w-16'
                          />
                          <div>
                            <div className='flex justify-between '>
                              <span className='font-medium'>
                                {product.name}
                              </span>
                            </div>
                            <p className='text-sm text-gray-600'>
                              {product.description}
                            </p>
                          </div>

                          <p>{product.price}</p>
                        </div>
                      ))}
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Dialog
        open={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
      >
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle className='flex items-center gap-2 text-red-600'>
              <AlertTriangle className='h-5 w-5' />
              Confirmar Eliminación
            </DialogTitle>
            <DialogDescription className='text-center pt-4'>
              ¿Está seguro que desea eliminar
              <span className='font-semibold'> {itemToDelete.type}</span>
              {itemToDelete.name && `: ${itemToDelete.name}`}?
              <p className='mt-2 text-red-600'>
                Esta acción no se puede deshacer.
              </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className='sm:justify-center'>
            <Button
              variant='outline'
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              variant='destructive'
              onClick={confirmDelete}
            >
              Eliminar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
