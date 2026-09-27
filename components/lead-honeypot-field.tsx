type LeadHoneypotFieldProps = {
  value: string
  onChange: (value: string) => void
}

/** Hidden field for bot detection; must stay empty for legitimate submissions. */
export default function LeadHoneypotField({
  value,
  onChange,
}: LeadHoneypotFieldProps) {
  return (
    <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
      <label htmlFor="companyWebsite">Company website</label>
      <input
        id="companyWebsite"
        name="companyWebsite"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
