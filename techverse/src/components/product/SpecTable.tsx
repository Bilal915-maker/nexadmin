import type { ReactNode } from 'react'

export function SpecTable({ rows, caption }: { rows: [ReactNode, ReactNode][]; caption?: string }) {
  return (
    <table className="spec-table w-full">
      {caption && <caption className="sr-only">{caption}</caption>}
      <tbody>
        {rows.map(([k, v], i) => (
          <tr key={i}>
            <th scope="row">{k}</th>
            <td>{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export const NotDocumented = ({ label = 'Non documenté' }: { label?: string }) => <span className="text-graphite-400 italic">{label}</span>
