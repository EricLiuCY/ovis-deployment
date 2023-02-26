import groq from 'groq'

const HomepageGROQ = groq`
  *[_type == 'homepage'][0]
`

export default HomepageGROQ
