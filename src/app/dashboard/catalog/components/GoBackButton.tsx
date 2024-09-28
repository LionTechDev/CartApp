import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const GoBackButton = () => {
  return (
    <div className='py-4 border-b'>
      <Link href='/dashboard/menus'>
        <Button
          variant='ghost'
          className='justify-start'
        >
          <ChevronLeft className='h-4 w-4' />
          Volver
        </Button>
      </Link>
    </div>
  )
}
export default GoBackButton
