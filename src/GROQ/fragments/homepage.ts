import groq from 'groq'

const HomepageGROQ = groq`
  *[_type == 'homepage'][0] {
    name,
    'valueProp': coalesce(valueProp[$lang], valueProp[$defaultLang], "Missing translation"),
    'aboutSection': aboutSection{
      'coreValues': coreValues[]{
        name,
        'coreValue': coalesce(coreValue[$lang], coreValue[$defaultLang], "Missing translation"),
        'description': coalesce(description[$lang], description[$defaultLang], "Missing translation"),
      },
      'missionStatement': coalesce(missionStatement[$lang], missionStatement[$defaultLang], "Missing translation"),
      'cta': coalesce(cta[$lang], cta[$defaultLang], "Missing translation"),
    },
    'featureProject': featureProject{
      'title': coalesce(title[$lang], title[$defaultLang], "Missing translation"),
      'desc': coalesce(desc[$lang], desc[$defaultLang], "Missing translation"),
      'cta': coalesce(cta[$lang], cta[$defaultLang], "Missing translation"),
      'projectImages': projectImages[] {
        'alt': coalesce(alt[$lang], alt[$defaultLang], "Missing translation"),
        ...,
      },
      ...,
    },
    'partnerOverviews': partnerOverviews[]{
      'profilePicture': profilePicture{
        'alt': coalesce(alt[$lang], alt[$defaultLang], "Missing translation"),
        ...,
      },
      'founderName': coalesce(founderName[$lang], founderName[$defaultLang], "Missing translation"),
      'founderTitle': coalesce(founderTitle[$lang], founderTitle[$defaultLang], "Missing translation"),
      'founderSummary': coalesce(founderSummary[$lang], founderSummary[$defaultLang], "Missing translation"),
      'cta': coalesce(cta[$lang], cta[$defaultLang], "Missing translation"),
      ...,
    },
    ...,
  }
`

export default HomepageGROQ
