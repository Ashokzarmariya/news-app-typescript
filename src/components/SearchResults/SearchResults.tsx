import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchSearchNews } from '../../ReduxToolkit/SearchSlice';
import { RootState } from '../../ReduxToolkit/Store';
import NewsCard from '../card/NewsCard';

interface searchType{
    [key: string]: any
}
const SearchResults = () => {
    const { keyword } = useParams<string>();
    const results = useSelector((store: RootState) => store.SearchResults.searchResult)
    console.log("results",results)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchSearchNews(keyword))
    },[dispatch, keyword])
  return (
      <div className='flex flex-wrap justify-center mt-5'>
          {results.map((item:searchType)=>{
              return (
          <NewsCard
              key={Date.now()}
              newsHeadLine={item.title}
              imgUrl={item.urlToImage}
              url={item.url}
              discription={item.discription}
          />
              )
          })}
          
    </div>
  )
}

export default SearchResults
