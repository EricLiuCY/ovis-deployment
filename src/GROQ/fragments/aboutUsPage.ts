import groq from 'groq'

const aboutUsPageGroq = groq`
  *[_type == 'aboutUsPage'][0] {
    name,
    'valueProp': valueProp{
      'lines': lines[] {
        'value': coalesce(value[$lang], value[$defaultLang], "Missing translation"),
      },
      ...,
    },
    'descriptionTitle': descriptionTitle{
      'lines': lines[] {
        'value': coalesce(value[$lang], value[$defaultLang], "Missing translation"),
      },
      ...,
    },
    'companyDescription': companyDescription{
      'paragraphs': paragraphs[] {
        'value': coalesce(value[$lang], value[$defaultLang], "Missing translation"),
      },
      ...,
    },
    'partnerDetails': partnerDetails[]{
      'profilePicture': profilePicture{
        'alt': coalesce(alt[$lang], alt[$defaultLang], "Missing translation"),
        ...,
      },
      'founderName': coalesce(founderName[$lang], founderName[$defaultLang], "Missing translation"),
      'founderTitle': coalesce(founderTitle[$lang], founderTitle[$defaultLang], "Missing translation"),
      'content': content[]{
        _type =='contentBlock'=> {
          'value': coalesce(value[$lang], value[$defaultLang], "Missing translation"),
          ...,
        },
        _type =='contentImage'=> {
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
