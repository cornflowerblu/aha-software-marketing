import { test, expect, describe } from 'bun:test'
import { Posts } from '@/collections/Posts'
import { Events } from '@/collections/Events'
import { Users } from '@/collections/Users'
import { Categories } from '@/collections/Categories'
import { Media } from '@/collections/Media'
import { Registrations } from '@/collections/Registrations'
import { SiteSettings } from '@/globals/SiteSettings'
import { Navigation } from '@/globals/Navigation'

describe('Payload config — collection/global inventory', () => {
  const collections = [Posts, Events, Users, Categories, Media, Registrations]
  const globals = [SiteSettings, Navigation]

  test('all 6 collections are defined', () => {
    expect(collections).toHaveLength(6)
  })

  test('each collection has a slug', () => {
    for (const col of collections) {
      expect(col.slug).toBeDefined()
      expect(typeof col.slug).toBe('string')
    }
  })

  test('each collection has fields array', () => {
    for (const col of collections) {
      expect(Array.isArray(col.fields)).toBe(true)
      expect(col.fields.length).toBeGreaterThan(0)
    }
  })

  test('collection slugs are unique', () => {
    const slugs = collections.map((c) => c.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  test('expected collection slugs exist', () => {
    const slugs = collections.map((c) => c.slug)
    expect(slugs).toContain('posts')
    expect(slugs).toContain('events')
    expect(slugs).toContain('users')
    expect(slugs).toContain('categories')
    expect(slugs).toContain('media')
    expect(slugs).toContain('registrations')
  })

  test('both globals are defined', () => {
    expect(globals).toHaveLength(2)
  })

  test('global slugs are correct', () => {
    const slugs = globals.map((g) => g.slug)
    expect(slugs).toContain('site-settings')
    expect(slugs).toContain('navigation')
  })

  test('only Users collection has auth enabled', () => {
    for (const col of collections) {
      if (col.slug === 'users') {
        expect(col.auth).toBeTruthy()
      } else {
        expect(col.auth).toBeFalsy()
      }
    }
  })

  test('only Media collection has upload enabled', () => {
    for (const col of collections) {
      if (col.slug === 'media') {
        expect((col as any).upload).toBeTruthy()
      } else {
        expect((col as any).upload).toBeFalsy()
      }
    }
  })
})
