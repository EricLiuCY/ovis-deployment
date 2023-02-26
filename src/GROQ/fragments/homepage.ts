import groq from 'groq'

const HomepageGROQ = groq`
  *[_type == 'homepage'][0] {
    name,
    'valueProp': coalesce(valueProp[$lang], valueProp.[$defaultLang], "Missing translation"),
    'coreValues': coreValues[]{
      name,
      'coreValue': coalesce(coreValue[$lang], coreValue.[$defaultLang], "Missing translation"),
      'description': coalesce(description[$lang], description.[$defaultLang], "Missing translation"),
    },
    'missionStatement': coalesce(missionStatement[$lang], missionStatement.[$defaultLang], "Missing translation"),
    'featureProject': featureProject{
      'title': coalesce(title[$lang], title.[$defaultLang], "Missing translation"),
      'desc': coalesce(desc[$lang], desc.[$defaultLang], "Missing translation"),
      'projectImages': projectImages[] {
        'alt': coalesce(alt[$lang], alt.[$defaultLang], "Missing translation"),
        ...,
      },
      ...,
    },
    ...,
  }
`

export default HomepageGROQ
