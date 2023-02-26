import groq from 'groq'

const ThemeGROQ = groq`
  *[_type == 'theme'][0] {
    ...,
  }
`

export default ThemeGROQ
