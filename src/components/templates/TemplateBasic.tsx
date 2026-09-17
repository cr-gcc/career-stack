import { MdEmail } from 'react-icons/md'
import { BsFillPhoneFill } from 'react-icons/bs'
import { IoMdPin } from 'react-icons/io'
import type { CvData } from '@/types/cv.types'

interface TemplateBasicProps {
    data: CvData
}

export function TemplateBasic({ data }: TemplateBasicProps) {
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
        extraInfo
    } = data
    const fulltimeExperiences = workExperiences.filter((e) => e.type === 'full-time')
    const freelanceExperiences = workExperiences.filter((e) => e.type === 'part-time')
    const rawColor = bgColor?.replace(/^bg-/, '') || ''
    const headerBgColor = (!rawColor || rawColor === 'white') ? 'bg-black' : `bg-${rawColor}`
    const borderColor = (!rawColor || rawColor === 'white') ? 'border-black' : `border-${rawColor}`

    return (
        <div className={`${font} bg-white text-gray-900`} style={{ width: '794px', height: '1123px' }}>
            <div className={`${headerBgColor} text-white px-6 pt-6 pb-2 items-center`}>
                <div className="grid grid-cols-3">
                    <div className="flex items-end col-span-2">
                        <h1 className="text-3xl uppercase">{generalInfo.name || 'Tu Nombre'}</h1>
                    </div>
                    <div className="text-right space-y-1 text-xs">
                        {generalInfo.email && (
                            <p><MdEmail className="inline mr-1" />{generalInfo.email}</p>
                        )}
                        {generalInfo.phone && (
                            <p><BsFillPhoneFill className="inline mr-1" />{generalInfo.phone}</p>
                        )}
                        {generalInfo.address && (
                            <p><IoMdPin className="inline mr-1" />{generalInfo.address}</p>
                        )}
                    </div>
                    <div className="col-span-3 mt-2 border-t-2 border-white"></div>
                    <p className="py-1 text-lg tracking-widest">{generalInfo.role || 'Tu Rol Profesional'}</p>
                </div>
            </div>
            <div className="grid grid-cols-5 text-justify">
                <div className="col-span-3">
                    <div className="w-full p-4">
                        <section className="mb-2">
                            <h2 className={`${borderColor} mb-2 text-lg font-bold border-b-2 uppercase tracking-widest`}>
                                Perfil Profesional
                            </h2>
                            <p className="text-sm leading-tight">{summary}</p>
                        </section>
                        <section>
                            <h2 className={`${borderColor} mb-2 text-lg font-bold border-b-2 uppercase tracking-widest`}>
                                Experiencia Laboral
                            </h2>
                            {fulltimeExperiences.length > 0 && (
                                <>
                                    <h3 className="mb-0 font-bold leading-tight">Tiempo completo</h3>
                                    <div className="mb-3">
                                        <ul className="list-disc list-inside pl-0 marker:text-gray-700">
                                            {fulltimeExperiences.map((exp) => (
                                                <li key={exp.id} className="mb-1">
                                                    <h3 className="inline font-semibold leading-tight">
                                                        {exp.name}
                                                        <span className="text-sm px-2 font-bold">|</span>
                                                        <span className="text-sm font-normal">{exp.dateRange}</span>
                                                    </h3>
                                                    <p className="text-sm leading-none">
                                                        <span className="font-semibold">{exp.role}:</span>{' '}
                                                        {exp.description}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            )}
                            {freelanceExperiences.length > 0 && (
                                <>
                                    <h3 className="mb-0 font-bold leading-tight">Consultor/Freelancer</h3>
                                    <div className="mb-3">
                                        <ul className="list-disc list-inside pl-0 marker:text-gray-700">
                                            {freelanceExperiences.map((exp) => (
                                                <li key={exp.id} className="mb-1">
                                                    <h3 className="inline font-semibold leading-tight">
                                                        {exp.name}
                                                        <span className="text-sm px-2 font-bold">|</span>
                                                        <span className="text-sm font-normal">{exp.dateRange}</span>
                                                    </h3>
                                                    <p className="text-sm leading-none">
                                                        <span className="font-semibold">{exp.role}:</span>{' '}
                                                        {exp.description}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            )}
                        </section>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="w-full p-4">
                        <section className="mb-2">
                            <h2 className={`${borderColor} mb-2 text-lg font-bold border-b-2 uppercase tracking-widest`}>
                                Formación Académica
                            </h2>
                            <p
                                className="text-sm leading-tight"
                                dangerouslySetInnerHTML={{ __html: education }}
                            />
                        </section>
                        <section className="mb-2">
                            <h2 className={`${borderColor} mb-2 text-lg font-bold border-b-2 uppercase tracking-widest`}>
                                Habilidades
                            </h2>
                            <ul className="list-disc list-inside pl-0 marker:text-gray-700">
                                {skills.map((skill) => (
                                    <li key={skill.id} className="mb-1">
                                        <h3 className="inline font-semibold text-sm">{skill.area}</h3>
                                        <p
                                            className="text-sm leading-tight"
                                            dangerouslySetInnerHTML={{ __html: skill.technologies }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </section>
                        {repositories && (
                            <section className="mb-2">
                                <h2 className={`${borderColor} mb-2 text-lg font-bold border-b-2 uppercase tracking-widest`}>
                                    Repositorio
                                </h2>
                                <p className="text-sm leading-tight">{repositories}</p>
                            </section>
                        )}
                        {certifications && (
                            <section className="mb-2">
                                <h2 className={`${borderColor} mb-2 text-lg font-bold border-b-2 uppercase tracking-widest`}>
                                    Certificados
                                </h2>
                                <p className="text-sm leading-tight">{certifications}</p>
                            </section>
                        )}
                        {extraInfo && (
                            <section className="mb-2">
                                <h2 className={`${borderColor} mb-2 text-lg font-bold border-b-2 uppercase tracking-widest`}>
                                    Información Adicional
                                </h2>
                                <p
                                    className="text-sm leading-tight"
                                    dangerouslySetInnerHTML={{ __html: extraInfo }}
                                />
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
