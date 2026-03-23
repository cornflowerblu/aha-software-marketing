import { test, expect, describe } from 'bun:test'
import {
  validateContactForm,
  validateRegistrationForm,
  validateEmail,
} from '@/lib/validation'

describe('Form validation', () => {
  describe('validateEmail', () => {
    test('accepts valid email addresses', () => {
      expect(validateEmail('user@example.com')).toBe(true)
      expect(validateEmail('user+tag@domain.co')).toBe(true)
      expect(validateEmail('first.last@company.org')).toBe(true)
    })

    test('rejects invalid email addresses', () => {
      expect(validateEmail('')).toBe(false)
      expect(validateEmail('not-an-email')).toBe(false)
      expect(validateEmail('@domain.com')).toBe(false)
      expect(validateEmail('user@')).toBe(false)
      expect(validateEmail('user @domain.com')).toBe(false)
    })
  })

  describe('validateContactForm', () => {
    test('accepts valid contact form data', () => {
      const result = validateContactForm({
        name: 'Jane Doe',
        email: 'jane@example.com',
        message: 'I would like to learn more about your services.',
      })
      expect(result.valid).toBe(true)
      expect(Object.keys(result.errors)).toHaveLength(0)
    })

    test('requires name', () => {
      const result = validateContactForm({
        name: '',
        email: 'jane@example.com',
        message: 'Hello',
      })
      expect(result.valid).toBe(false)
      expect(result.errors.name).toBeDefined()
    })

    test('requires valid email', () => {
      const result = validateContactForm({
        name: 'Jane',
        email: 'not-valid',
        message: 'Hello',
      })
      expect(result.valid).toBe(false)
      expect(result.errors.email).toBeDefined()
    })

    test('requires message', () => {
      const result = validateContactForm({
        name: 'Jane',
        email: 'jane@example.com',
        message: '',
      })
      expect(result.valid).toBe(false)
      expect(result.errors.message).toBeDefined()
    })

    test('trims whitespace from fields', () => {
      const result = validateContactForm({
        name: '  Jane Doe  ',
        email: '  jane@example.com  ',
        message: '  Hello  ',
      })
      expect(result.valid).toBe(true)
    })
  })

  describe('validateRegistrationForm', () => {
    test('accepts valid registration data', () => {
      const result = validateRegistrationForm({
        name: 'John Smith',
        email: 'john@example.com',
        eventId: 'evt_123',
      })
      expect(result.valid).toBe(true)
      expect(Object.keys(result.errors)).toHaveLength(0)
    })

    test('requires name', () => {
      const result = validateRegistrationForm({
        name: '',
        email: 'john@example.com',
        eventId: 'evt_123',
      })
      expect(result.valid).toBe(false)
      expect(result.errors.name).toBeDefined()
    })

    test('requires valid email', () => {
      const result = validateRegistrationForm({
        name: 'John',
        email: 'invalid',
        eventId: 'evt_123',
      })
      expect(result.valid).toBe(false)
      expect(result.errors.email).toBeDefined()
    })

    test('requires eventId', () => {
      const result = validateRegistrationForm({
        name: 'John',
        email: 'john@example.com',
        eventId: '',
      })
      expect(result.valid).toBe(false)
      expect(result.errors.eventId).toBeDefined()
    })
  })
})
