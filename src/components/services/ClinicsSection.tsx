'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Badge from '@/components/ui/Badge'
import { clinics } from '@/lib/clinics-data'
import { MapPin, Clock, Phone, Building2 } from 'lucide-react'

const outpatientClinics = clinics.filter((c) => c.type === 'clinic')
const hospital = clinics.find((c) => c.type === 'hospital')

export default function ClinicsSection() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-custom">
        {/* 二级中医院 */}
        {hospital && (
          <AnimatedSection>
            <div className="mb-12 rounded-lg border-2 border-gold-300 bg-warm-50 p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-gold-100 p-3">
                  <Building2 size={28} className="text-gold-600" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ink-900">{hospital.name}</h3>
                  <p className="mt-3 text-ink-600 leading-relaxed">{hospital.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {hospital.specialties.map((s) => (
                      <Badge key={s} variant="gold">{s}</Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-6 text-sm text-ink-500">
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-primary-500" />{hospital.address}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={14} className="text-primary-500" />{hospital.hours}
                    </span>
                    <span className="flex items-center gap-2">
                      <Phone size={14} className="text-primary-500" />{hospital.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* 门诊部 */}
        <SectionTitle title="门诊部" subtitle="四家名医荟萃的专业门诊部" />
        <div className="grid gap-6 sm:grid-cols-2">
          {outpatientClinics.map((clinic, i) => (
            <AnimatedSection key={clinic.id} delay={i * 0.1}>
              <div className="h-full rounded-lg bg-warm-50 p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                <h3 className="font-serif text-xl font-bold text-ink-900">
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

                <div className="mt-4 space-y-2 border-t border-warm-200 pt-4 text-sm text-ink-500">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="shrink-0 text-primary-500" />
                    {clinic.address}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="shrink-0 text-primary-500" />
                    {clinic.hours}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="shrink-0 text-primary-500" />
                    {clinic.phone}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
