import { describe, expect } from '@jest/globals'
import { isOdd } from './math'
import { isEven } from './math.js'
import { isDivisebleBy3 } from './math.js'
import { isDivisibleBy } from './math.js'

/*Area for number is Odd */
describe('math', () => {
  describe('isOdd', () => {
    it('returns true, if a number is odd', () => {
      const result = isOdd(1)
      expect(result).toBe(true)
    })

    it('returns true, if a negative number is odd', () => {
      const result = isOdd(-3)
      expect(result).toBe(true)
    })

    it('returns false, if a number is even', () => {
      const result = isOdd(2)
      expect(result).toBe(false)
    })

    it('returns false, if a negative number is even', () => {
      const result = isOdd(-4)
      expect(result).toBe(false)
    })
  })
})

/* Area for Number is Even */
describe('math', () => {
  describe('isEven', () => {
    it('returns true, if a number is Even', () => {
      const result = isEven(0)
      expect(result).toBe(true)
    })

    it('returns true, if a negative number is Even', () => {
      const result = isEven(-3)
      expect(result).toBe(false)
    })

    it('returns false, if a number is odd', () => {
      const result = isEven(2)
      expect(result).toBe(true)
    })

    it('returns false, if a negative number is odd', () => {
      const result = isEven(-4)
      expect(result).toBe(true)
    })
  })
})

/* Area for divide by 3 */
describe('math', () => {
  describe('isDivisebleBy3', () => {
    it('returns true, if a number is divisible by 3', () => {
      const result = isDivisebleBy3(0)
      expect(result).toBe(true)
    })

    it('returns true, if a negative number is divisible by 3', () => {
      const result = isDivisebleBy3(-3)
      expect(result).toBe(true)
    })

    it('returns false, if a number is not divisible by 3', () => {
      const result = isDivisebleBy3(2)
      expect(result).toBe(false)
    })

    it('returns false, if a negative number is not divisible by 3', () => {
      const result = isDivisebleBy3(-4)
      expect(result).toBe(false)
    })
  })
})

/* Area for number and divisor */
describe('math', () => {
  describe('isDivisibleBy', () => {
    it('returns true, if a number is divisible by 3', () => {
      const result = isDivisibleBy(4, 2)
      expect(result).toBe(true)
    })

    it('returns false, if a divisor is greater then the number', () => {
      const result = isDivisibleBy(-4, -5)
      expect(result).toBe(false)
    })

    it('returns true, if a number is divisible by 2', () => {
      const result = isDivisibleBy(12, 2)
      expect(result).toBe(true)
    })

    it('returns false, if a negative number is not divisible by 3', () => {
      const result = isDivisibleBy(-8, 4)
      expect(result).toBe(true)
    })

    it('throws an Error for isDivisibleBy(2, 0)', () => {
      expect(() => isDivisibleBy(2, 0)).toThrow()
    })
  })
})
