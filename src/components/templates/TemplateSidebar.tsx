import { MdEmail } from 'react-icons/md'
import { BsFillPhoneFill } from 'react-icons/bs'
import { IoMdPin } from 'react-icons/io'
import type { CvData } from '@/types/cv.types'

interface TemplateSidebarProps {
    data: CvData
}

export function TemplateSidebar({ data }: TemplateSidebarProps) {
    const {
        font,
        bgColor,
        generalInfo,
        summary,
        education,
        workExperiences,
        skills,
        repositories,
        certifications,
        extraInfo,
    } = data

    const fulltimeExperiences = workExperiences.filter((e) => e.type === 'fulltime')
    const freelanceExperiences = workExperiences.filter((e) => e.type === 'freelance')
    
    // Limpia 'bg-' si ya viene incluido (ej. del storage antiguo)
    const rawColor = bgColor?.replace(/^bg-/, '') || ''
    
    // Fallback a black si está vacío o si es white
    const headerBgColor = (!rawColor || rawColor === 'white') ? 'bg-black' : `bg-${rawColor}`
    const borderColor = (!rawColor || rawColor === 'white') ? 'border-black' : `border-${rawColor}`

    return (
        <div
            className={`${font} bg-white text-gray-900 flex`}
            style={{ width: '794px', height: '1123px' }}
        >
            {/* Sidebar izquierdo */}
            <div className={`${headerBgColor} text-white flex flex-col`} style={{ width: '220px', minWidth: '220px' }}>
                {/* Avatar placeholder */}
                <div className="flex flex-col items-center px-4 pt-8 pb-4">
                    <div className="w-24 h-24 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center mb-3">
                        <span className="text-3xl font-bold text-white/70 uppercase">
                            {generalInfo.name ? generalInfo.name.charAt(0) : '?'}
                        </span>
                    </div>
                    <h1 className="text-base font-bold uppercase text-center leading-tight">
                        {generalInfo.name || 'Tu Nombre'}
                    </h1>
                    <p className="text-xs text-white/70 text-center mt-1 tracking-widest uppercase">
                        {generalInfo.role || 'Tu Rol'}
                    </p>
                </div>

                <div className="border-t border-white/30 mx-4 my-2" />

                {/* Contacto */}
                <div className="px-4 py-2">
                    <h2 className="text-xs font-bold uppercase tracking-widest mb-2 text-white/60">
                        Contacto
                    </h2>
                    <div className="space-y-2 text-xs">
                        {generalInfo.email && (
                            <div className="flex items-start gap-2">
                                <MdEmail className="mt-0.5 shrink-0 text-white/70" />
                                <span className="break-all">{generalInfo.email}</span>
                            </div>
                        )}
                        {generalInfo.phone && (
                            <div className="flex items-center gap-2">
                                <BsFillPhoneFill className="shrink-0 text-white/70" />
                                <span>{generalInfo.phone}</span>
                            </div>
                        )}
                        {generalInfo.address && (
                            <div className="flex items-start gap-2">
                                <IoMdPin className="mt-0.5 shrink-0 text-white/70" />
                                <span>{generalInfo.address}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="border-t border-white/30 mx-4 my-2" />

                {/* Habilidades en sidebar */}
                {skills.length > 0 && (
                    <div className="px-4 py-2">
                        <h2 className="text-xs font-bold uppercase tracking-widest mb-2 text-white/60">
                            Habilidades
                        </h2>
                        <ul className="space-y-2">
                            {skills.map((skill) => (
                                <li key={skill.id}>
                                    <p className="text-xs font-bold leading-tight">{skill.area}</p>
                                    <p
                                        className="text-xs text-white/75 leading-tight"
                                        dangerouslySetInnerHTML={{ __html: skill.technologies }}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Repositorio */}
                {repositories && (
                    <>
                        <div className="border-t border-white/30 mx-4 my-2" />
                        <div className="px-4 py-2">
                            <h2 className="text-xs font-bold uppercase tracking-widest mb-1 text-white/60">
                                Repositorio
                            </h2>
                            <p className="text-xs text-white/80 break-all">{repositories}</p>
                        </div>
                    </>
                )}

                {/* Certificados */}
                {certifications && (
                    <>
                        <div className="border-t border-white/30 mx-4 my-2" />
                        <div className="px-4 py-2">
                            <h2 className="text-xs font-bold uppercase tracking-widest mb-1 text-white/60">
                                Certificados
                            </h2>
                            <p className="text-xs text-white/80 leading-tight">{certifications}</p>
                        </div>
                    </>
                )}
            </div>

            {/* Contenido principal derecho */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header superior */}
                <div className="bg-gray-100 border-b-2 border-gray-200 px-6 py-4">
                    <p className="text-gray-500 text-xs uppercase tracking-widest">Perfil Profesional</p>
                    <p className="text-sm text-gray-700 leading-snug mt-1">{summary}</p>
                </div>

                {/* Cuerpo principal */}
                <div className="flex-1 px-6 py-4 space-y-4 overflow-hidden">
                    {/* Experiencia laboral */}
                    <section>
                        <h2 className={` ${borderColor} text-sm font-bold uppercase tracking-widest border-b-2  pb-0.5 mb-2`}>
                            Experiencia Laboral
                        </h2>

                        {fulltimeExperiences.length > 0 && (
                            <div className="mb-2">
                                <h3 className="text-xs font-bold text-gray-500 uppercase mb-1">Tiempo completo</h3>
                                <ul className="space-y-2">
                                    {fulltimeExperiences.map((exp) => (
                                        <li key={exp.id} className="flex gap-3">
                                            <div className="flex flex-col items-center pt-1">
                                                <div className={`w-2 h-2 rounded-full ${headerBgColor} shrink-0`} />
                                                <div className={`w-px flex-1 ${headerBgColor} mt-1`} />
                                            </div>
                                            <div className="pb-2">
                                                <p className="text-xs font-bold leading-tight">
                                                    {exp.company}
                                                    <span className="font-normal text-gray-500 ml-2">{exp.dateRange}</span>
                                                </p>
                                                <p className="text-xs text-gray-700 leading-tight">
                                                    <span className="font-semibold">{exp.role}:</span>{' '}
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {freelanceExperiences.length > 0 && (
                            <div>
                                <h3 className="text-xs font-bold text-gray-500 uppercase mb-1">Consultor/Freelancer</h3>
                                <ul className="space-y-2">
                                    {freelanceExperiences.map((exp) => (
                                        <li key={exp.id} className="flex gap-3">
                                            <div className="flex flex-col items-center pt-1">
                                                <div className={`w-2 h-2 rounded-full ${headerBgColor} shrink-0`} />
                                                <div className={`w-px flex-1 ${headerBgColor} mt-1`} />
                                            </div>
                                            <div className="pb-2">
                                                <p className="text-xs font-bold leading-tight">
                                                    {exp.company}
                                                    <span className="font-normal text-gray-500 ml-2">{exp.dateRange}</span>
                                                </p>
                                                <p className="text-xs text-gray-700 leading-tight">
                                                    <span className="font-semibold">{exp.role}:</span>{' '}
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </section>

                    {/* Formación académica */}
                    <section>
                        <h2 className={` ${borderColor} text-sm font-bold uppercase tracking-widest border-b-2 pb-0.5 mb-2`}>
                            Formación Académica
                        </h2>
                        <p
                            className="text-xs text-gray-700 leading-snug"
                            dangerouslySetInnerHTML={{ __html: education }}
                        />
                    </section>

                    {/* Info adicional */}
                    {extraInfo && (
                        <section>
                            <h2 className={` ${borderColor} text-sm font-bold uppercase tracking-widest border-b-2 pb-0.5 mb-2`}>
                                Información Adicional
                            </h2>
                            <p
                                className="text-xs text-gray-700 leading-snug"
                                dangerouslySetInnerHTML={{ __html: extraInfo }}
                            />
                        </section>
                    )}
                </div>
            </div>
        </div>
    )
}
