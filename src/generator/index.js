import { shuffle } from "../util"

export const generators = [
  {
    value: "n times tables",
    fn: gen_n_times_set,
    options: {
      n: 2,
      from: 2,
      to: 12,
      count: 10
    }
  },
  { value: "subtraction" },
  { value: "divide by 2" }
]

export function gen_n_times_set(options) {
  let { n, from, to, count } = options
  let expressons = []
  let i = from
  let j = 0
  while (j < count) {
    expressons.push(`${n} * ${i}`)
    i++
    if (i > to) {
      i = from
    }
    j++
  }

  return shuffle(expressons.map(expression => ({ expression, done: false })))
}
