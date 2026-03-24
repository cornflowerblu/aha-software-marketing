import { test, expect, describe } from 'bun:test'
import { Posts } from '@/collections/Posts'
import { Events } from '@/collections/Events'
import { Users } from '@/collections/Users'
import { Categories } from '@/collections/Categories'
import { Media } from '@/collections/Media'
import { Registrations } from '@/collections/Registrations'

describe('Collection configs', () => {
  describe('Posts', () => {
    test('has correct slug', () => {
      expect(Posts.slug).toBe('posts')
    })

    test('has required title field', () => {
      const title = Posts.fields.find((f: any) => f.name === 'title')
      expect(title).toBeDefined()
      expect((title as any).required).toBe(true)
    })

    test('has unique slug field', () => {
      const slug = Posts.fields.find((f: any) => f.name === 'slug')
      expect(slug).toBeDefined()
      expect((slug as any).unique).toBe(true)
    })

    test('has content richText field', () => {
      const content = Posts.fields.find((f: any) => f.name === 'content')
      expect(content).toBeDefined()
      expect((content as any).type).toBe('richText')
    })

    test('has status select with draft/published options', () => {
      const status = Posts.fields.find((f: any) => f.name === 'status') as any
      expect(status).toBeDefined()
      expect(status.type).toBe('select')
      expect(status.defaultValue).toBe('draft')
      const values = status.options.map((o: any) => o.value)
      expect(values).toContain('draft')
      expect(values).toContain('published')
    })

    test('has premium checkbox defaulting to false', () => {
      const premium = Posts.fields.find((f: any) => f.name === 'premium') as any
      expect(premium).toBeDefined()
      expect(premium.type).toBe('checkbox')
      expect(premium.defaultValue).toBe(false)
    })

    test('has categories relationship (hasMany)', () => {
      const cats = Posts.fields.find((f: any) => f.name === 'categories') as any
      expect(cats).toBeDefined()
      expect(cats.type).toBe('relationship')
      expect(cats.relationTo).toBe('categories')
      expect(cats.hasMany).toBe(true)
    })

    test('has author relationship to users', () => {
      const author = Posts.fields.find((f: any) => f.name === 'author') as any
      expect(author).toBeDefined()
      expect(author.relationTo).toBe('users')
    })

    test('has featuredImage upload to media', () => {
      const img = Posts.fields.find((f: any) => f.name === 'featuredImage') as any
      expect(img).toBeDefined()
      expect(img.type).toBe('upload')
      expect(img.relationTo).toBe('media')
    })
  })

  describe('Events', () => {
    test('has correct slug', () => {
      expect(Events.slug).toBe('events')
    })

    test('has required title and date fields', () => {
      const title = Events.fields.find((f: any) => f.name === 'title') as any
      const date = Events.fields.find((f: any) => f.name === 'date') as any
      expect(title.required).toBe(true)
      expect(date.required).toBe(true)
    })

    test('has price defaulting to 0', () => {
      const price = Events.fields.find((f: any) => f.name === 'price') as any
      expect(price).toBeDefined()
      expect(price.defaultValue).toBe(0)
    })

    test('has status with upcoming/past/cancelled', () => {
      const status = Events.fields.find((f: any) => f.name === 'status') as any
      const values = status.options.map((o: any) => o.value)
      expect(values).toContain('upcoming')
      expect(values).toContain('past')
      expect(values).toContain('cancelled')
    })

    test('has capacity, location, virtualLink, endDate fields', () => {
      const names = Events.fields.map((f: any) => f.name)
      expect(names).toContain('capacity')
      expect(names).toContain('location')
      expect(names).toContain('virtualLink')
      expect(names).toContain('endDate')
    })

    test('has stripePriceId for paid events', () => {
      const field = Events.fields.find((f: any) => f.name === 'stripePriceId') as any
      expect(field).toBeDefined()
      expect(field.type).toBe('text')
    })
  })

  describe('Users', () => {
    test('has correct slug and auth enabled', () => {
      expect(Users.slug).toBe('users')
      // Payload normalizes `auth: true` into a full config object at build time
      expect(Users.auth).toBeTruthy()
    })

    test('has role select with admin/premium/registered', () => {
      const role = Users.fields.find((f: any) => f.name === 'role') as any
      expect(role).toBeDefined()
      expect(role.defaultValue).toBe('registered')
      const values = role.options.map((o: any) => o.value)
      expect(values).toContain('admin')
      expect(values).toContain('premium')
      expect(values).toContain('registered')
    })

    test('has stripeCustomerId and subscriptionStatus', () => {
      const names = Users.fields.map((f: any) => f.name)
      expect(names).toContain('stripeCustomerId')
      expect(names).toContain('subscriptionStatus')
    })

    test('subscriptionStatus defaults to none', () => {
      const field = Users.fields.find((f: any) => f.name === 'subscriptionStatus') as any
      expect(field.defaultValue).toBe('none')
    })
  })

  describe('Categories', () => {
    test('has correct slug', () => {
      expect(Categories.slug).toBe('categories')
    })

    test('has required title and unique slug', () => {
      const title = Categories.fields.find((f: any) => f.name === 'title') as any
      const slug = Categories.fields.find((f: any) => f.name === 'slug') as any
      expect(title.required).toBe(true)
      expect(slug.required).toBe(true)
      expect(slug.unique).toBe(true)
    })
  })

  describe('Media', () => {
    test('has correct slug and upload enabled', () => {
      expect(Media.slug).toBe('media')
      // Payload normalizes `upload: true` into a full config object at build time
      expect(Media.upload).toBeTruthy()
    })

    test('has required alt field', () => {
      const alt = Media.fields.find((f: any) => f.name === 'alt') as any
      expect(alt.required).toBe(true)
    })
  })

  describe('Registrations', () => {
    test('has correct slug', () => {
      expect(Registrations.slug).toBe('registrations')
    })

    test('has required user and event relationships', () => {
      const user = Registrations.fields.find((f: any) => f.name === 'user') as any
      const event = Registrations.fields.find((f: any) => f.name === 'event') as any
      expect(user.required).toBe(true)
      expect(user.relationTo).toBe('users')
      expect(event.required).toBe(true)
      expect(event.relationTo).toBe('events')
    })

    test('has paymentStatus with paid/free/pending', () => {
      const status = Registrations.fields.find((f: any) => f.name === 'paymentStatus') as any
      const values = status.options.map((o: any) => o.value)
      expect(values).toContain('paid')
      expect(values).toContain('free')
      expect(values).toContain('pending')
    })

    test('has attended checkbox defaulting to false', () => {
      const attended = Registrations.fields.find((f: any) => f.name === 'attended') as any
      expect(attended.type).toBe('checkbox')
      expect(attended.defaultValue).toBe(false)
    })
  })
})
