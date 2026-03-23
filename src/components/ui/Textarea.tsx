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
        className="block font-label text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 mb-3"
      >
        {label}
      </label>
      <textarea
        id={inputId}
        className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-lg font-headline py-2 transition-all outline-none resize-none"
        {...props}
      />
    </div>
  )
}
