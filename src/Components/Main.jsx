import React from 'react'
import Template from './Template'
import { useState, useEffect } from 'react';
// import { FaSearchPlus } from "react-icons/fa";



let API_key= "&api_key=db95773a7fb212ba790d71f6adac0e7e";
 let base_url= "https://api.themoviedb.org/3";
 let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
 let arr= ["popular", "Thearter", "Kids", "Drama", "Comedie"]


function Main() {
  const [movieData, setData] = useState([]);
  const [url_set, setUrl]= useState(url);
  const [search, setSearch] = useState()


  useEffect(() => {
         fetch(url_set)
         .then(res=>res.json()).then(data=>{
         setData(data.results)
         })
    
         }, [url_set])
         const getData =(movieType)=>{
          if(movieType=="Popular")
       {
     url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
 }
   if(movieType=="Theater")
{
url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date-lte=2014-10-22" + API_key;
}
if(movieType=="kids")
{
url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
}
if(movieType=="Drama")
{
url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
}
if(movieType=="Comedie")
{
url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
}
setUrl(url);
 }
 const searchMovie =(evt)=>{
  if (evt.key=="Enter")
    {
      url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
          setUrl(url);
          setSearch(" ");
  }
 }
         
  return (
    <div>
      <section className='header'>
           <nav className='content'>
           {
            arr.map((value)=>{
              return(
                <li><a href='#' name ={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
              )
            })
           }
          
                
            </nav>
            <nav className='content2'>
             <input type="text" placeholder='Search Movies' className='search-box' onChange={(e)=>{setSearch(e.target.value)}} 
             value={search} onKeyPress={searchMovie}/>
             {/* <button className='search-icon'><FaSearchPlus/></button> */}
             
            </nav>
         </section>
         <section className='container'>
       {
        (movieData.length==0)?<p>not found</p>: movieData.map((res, pos)=>{
          return(
            <Template info={res} key={pos}/>
          )
        })
       }
         </section>
    </div>
  )
}

export default Main








// import React from 'react'
// import Template from './Template'
// import { useState,useEffect } from 'react'

// let API_key= "&api_key=db95773a7fb212ba790d71f6adac0e7e";
// let base_url= "https://api.themoviedb.org/3";
// let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
// let arr= ["popular", "Thearter", "Kids", "Drama", "Comedie"]
// function Main() {

//   const [movieData, setMovieData] = useState([])
//   const [url_set, setUrl]= useState(url)
//   const [search, setSearch] = useState()

//   useEffect(() => {
//     fetch(url_set)
//     .then(res=>res.json())
//     .then(data=>setMovieData(data.results))
//     .catch(err=>console.log (err))
//   }, [url_set])
//   const getData = (movieType)=>{
//     if(movieType=="Popular")
//     {
//       url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
//     }
//     if(movieType=="Theater")
//     {
//       url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date-lte=2014-10-22" + API_key;
//     }
//     if(movieType=="kids")
//     {
//       url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
//     }
//     if(movieType=="Drama")
//     {
//       url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
//     }
//     if(movieType=="Comedie")
//     {
//       url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
//     }
//     setUrl(url);
//   }
//   const searchMovie=()=>{
//     if(evt.key=="Enter")
//     {
//       url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
//       setUrl(url);
//       setSearch(" ");
//     }
//   }

//   return (
//     <div>
//         <section className='header'>
//            <nav className='content'>
//             {
//               arr.map((value)=>{
//                 return(
//                   <li name={value} onClick={(e)=>{(getData(e.target.name))}}>{value}</li>
//                 )
//               })
//             }
               
//                 {/* <li>Kids</li>
//                 <li>Theater</li>
//                 <li>Comedie</li>
//                 <li>Drama</li> */}
//            </nav>
//            <nav className='content2'>
//             <input type="text" placeholder='Search Movies' className='search-box' onChange={(e)=>{setSearch(e.target.value)}} 
//             value={search} onKeyPress={searchMovie}/>
//             <button className='search-icon'>icons</button>
//            </nav>
//         </section>
//         <section className='container'>
        
//        {
//          movieData.map((res,pos)=>{
//           return(
//           <p>{ movieData.images}</p>
          
//           ) })
//        }
//         </section>
      
//     </div>
//   )
// }

// export default Main