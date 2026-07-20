import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Badge from '@/components/ui/Badge'
import { clinics } from '@/lib/clinics-data'
import { MapPin, Clock, Phone } from 'lucide-react'

const outpatientClinics = clinics.filter((c) => c.type === 'clinic')
const hospital = clinics.find((c) => c.type === 'hospital')

export default function ClinicsSection() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-custom">
        {/* 二级中医院 */}
        {hospital && (
          <AnimatedSection>
            <div className="mb-20 rounded-md border-l-4 border-gold-500 bg-warm-100 p-8 shadow-soft sm:p-10">
              <p className="text-xs font-medium tracking-[0.35em] text-gold-600">二级中医院</p>
              <h3 className="mt-3 font-serif text-2xl font-bold tracking-wide text-ink-900">{hospital.name}</h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-ink-600">{hospital.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {hospital.specialties.map((s) => (
                  <Badge key={s} variant="gold">{s}</Badge>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-warm-300 pt-5 text-sm text-ink-500">
                <span className="flex items-center gap-2">
                  <MapPin size={15} className="text-primary-500" />{hospital.address}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={15} className="text-primary-500" />{hospital.hours}
                </span>
                <a href={`tel:${hospital.phone}`} className="flex items-center gap-2 transition-colors hover:text-primary-600">
                  <Phone size={15} className="text-primary-500" />{hospital.phone}
                </a>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* 门诊部 */}
        <SectionTitle eyebrow="名医荟萃" title="四家专业门诊部" />
        <div className="grid gap-8 sm:grid-cols-2">
          {outpatientClinics.map((clinic, i) => (
            <AnimatedSection key={clinic.id} delay={i * 0.1}>
              <div className="group h-full border-t border-warm-300 pt-6">
                <h3 className="font-serif text-xl font-bold tracking-wide text-ink-900 transition-colors group-hover:text-primary-700">
                  {clinic.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {clinic.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {clinic.specialties.map((s) => (
                    <Badge key={s} variant="primary">{s}</Badge>
                  ))}
                </div>

                <div className="mt-5 space-y-2 border-t border-warm-200 pt-4 text-sm text-ink-500">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="shrink-0 text-primary-500" />
                    {clinic.address}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="shrink-0 text-primary-500" />
                    {clinic.hours}
                  </div>
                  <a href={`tel:${clinic.phone}`} className="flex items-center gap-2 transition-colors hover:text-primary-600">
                    <Phone size={14} className="shrink-0 text-primary-500" />
                    {clinic.phone}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
