import React from 'react'

type Params = {
    params: {
        portfolio: string
    }
}

export default function PortfolioPage({params: {portfolio}}: Params) {
  return (
    <div>{portfolio}</div>
  )
}
