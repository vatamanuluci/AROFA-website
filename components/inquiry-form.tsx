"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, LoaderCircle } from "lucide-react"
import { localizeHref, type Locale } from "@/lib/i18n"

type InquiryFormProps = { locale?: Locale }

const initialState = {
  firstName: "", lastName: "", email: "", phone: "", company: "", cui: "",
  subject: "", city: "", timeSlot: "", message: "", consent: false, website: "",
}

const timeSlots = ["Nu are importanță. Între 9-18.", "08-09", "09-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18"]

const copy: Record<Locale, Record<string, string>> = {
  ro: {
    intro: "Dacă aveți întrebări sau sugestii în legătură cu produsele și serviciile noastre, vă rugăm să ne trimiteți un mesaj folosind formularul de mai jos.",
    disclaimer: "Înainte de trimiterea formularului, vă rugăm să citiți", disclaimerLink: "Condițiile de procesare a cererilor de ofertă Termoplast", response: "Vă vom răspunde în cel mai scurt timp posibil. Vă mulțumim!",
    title: "Formular de contact", firstName: "Nume", lastName: "Prenume", email: "Adresa de mail", phone: "Telefon", company: "Companie", optional: "opțional", cui: "C.U.I.", subject: "Subiect", city: "Localitate livrare și/sau montaj", time: "Interval orar", choose: "Selectați un interval orar convenabil dvs.", noPreference: "Nu are importanță. Între 9-18.", message: "Mesaj", consentStart: "Sunt de acord cu", terms: "Termenii și condițiile de utilizare", data: "Politica de prelucrare a datelor cu caracter personal", cookies: "Politica de utilizare cookies", and: "și", success: "Mesajul a fost trimis cu succes. Vă mulțumim!", invalid: "Verificați câmpurile obligatorii și acordul privind prelucrarea datelor.", unavailable: "Trimiterea prin formular nu este configurată încă. Vă rugăm să ne contactați prin email.", failed: "Mesajul nu a putut fi trimis. Vă rugăm să încercați din nou.", rateLimited: "Ați trimis prea multe solicitări. Încercați din nou peste câteva minute.", send: "Trimite mesajul", required: "Câmp obligatoriu",
  },
  en: {
    intro: "If you have questions or suggestions about our products and services, please send us a message using the form below.", disclaimer: "Before submitting the form, please read", disclaimerLink: "the terms for processing quote requests", response: "We will get back to you as soon as possible. Thank you!",
    title: "Contact form", firstName: "First name", lastName: "Last name", email: "Email address", phone: "Phone", company: "Company", optional: "optional", cui: "Tax ID", subject: "Subject", city: "Delivery and/or installation location", time: "Time slot", choose: "Select a convenient time slot", noPreference: "No preference. Between 9 am and 6 pm.", message: "Message", consentStart: "I agree to the", terms: "Terms and Conditions", data: "Personal Data Processing Policy", cookies: "Cookie Policy", and: "and", success: "Your message has been sent. Thank you!", invalid: "Check the required fields and data processing consent.", unavailable: "Form delivery is not configured yet. Please contact us by email.", failed: "Your message could not be sent. Please try again.", rateLimited: "Too many requests. Please try again in a few minutes.", send: "Send message", required: "Required",
  },
  fr: {
    intro: "Si vous avez des questions ou suggestions concernant nos produits et services, envoyez-nous un message à l’aide du formulaire ci-dessous.", disclaimer: "Avant d’envoyer le formulaire, veuillez lire", disclaimerLink: "les conditions de traitement des demandes de devis", response: "Nous vous répondrons dès que possible. Merci !",
    title: "Formulaire de contact", firstName: "Prénom", lastName: "Nom", email: "Adresse e-mail", phone: "Téléphone", company: "Entreprise", optional: "facultatif", cui: "N° fiscal", subject: "Sujet", city: "Lieu de livraison et/ou d’installation", time: "Créneau horaire", choose: "Choisissez un créneau qui vous convient", noPreference: "Sans préférence. Entre 9 h et 18 h.", message: "Message", consentStart: "J’accepte les", terms: "Conditions générales", data: "Politique de traitement des données personnelles", cookies: "Politique relative aux cookies", and: "et", success: "Votre message a été envoyé. Merci !", invalid: "Vérifiez les champs obligatoires et votre consentement.", unavailable: "L’envoi du formulaire n’est pas configuré. Contactez-nous par e-mail.", failed: "Votre message n’a pas pu être envoyé. Veuillez réessayer.", rateLimited: "Trop de demandes. Veuillez réessayer dans quelques minutes.", send: "Envoyer le message", required: "Obligatoire",
  },
  nl: {
    intro: "Heeft u vragen of suggesties over onze producten en diensten? Stuur ons dan een bericht via het onderstaande formulier.", disclaimer: "Lees voordat u het formulier verzendt", disclaimerLink: "de voorwaarden voor het verwerken van offerteaanvragen", response: "We nemen zo snel mogelijk contact met u op. Bedankt!",
    title: "Contactformulier", firstName: "Voornaam", lastName: "Achternaam", email: "E-mailadres", phone: "Telefoon", company: "Bedrijf", optional: "optioneel", cui: "BTW-nummer", subject: "Onderwerp", city: "Plaats voor levering en/of installatie", time: "Tijdvak", choose: "Kies een geschikt tijdvak", noPreference: "Geen voorkeur. Tussen 9 en 18 uur.", message: "Bericht", consentStart: "Ik ga akkoord met de", terms: "Algemene voorwaarden", data: "Privacybeleid", cookies: "Cookiebeleid", and: "en", success: "Uw bericht is verzonden. Bedankt!", invalid: "Controleer de verplichte velden en uw toestemming.", unavailable: "Formulierverzending is nog niet ingesteld. Neem contact op via e-mail.", failed: "Uw bericht kon niet worden verzonden. Probeer het opnieuw.", rateLimited: "Te veel aanvragen. Probeer het over enkele minuten opnieuw.", send: "Bericht verzenden", required: "Verplicht",
  },
}

