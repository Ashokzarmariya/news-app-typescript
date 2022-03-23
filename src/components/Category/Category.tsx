import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { news } from '../../modle/modle';
import { fetchCategoryNews } from '../../ReduxToolkit/CategorySlice';
import { RootState } from '../../ReduxToolkit/Store';
import NewsCard from '../card/NewsCard';

const Category = () => {
    //const [data, setData] = useState([])
    //console.log(data)
    const { category } = useParams();
    console.log("params value",category)
    const dispatch = useDispatch();
    const categoryData = useSelector((store:RootState) => store.Categorys.category)
    console.log("store",categoryData)
    useEffect(() => {
        
        dispatch(fetchCategoryNews(category))
    },[dispatch,category])
  return (
    <div className='flex flex-wrap justify-center mt-5'>
          {categoryData.map((item:news)=>{
              return ( item.urlToImage?
          <NewsCard
              key={Date.now()}
              newsHeadLine={item.title}
              imgUrl={item.urlToImage}
              url={item.url}
              discription={item.description}
          />:<div> </div>
              )
          })}
          
    </div>
  )
}

export default Category
