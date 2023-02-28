import groq from 'groq'

const aboutUsPageGroq = groq`
  *[_type == 'aboutUsPage'][0] {
    name,
    'companyDescription': coalesce(companyDescription[$lang], companyDescription[$defaultLang], "Missing translation"),
    'partnerDetails': partnerDetails[]{
      'profilePicture': profilePicture{
        'alt': coalesce(alt[$lang], alt[$defaultLang], "Missing translation"),
        ...,
      },
      'founderName': coalesce(founderName[$lang], founderName[$defaultLang], "Missing translation"),
      'founderTitle': coalesce(founderTitle[$lang], founderTitle[$defaultLang], "Missing translation"),
      'founderSubtitle': coalesce(founderSubtitle[$lang], founderSubtitle[$defaultLang], "Missing translation"),
      'founderDescription': coalesce(founderDescription[$lang], founderDescription[$defaultLang], "Missing translation"),
      'additionalContents': additionalContents[]{
        _type =='additionalContentBlock'=> {
          'additionalDescription': coalesce(additionalDescription[$lang], additionalDescription[$defaultLang], "Missing translation"),
          ...,
        },
        _type =='additionalContentImage'=> {
          'alt': coalesce(alt[$lang], alt[$defaultLang], "Missing translation"),
          ...,
        },
      },
      ...,
    },
    ...,
  }
`

export default aboutUsPageGroq
