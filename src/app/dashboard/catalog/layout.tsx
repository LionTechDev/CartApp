import Sidebar from './components/Sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='flex min-h-screen h-full flex-col md:flex-row w-full'>
      <aside className='w-full md:w-1/4 lg:w-1/5 xl:w-72 md:max-w-sm p-4 bg-white md:h-screen md:max-h-screen flex flex-col'>
        <Sidebar />
      </aside>
      <main className='flex-1'>{children}</main>
    </section>
  )
}

export default DashboardLayout
