import React from 'react'

const ScoreCard = (el) => {
   const {track}=el
  return (
   
      <div className="Card">
  <h3>Type : {track}</h3>
</div>
  )
}

export default ScoreCard
