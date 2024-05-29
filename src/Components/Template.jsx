import React from 'react'

const Template = (movie) => {
    console.log(movie.info);
    let img_path="https://image.tmdb.org/t/p/w500"
  return (
    <div>
        <section className='movie-container'>
             <img src={img_path+movie.info.backdrop_path} alt="" className='poster' />
            
             <nav className='movie-details'>
                 <nav className='box'>
                     <h4 className='title'>{movie.info.title}</h4>
                     <p className='rating'>{movie.info.vote_average}</p>

                 </nav >
                 <nav className='overview'>
                    <p>{movie.info.overview}</p>
                
                    
                 </nav>

             </nav>
            
         </section>

    </div>
  )
}

    
 

export default Template












// import React from 'react'


// function Template(movie) {
//     console.log(movie.info);
//     let img_path="https://image.tmbd.org/t/p/w500";
//   return (
//     <div>
//         <section className='movie-container'>
//             <img src={img_path + movie.info.poster_path} alt="" className='poster' />
//             <nav className='movie-details'>
//                 <nav className='box'>
//                     <h4 className='title'>{movie.info.title}</h4>
//                     <p className='rating'>{movie.info.average}</p>

//                 </nav >
//                 <nav className='overview'>
//                     <h1>{movie.info.overview}</h1>
//                     <p>{movie.info}</p>
                    
//                 </nav>

//             </nav>
            
//         </section>
//     </div>
//   )
// }

// export default Template