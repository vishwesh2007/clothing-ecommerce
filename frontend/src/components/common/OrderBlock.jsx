import React from 'react'

function OrderBlock({orderNum,title}) {
  return (
    <div className="bg-bg border-[#E7E3DC] border p-5 flex flex-col rounded-(--radius-s) gap-2">
      <h2 className="text-d-h3 font-semibold">{orderNum}</h2>
      <h2 className="text-d-card-desc text-ink-faint font-medium">{title}</h2>
    </div>
  );
}

export default OrderBlock
