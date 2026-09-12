import LoginBanner from '@/assets/images/banners/login.png';
import { LoginForm } from '@/domains/auth/components/LoginForm';
import { BasicInfoLogin } from '@/domains/auth/components/BasicInfoLogin';
export function LoginPage() {
    return (
        <div
            className="min-h-screen w-full flex bg-cover bg-center bg-no-repeat p-4 relative"
            style={{ backgroundImage: `url(${LoginBanner})` }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
                <div className="flex justify-center py-10">
                    <BasicInfoLogin />
                </div>
                <div className="flex justify-center items-center">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}