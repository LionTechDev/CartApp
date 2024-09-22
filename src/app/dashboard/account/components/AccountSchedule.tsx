'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Schedule } from '@/types/types'
import { AccountScheduleEditor } from './AccountScheduleEditor'

const AccountSchedule = () => {
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
                  {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].map(
                    (day) => (
                      <AccountScheduleEditor
                        key={day}
                        day={day}
                        schedule={schedule}
                        setSchedule={setSchedule}
                      />
                    )
                  )}
                </TabsContent>
                <TabsContent
                  value='weekend'
                  className='space-y-6'
                >
                  {['Sábado', 'Domingo'].map((day) => (
                    <AccountScheduleEditor
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
  )
}
export default AccountSchedule
