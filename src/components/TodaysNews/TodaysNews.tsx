import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../ReduxToolkit/Store';
import { fetchTodaysNews } from '../../ReduxToolkit/TodaysNewsSlice';
import NewsCard from '../card/NewsCard';


// interface today {
//   author: string | null,
//   content: string | null,
//   description: string | null,
//   publishedAt: string | null,
//   source: object | null,
//   title: string | null,
//   url: string | null,
//   urlToImage: string | null,
// }

interface todayObj {
  [key: string]: any
}

const TodaysNews = () => {
  const dispatch = useDispatch();
  const newsData = useSelector((store: RootState) => store.TodaysNews.todaysNews)


  console.log("store", newsData)


  useEffect(() => {
    dispatch(fetchTodaysNews())
  }, [dispatch])
  return (
    <div className='container m-5 flex flex-wrap justify-center'>

      {
        newsData.map((item: todayObj) => {

          return (item.urlToImage ? <div key={item.publishedAt} >
            <NewsCard
              imgUrl={item.urlToImage}
              newsHeadLine={item.title}
              discription={item.discription}
              url={item.url}

            />
          </div> : <div> </div>
          )
        })
      }

    </div>
  )
}

export default TodaysNews
