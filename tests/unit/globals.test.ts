import { test, expect, describe } from 'bun:test'
import { SiteSettings } from '@/globals/SiteSettings'
import { Navigation } from '@/globals/Navigation'

describe('Global configs', () => {
  describe('SiteSettings', () => {
    test('has correct slug', () => {
      expect(SiteSettings.slug).toBe('site-settings')
    })

    test('has siteName defaulting to AHA Software', () => {
      const field = SiteSettings.fields.find((f: any) => f.name === 'siteName') as any
      expect(field.defaultValue).toBe('AHA Software')
    })

    test('has contactEmail defaulting to roger@ahasw.com', () => {
      const field = SiteSettings.fields.find((f: any) => f.name === 'contactEmail') as any
      expect(field.type).toBe('email')
      expect(field.defaultValue).toBe('roger@ahasw.com')
    })

    test('has socialLinks group with github/linkedin/twitter', () => {
      const group = SiteSettings.fields.find((f: any) => f.name === 'socialLinks') as any
      expect(group.type).toBe('group')
      const names = group.fields.map((f: any) => f.name)
      expect(names).toContain('github')
      expect(names).toContain('linkedin')
      expect(names).toContain('twitter')
    })
  })

  describe('Navigation', () => {
    test('has correct slug', () => {
      expect(Navigation.slug).toBe('navigation')
    })

    test('has navItems array with label, href, isActive', () => {
      const navItems = Navigation.fields.find((f: any) => f.name === 'navItems') as any
      expect(navItems.type).toBe('array')
      const names = navItems.fields.map((f: any) => f.name)
      expect(names).toContain('label')
      expect(names).toContain('href')
      expect(names).toContain('isActive')
    })

    test('navItems label and href are required', () => {
      const navItems = Navigation.fields.find((f: any) => f.name === 'navItems') as any
      const label = navItems.fields.find((f: any) => f.name === 'label')
      const href = navItems.fields.find((f: any) => f.name === 'href')
      expect(label.required).toBe(true)
      expect(href.required).toBe(true)
    })
  })
})
