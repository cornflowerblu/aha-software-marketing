import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: string
}

export default function Input({ label, className = '', id, ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={className}>
      <label
        htmlFor={inputId}
        className="ea-label text-tertiary mb-2 block"
      >
        {label}
      </label>
      <input
        id={inputId}
        className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface py-2 transition-colors outline-none"
        {...props}
      />
    </div>
  )
}
