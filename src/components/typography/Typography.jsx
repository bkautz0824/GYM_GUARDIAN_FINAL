export function TypographyBlockquote({text}) {
    return (
      <blockquote className="pl-6 mt-6 italic border-l-2">
        {text}
      </blockquote>
    )
  }
  
  export function TypographyH1({text}) {
    return (
      <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
        {text}
      </h1>
    )
  }

  export function TypographyH2({text}) {
    return (
      <h2 className="pb-2 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20 first:mt-0">
        {text}
      </h2>
    )
  }

  
  export function TypographyH3({text}) {
    return (
      <h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
        {text}
      </h3>
    )
  }
  
  export function TypographyLarge() {
    return (
      <div className="text-lg font-semibold">Are you sure absolutely sure?</div>
    )
  }

  export function TypographySmall({text}) {
    return (
      <small className="text-sm font-medium leading-none">{text}</small>
    )
  }

  export function TypographyMuted({text}) {
    return (
      <p className="text-sm text-muted-foreground">{text}</p>
    )
  }

  export function TypographyLead({text}) {
    return (
      <p className="text-xl text-muted-foreground">
        {text}
      </p>
    )
  }

  export function TypographyP({text}) {
    return (
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      {text}
      </p>
    )
  }
  