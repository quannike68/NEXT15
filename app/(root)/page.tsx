import React from 'react'
import SearchForm from '@/app/components/SearchForm'

export default async function page({searchParams} : {searchParams : Promise<{query?: string}>}) {

  const query = (await searchParams)?.query ;
  console.log('query', (await searchParams).query)
  

  return (
    <> 
    <section className='pink_container'>  
       <h1 className='heading'>
      Home
    </h1>
      <SearchForm query={query}/>
    </section>

    <section className='section_container'>
      <p className='text-30-semibold'>
          {query ? `Search results for "${query}"` : 'All startup'}
      </p>

    </section>
 
    </>
  )
}

