import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

import Link from 'next/link'
import AccountInfo from './components/AccountInfo'
import { Separator } from '@radix-ui/react-select'
//import AccountSchedule from './components/AccountSchedule'
import AccountStore from './components/AccountStore'

export default function Component() {
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
        </header>
        <AccountInfo />

        <Separator className='bg-gray-200' />

        <AccountStore />

        {/* <Separator className='bg-gray-200' />

        <AccountSchedule /> */}
      </div>
    </div>
  )
}