export function InquiryForm({ locale = "ro" }: InquiryFormProps) {
  const [form, setForm] = useState(initialState)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const text = copy[locale]
  const fieldClass = "min-h-12 w-full border border-border bg-secondary px-4 py-3 text-base outline-none transition-colors focus:border-primary"

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        const messages: Record<string, string> = {
          INVALID_FIELDS: text.invalid, DELIVERY_NOT_CONFIGURED: text.unavailable,
          DELIVERY_FAILED: text.failed, RATE_LIMITED: text.rateLimited,
        }
        throw new Error(messages[payload?.code] ?? text.failed)
      }
      setSubmitted(true)
      setForm(initialState)
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : text.failed)
    } finally {
      setSubmitting(false)
    }
  }

  const input = (key: "firstName" | "lastName" | "email" | "phone" | "company" | "cui" | "subject" | "city", label: string, required = true, type = "text") => (
    <label className="block space-y-2" key={key}>
      <span className="text-sm font-medium text-foreground/80">{label}{!required && <span className="ml-1 text-foreground/50">({text.optional})</span>}{required && " *"}</span>
      <input required={required} type={type} value={form[key]} onChange={(event) => setForm((current) => ({ ...current, [key]: event.target.value }))} className={fieldClass} maxLength={key === "email" ? 200 : 150} autoComplete={key === "firstName" ? "given-name" : key === "lastName" ? "family-name" : key === "email" ? "email" : key === "phone" ? "tel" : undefined} />
    </label>
  )

  return (
    <div className="border border-border bg-background p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.18em] text-primary mb-3">{text.title}</p>
        <p className="text-foreground/70 leading-relaxed">{text.intro}</p>
        <p className="mt-3 text-sm text-foreground/70">{text.disclaimer}{" "}<a href="https://termoplast.ro/ro/disclaimer-cerere-oferta" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">{text.disclaimerLink}</a>. {text.response}</p>
      </div>

      {submitted && <div className="mb-6 flex items-start gap-3 border border-primary/20 bg-primary/5 px-4 py-3 text-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /><p>{text.success}</p></div>}
      {error && <div role="alert" className="mb-6 border border-destructive/30 bg-destructive/5 px-4 py-3 text-destructive">{error}</div>}

      <form className="space-y-5" onSubmit={submit}>
        <div className="grid gap-5 md:grid-cols-2">
          {input("firstName", text.firstName)}{input("lastName", text.lastName)}
          {input("email", text.email, true, "email")}{input("phone", text.phone, true, "tel")}
          {input("company", text.company, false)}{input("cui", text.cui, false)}
          {input("subject", text.subject)}{input("city", text.city)}
        </div>
        <label className="block space-y-2">
          <span className="text-sm font-medium text-foreground/80">{text.time} *</span>
          <select required value={form.timeSlot} onChange={(event) => setForm((current) => ({ ...current, timeSlot: event.target.value }))} className={fieldClass}>
            <option value="">{text.choose}</option>
            {timeSlots.map((slot, index) => <option key={slot} value={slot}>{index === 0 ? text.noPreference : slot}</option>)}
          </select>
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-medium text-foreground/80">{text.message} *</span>
          <textarea required maxLength={3000} rows={6} value={form.message} onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))} className={`${fieldClass} min-h-36 resize-y`} />
        </label>
        <div className="absolute left-[-9999px]" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => setForm((current) => ({ ...current, website: event.target.value }))} /></label></div>
        <label className="flex items-start gap-3 text-sm text-foreground/75">
          <input required type="checkbox" checked={form.consent} onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))} className="mt-0.5 h-5 w-5 flex-none" />
          <span>{text.consentStart}{" "}<Link href={localizeHref("/termeni-conditii", locale)} className="text-primary underline underline-offset-2">{text.terms}</Link>,{" "}<Link href={localizeHref("/politica-confidentialitate", locale)} className="text-primary underline underline-offset-2">{text.data}</Link> {text.and}{" "}<Link href={localizeHref("/cookies", locale)} className="text-primary underline underline-offset-2">{text.cookies}</Link>.</span>
        </label>
        <button type="submit" disabled={submitting} className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-nardo px-6 py-3 font-medium text-white transition-colors hover:bg-nardo/90 disabled:opacity-60 sm:w-auto">
          {submitting && <LoaderCircle className="h-4 w-4 animate-spin" />}{text.send}
        </button>
      </form>
    </div>
  )
}
