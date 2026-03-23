'use client'

import Button from '@/components/ui/Button'

interface PaywallGateProps {
  children: React.ReactNode
  isAuthenticated?: boolean
  isPremium?: boolean
}

export default function PaywallGate({
  children,
  isAuthenticated = false,
  isPremium = false,
}: PaywallGateProps) {
  if (isPremium) {
    return <>{children}</>
  }

  return (
    <div className="relative">
      <div className="max-h-[400px] overflow-hidden relative">
        <div className="pointer-events-none">{children}</div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>

      <div className="text-center py-12 -mt-8 relative z-10">
        <span className="material-symbols-outlined text-5xl text-primary mb-4 block">
          lock
        </span>
        <h3 className="font-headline text-3xl font-bold mb-4">
          Premium Content
        </h3>
        <p className="font-body text-on-surface-variant mb-8 max-w-md mx-auto">
          {isAuthenticated
            ? 'Upgrade to Full Access to unlock this content and the entire knowledge base.'
            : 'Sign in or create an account to access premium content.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {isAuthenticated ? (
            <Button variant="primary" href="/premium#pricing">
              View Plans
            </Button>
          ) : (
            <>
              <Button variant="primary" href="/login">
                Sign In
              </Button>
              <Button variant="outline" href="/register">
                Create Account
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
