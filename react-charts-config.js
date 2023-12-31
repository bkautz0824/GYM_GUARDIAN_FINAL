const data = [
    {
      label: 'React Charts',
      data: [
        {
          date: new Date(),
          stars: 202123,
        }
        // ...
      ]
    },
    {
      label: 'React Query',
      data: [
        {
          date: new Date(),
          stars: 10234230,
        }
        // ...
      ]
    }
  ]

  function App() {
    const primaryAxis = React.useMemo(
      () => ({
        getValue: datum => datum.date,
      }),
      []
    )
  
    const secondaryAxes = React.useMemo(
      ()=> [
        {
          getValue: datum => datum.stars,
        },
      ],
      []
    )
  
    return (
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    )
  }