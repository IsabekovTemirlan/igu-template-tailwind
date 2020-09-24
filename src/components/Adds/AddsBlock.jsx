import React from 'react'

export const AddsBlock = ({text, img}) => {
  return (
    <div className="lg:w-1/3 px-4 mb-6">
      <img className="w-48" src={img} alt="" />
      <p className="text-gray-500 leading-relaxed">{text.length > 30 && text.substring(0, 220) + '...'}</p>
    </div>
  )
}