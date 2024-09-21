'use client'
import React, { useState } from 'react'
import { ArrowLeft, Upload, Clock, Plus, X, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'

type TimeSlot = {
  start: string
  end: string
}

type DaySchedule = {
  isOpen: boolean
  timeSlots: TimeSlot[]
}

type Schedule = Record<string, DaySchedule>

export default function Component() {
  const [schedule, setSchedule] = useState<Schedule>({
    Lunes: { isOpen: true, timeSlots: [{ start: '09:00', end: '17:00' }] },
    Martes: { isOpen: true, timeSlots: [{ start: '09:00', end: '17:00' }] },
    Miércoles: { isOpen: true, timeSlots: [{ start: '09:00', end: '17:00' }] },
    Jueves: { isOpen: true, timeSlots: [{ start: '09:00', end: '17:00' }] },
    Viernes: { isOpen: true, timeSlots: [{ start: '09:00', end: '17:00' }] },
    Sábado: { isOpen: false, timeSlots: [] },
    Domingo: { isOpen: false, timeSlots: [] },
  })

  return (
    <div className='min-h-screen bg-gray-50 p-8'>
      <div className='max-w-3xl mx-auto space-y-12'>
        <header className='flex items-center justify-between mb-8'>
          <Link href='/dashboard'>
            <Button
              variant='ghost'
              size='icon'
              className='text-gray-500 hover:text-gray-700'
            >
              <ArrowLeft className='h-6 w-6' />
            </Button>
          </Link>
          <h1 className='text-2xl font-semibold text-gray-800'>
            Información de la cuenta
          </h1>
          <Button className='bg-gray-500 hover:bg-gray-600 text-white'>
            Guardar
          </Button>
        </header>

        <section className='space-y-8'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>
            Información de la Cuenta
          </h2>
          <div className='grid gap-6 md:grid-cols-2'>
            <Input
              placeholder='Usuario'
              className='bg-white border-gray-200'
            />
            <Input
              type='password'
              placeholder='Contraseña'
              className='bg-white border-gray-200'
            />
            <Input
              type='email'
              placeholder='Correo electrónico'
              className='bg-white border-gray-200'
            />
            <Button
              variant='outline'
              className='text-gray-500 hover:bg-gray-50'
            >
              Restablecer contraseña
            </Button>
          </div>
        </section>

        <div className='h-px bg-gray-200' />

        <section className='space-y-8'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>
            Información del Establecimiento
          </h2>
          <div className='flex items-center justify-center h-40 bg-white border border-gray-200 rounded-lg mb-6'>
            <Button
              variant='outline'
              className='text-gray-500 hover:bg-gray-50'
            >
              <Upload className='mr-2 h-4 w-4' /> Cargar Imagen
            </Button>
          </div>
          <div className='grid gap-6 md:grid-cols-2'>
            <Input
              placeholder='Nombre del establecimiento'
              className='bg-white border-gray-200'
            />
            <Input
              placeholder='Teléfono'
              className='bg-white border-gray-200'
            />
            <Input
              placeholder='Correo electrónico'
              className='bg-white border-gray-200'
            />
            <Input
              placeholder='País'
              className='bg-white border-gray-200'
            />
            <Input
              placeholder='Provincia'
              className='bg-white border-gray-200'
            />
            <Input
              placeholder='Ciudad'
              className='bg-white border-gray-200'
            />
            <Input
              placeholder='Dirección'
              className='bg-white border-gray-200 md:col-span-2'
            />
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Selecciona una moneda' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='USD'>Dólar estadounidense (USD)</SelectItem>
                <SelectItem value='EUR'>Euro (EUR)</SelectItem>
                <SelectItem value='JPY'>Yen japonés (JPY)</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Selecciona un idioma' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='es'>Español</SelectItem>
                <SelectItem value='en'>Inglés</SelectItem>
                {/* Agrega más idiomas aquí */}
              </SelectContent>
            </Select>
          </div>
        </section>

        <div className='h-px bg-gray-200' />

        <section className='space-y-8'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold text-gray-800'>
              Horario de Atención
            </h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant='outline'
                  className='text-gray-500 hover:bg-gray-50'
                >
                  Modificar horarios
                </Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[700px]'>
                <DialogHeader>
                  <DialogTitle className='text-2xl font-semibold mb-4'>
                    Horario de Atención
                  </DialogTitle>
                </DialogHeader>
                <ScrollArea className='h-[60vh] pr-4'>
                  <Tabs
                    defaultValue='weekdays'
                    className='w-full'
                  >
                    <TabsList className='grid w-full grid-cols-2 mb-6'>
                      <TabsTrigger
                        value='weekdays'
                        className='text-sm'
                      >
                        Lunes a Viernes
                      </TabsTrigger>
                      <TabsTrigger
                        value='weekend'
                        className='text-sm'
                      >
                        Fin de Semana
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value='weekdays'
                      className='space-y-6'
                    >
                      {[
                        'Lunes',
                        'Martes',
                        'Miércoles',
                        'Jueves',
                        'Viernes',
                      ].map((day) => (
                        <DayScheduleEditor
                          key={day}
                          day={day}
                          schedule={schedule}
                          setSchedule={setSchedule}
                        />
                      ))}
                    </TabsContent>
                    <TabsContent
                      value='weekend'
                      className='space-y-6'
                    >
                      {['Sábado', 'Domingo'].map((day) => (
                        <DayScheduleEditor
                          key={day}
                          day={day}
                          schedule={schedule}
                          setSchedule={setSchedule}
                        />
                      ))}
                    </TabsContent>
                  </Tabs>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
          <div className='bg-white border border-gray-200 rounded-lg p-6'>
            <ul className='space-y-4'>
              {Object.entries(schedule).map(([day, { isOpen, timeSlots }]) => (
                <li
                  key={day}
                  className='flex justify-between items-center'
                >
                  <span className='font-medium text-gray-700'>{day}</span>
                  <span className='text-gray-600'>
                    {isOpen
                      ? timeSlots
                          .map((slot) => `${slot.start} - ${slot.end}`)
                          .join(', ')
                      : 'Cerrado'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

function DayScheduleEditor({
  day,
  schedule,
  setSchedule,
}: {
  day: string
  schedule: Schedule
  setSchedule: React.Dispatch<React.SetStateAction<Schedule>>
}) {
  const { isOpen, timeSlots } = schedule[day]

  const toggleDay = () => {
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        isOpen: !prev[day].isOpen,
        timeSlots: prev[day].isOpen ? [] : [{ start: '09:00', end: '17:00' }],
      },
    }))
  }

  const addTimeSlot = () => {
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        timeSlots: [...prev[day].timeSlots, { start: '09:00', end: '17:00' }],
      },
    }))
  }

  const removeTimeSlot = (index: number) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        timeSlots: prev[day].timeSlots.filter((_, i) => i !== index),
      },
    }))
  }

  const updateTimeSlot = (
    index: number,
    field: 'start' | 'end',
    value: string
  ) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        timeSlots: prev[day].timeSlots.map((slot, i) =>
          i === index ? { ...slot, [field]: value } : slot
        ),
      },
    }))
  }

  return (
    <div className='bg-gray-50 rounded-lg p-4'>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center space-x-4'>
          <Switch
            id={day}
            checked={isOpen}
            onCheckedChange={toggleDay}
          />
          <label
            htmlFor={day}
            className='font-medium text-gray-700 text-lg'
          >
            {day}
          </label>
        </div>
        {isOpen && (
          <Button
            variant='outline'
            size='sm'
            onClick={addTimeSlot}
            className='text-gray-500 hover:bg-gray-50'
          >
            <Plus className='h-4 w-4 mr-1' /> Agregar horario
          </Button>
        )}
      </div>
      {isOpen && (
        <div className='space-y-3 ml-4'>
          {timeSlots.map((slot, index) => (
            <div
              key={index}
              className='flex items-center space-x-2'
            >
              <Sun className='h-4 w-4 text-yellow-500' />
              <Input
                type='time'
                className='w-32 bg-white border-gray-200'
                value={slot.start}
                onChange={(e) => updateTimeSlot(index, 'start', e.target.value)}
              />
              <span className='text-gray-400'>-</span>
              <Moon className='h-4 w-4 text-gray-500' />
              <Input
                type='time'
                className='w-32 bg-white border-gray-200'
                value={slot.end}
                onChange={(e) => updateTimeSlot(index, 'end', e.target.value)}
              />
              <Button
                variant='ghost'
                size='icon'
                onClick={() => removeTimeSlot(index)}
                className='text-gray-400 hover:text-red-500'
              >
                <X className='h-4 w-4' />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
