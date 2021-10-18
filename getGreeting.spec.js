import { describe, expect, it } from '@jest/globals'
import { getGreeting } from './getGreeting.js'

describe('getGreeting', () => {
  it('returns a String "Hello you!" if called without arguments', () => {
    const result = getGreeting()
    expect(result).toBe('Hello you!')
  })
})
