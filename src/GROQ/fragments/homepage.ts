import groq from 'groq'

const HomepageGROQ = groq`
  *[_type == 'homepage'][0] {
    name,
    'valueProp': valueProp{
      'lines': lines[] {
        'value': coalesce(value[$lang], value[$defaultLang], "Missing translation"),
      },
      ...,
    },
    'aboutSection': aboutSection{
      'coreValues': coreValues{
        'lines': lines[] {
          'value': coalesce(value[$lang], value[$defaultLang], "Missing translation"),
        },
        ...,
      },
      'missionStatement': missionStatement{
        'paragraphs': paragraphs[] {
          'value': coalesce(value[$lang], value[$defaultLang], "Missing translation"),
        },
        ...,
      },
      'cta': coalesce(cta[$lang], cta[$defaultLang], "Missing translation"),
    },
    'featureProject': featureProject{
      'title': title{
        'lines': lines[] {
          'value': coalesce(value[$lang], value[$defaultLang], "Missing translation"),
        },
        ...,
      },
      'desc': desc{
        'paragraphs': paragraphs[] {
          'value': coalesce(value[$lang], value[$defaultLang], "Missing translation"),
        },
        ...,
      },
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
