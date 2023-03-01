interface LinesAndParagraphsProps {
  value: { value: string }[]
  concact?: boolean
}

export default function LinesAndParagraphs({ value, concact } : LinesAndParagraphsProps) {
  if (concact) {
    let strVal = ''
    value.forEach((line, index) => {
      if (index < value.length - 1) return strVal += `${line.value} `
      return strVal += line.value
    });
    return <>{strVal}</>
  }
  return (
    <>
        {value.map((line, index) => (
          <>{line.value}{(index < value.length - 1) && <br/>}</>
        ))}
    </>
  )
}
