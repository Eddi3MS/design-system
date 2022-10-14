import { colors } from '@ems/tokens'
import { getContrast } from 'polished'

function textColorContrast(color: string) {
  return getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF'
}

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: textColorContrast(color),
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
