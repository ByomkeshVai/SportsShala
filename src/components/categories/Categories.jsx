import React from 'react'
import CategoryBox from './CategoryBox'
import { useSearchParams } from 'react-router-dom'
import { categories } from './CategoryData'
const Categories = () => {
  const [params, setParams] = useSearchParams()
  const category = params.get('category')
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map(item => (
          <CategoryBox
            label={item.label}
            icon={item.icon}
            key={item.label}
            selected={category === item.label}
          />
        ))}
      </div>
    </div>
  )
}

export default Categories
