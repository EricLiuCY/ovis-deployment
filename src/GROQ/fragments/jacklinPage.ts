import groq from 'groq'

const JacklinPageGROQ = groq`
  *[_type == 'jacklinPage'][0] {
    name,
    'valueProp': valueProp{
      'lines': lines[] {
        'value': coalesce(value[$lang], value[$defaultLang], "Missing translation"),
      },
      ...,
    },
    'backgroundImage': backgroundImage{
      'alt': coalesce(alt[$lang], alt[$defaultLang], "Missing translation"),
      ...,
    },
    'jacklinSection1': jacklinSection1{
      'title': title{
        'lines': lines[] {
          'value': coalesce(value[$lang], value[$defaultLang], "Missing translation"),
        },
        ...,
      },
      'caption': caption{
        'lines': lines[] {
          'value': coalesce(value[$lang], value[$defaultLang], "Missing translation"),
        },
        ...,
      },
      'description': description{
        'paragraphs': paragraphs[] {
          'value': coalesce(value[$lang], value[$defaultLang], "Missing translation"),
        },
        ...,
      },
      ...,
    },
    'jacklinSection2': jacklinSection2{
      'title': title{
        'lines': lines[] {
          'value': coalesce(value[$lang], value[$defaultLang], "Missing translation"),
        },
        ...,
      },
      'description': description{
        'paragraphs': paragraphs[] {
          'value': coalesce(value[$lang], value[$defaultLang], "Missing translation"),
        },
        ...,
      },
      'imageGallery': imageGallery[] {
        'alt': coalesce(alt[$lang], alt[$defaultLang], "Missing translation"),
        ...,
      },
      ...,
    },
    ...,
  }
`

export default JacklinPageGROQ
