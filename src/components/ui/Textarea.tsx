import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  className?: string
}

export default function Textarea({ label, className = '', id, ...props }: TextareaProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={className}>
      <label
        htmlFor={inputId}
        className="ea-label text-tertiary mb-2 block"
      >
        {label}
      </label>
      <textarea
        id={inputId}
        className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface py-2 transition-colors outline-none resize-none"
        {...props}
      />
    </div>
  )
}
