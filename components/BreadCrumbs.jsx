import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const BreadCrumbs = () => {
  const router = useRouter();
  const crumbs = router.asPath.split("/")
  return (
    <div className='breadcrumb'>
      {crumbs.map((item, index) => {

        if (index != 0) return (
          <span className='crumb-item' key={`${item}-${index}`}>
            <span className='crumb-separator'>{item ? '>' : ''}</span>            
            {item ? item : 'Home'}
          </span>
        )

        return (
          <span className='crumb-item' key={`${item}-${index}`}>{item ? '/' : ''}
            <Link href={`/${item}`}>{item ? item : 'Home'}</Link>
          </span>
        )
      })}
    </div>
  )
}

export default BreadCrumbs