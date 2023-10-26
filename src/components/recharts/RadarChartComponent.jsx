import { ResponsiveRadar } from '@nivo/radar'
// import { data } from './data'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    "taste": "fruity",
    "chardonay": 59,
    "carmenere": 29,
    "syrah": 53
  },
  {
    "taste": "bitter",
    "chardonay": 90,
    "carmenere": 45,
    "syrah": 51
  },
  {
    "taste": "heavy",
    "chardonay": 112,
    "carmenere": 31,
    "syrah": 100
  },
  {
    "taste": "strong",
    "chardonay": 33,
    "carmenere": 48,
    "syrah": 43
  },
  {
    "taste": "sunny",
    "chardonay": 91,
    "carmenere": 108,
    "syrah": 100
  }
]
export const MyResponsiveRadar = ({ data }) => (
    <ResponsiveRadar
        data={data}
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)