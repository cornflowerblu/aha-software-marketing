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
        className="block font-label text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 mb-3"
      >
        {label}
      </label>
      <input
        id={inputId}
        className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-lg font-headline py-2 transition-all outline-none"
        {...props}
      />
    </div>
  )
}
