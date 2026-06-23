import LoginForm from '@/components/features/auth/login/LoginForm'
import { User2 } from 'lucide-react'

const page = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center mt-15">
      <div className="w-full max-w-120 flex flex-col gap-8">
        {/* <!-- Login Card --> */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-slate-700">
            {/* Header Section */}
            <div className="relative h-32 bg-linear-to-br from-green-500 to-green-700 dark:from-green-600 dark:to-green-800 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2720%27 height=%2720%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27%23fff%27 fill-opacity=%270.1%27%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%271%27/%3E%3C/g%3E%3C/svg%3E')}" }} />
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <User2 size={32} className="text-green-600" />
                </div>
                <h2 className="text-white text-xl font-bold">Dashboard Login</h2>
              </div>
            </div>
            <div className="p-8">
            <LoginForm
              emailLabel='البريد الالتروني'
              forgetPassword='نسيت كلمة المرور'
              loginWelcome='اهلا بك'
              passwordLabel='كلمة المرور'
              rememberLabel='هلا'
              submitButton='تسجبل دخول'
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page