import LoginForm from '@/components/features/dashboard/auth/LoginForm'

const page = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12">
      <div className="w-full max-w-120 flex flex-col gap-8">
        {/* <!-- Page Heading --> */}
        <div className="flex flex-col gap-2">
          <h2 className="text-slate-900 dark:text-white text-4xl font-black tracking-tight">الدخول الى لوحة التحكم</h2>
        </div>
        {/* <!-- Login Card --> */}
        <LoginForm />
      </div>
    </div>
  )
}

export default page