import { useState, useMemo } from "react"
import { MailIcon, PhoneIcon } from "lucide-react"

import { FieldSet } from "@/components/ui/field"
import { Button } from "@/components/ui/button"

import UniformFieldGroup from "@/components/custom/uniform-field-group"
import StyledField from "@/components/custom/styled-field"
import { isValidEmail, isValidPhone, formatPhoneNumber } from "@/util/validation"

interface ContactInfoInputProps {
  onSubmit?: (data: { firstName: string; lastName: string; email: string; phone: string }) => void
  className?: string
}

const ContactInfoInput = ({ onSubmit, className }: ContactInfoInputProps) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")

  // Determine if the form is valid and submit button should be enabled
  const isFormValid = useMemo(() => {
    const hasEmail = email.trim().length > 0
    const hasPhone = phone.trim().length > 0

    // At least one field must be filled
    if (!hasEmail && !hasPhone) return false

    // If email is filled, it must be valid
    if (hasEmail && !isValidEmail(email)) return false

    // If phone is filled, it must be valid
    if (hasPhone && !isValidPhone(phone)) return false

    return true
  }, [email, phone])

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)

    // Clear error when user starts typing
    if (emailError) setEmailError("")
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)

    // Clear error when user starts typing
    if (phoneError) setPhoneError("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // This shouldn't happen due to button being disabled, but defensive check
    if (!isFormValid) {
      if (!email.trim() && !phone.trim()) {
        setEmailError("Please provide either an email or phone number")
        setPhoneError("Please provide either an email or phone number")
      }
      return
    }

    // Submit the form
    onSubmit?.({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim()
    })

    // Optionally clear the form after successful submission
    setFirstName("")
    setLastName("")
    setEmail("")
    setPhone("")
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <FieldSet className="items-center">
        <UniformFieldGroup>
          <div className="grid grid-cols-2 gap-4">
            <StyledField
              id="firstName"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <StyledField
              id="lastName"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <StyledField
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            icon={<MailIcon />}
          />

          <StyledField
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            value={phone}
            onChange={handlePhoneChange}
            error={phoneError}
            icon={<PhoneIcon />}
          />

          <Button type="submit" disabled={!isFormValid} className="w-4/5 place-self-center">
            Submit
          </Button>
        </UniformFieldGroup>
      </FieldSet>
    </form>
  )
}

export default ContactInfoInput
