import { CardBasico } from "@/components/ui/CardBasico";
import { InputLabelIcon } from "@/components/ui/InputLabelIcon";
import { ButtonIcon } from "@/components/ui/ButtonIcon";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockLine } from "react-icons/ri";
import { SlLogin } from "react-icons/sl";

export function LoginForm() {
    return (
        <CardBasico>
            <div className="flex flex-col px-2 py-1">
                <div className="mt-1.5 mb-6">
                    <h5 className="h5">
                        ¡Bienvenido de nuevo!
                    </h5>
                    <p className="text-sm text-text-secondary">
                        Ingrese sus credenciales para iniciar sesión
                    </p>
                </div>
                <div className="mb-3">
                    <InputLabelIcon
                        type="text"
                        label="Email"
                        icon={<MdOutlineEmail />}
                        placeholder="Email"
                        className="w-full text-sm"
                    />
                </div>
                <div className="mb-3">
                    <InputLabelIcon
                        type="password"
                        label="Contraseña"
                        icon={<RiLockLine />}
                        placeholder="Password"
                        className="w-full text-sm"
                    />
                </div>
                <div className="flex justify-center mb-4">
                    <a href="#" className="text-xs text-text-secondary hover:text-emphasis transition-colors">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
                <div className="mb-4">
                    <ButtonIcon
                        icon={<SlLogin />}
                        label="Iniciar Sesión"
                        className="w-full text-sm text-white bg-primary hover:bg-primary-hover"
                        onClick={() => alert("Iniciando sesión...")}
                    />
                </div>
                <div className="mb-4 text-center">
                    <p className="text-xs text-text-secondary">
                        Al continuar, aceptas los <a href="#" className="text-emphasis underline hover:text-primary transition-colors">Términos de Servicio</a> y la <a href="#" className="text-emphasis underline hover:text-primary transition-colors">Política de Privacidad</a>
                    </p>
                </div>
            </div>
        </CardBasico>
    )
}