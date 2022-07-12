import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductFavorito,
  deleteProductFavorito,
  addProductFavorito,
  getProductFavDetail,
} from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";
import { useState } from "react";
import { FavContext } from "./FavContext";
import { Link } from "react-router-dom";



function SeeFavs() {
  const { favs, deleteProductFav } = useContext(FavContext);
  const dispatch = useDispatch();
  const idUser = window.atob(localStorage.getItem("id"));
  const [render, setRender] = useState([]);

  useEffect(() => {
    const arr = favs.map((id) => dispatch(getProductFavDetail(id)));
    console.log(favs, " soy favs");
    Promise.all(arr).then((res) => setRender(res));
  }, [favs]);
  //console.log('soy render ', render)
  return (
    <div className="bg-primary-200 h-screen">
      <NavBar />
      <section className="container p-6 mx-auto bg-primary-200">
        <h2 className="text-xl font-medium font-PT flex justify-center text-primary-300  md:text-2xl">
          FAVORITES
        </h2>

        <div className="flex items-center justify-center">
          <div className="grid gap-8 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {render.length > 0 ? (
              render.map((p) => {
                return (
                  <div key={p?.id} className="w-full bg-secundary-250 p-5 rounded max-w-xs text-center">
                     <button 
                     className="flex"
                      value={p?.id}
                      onClick={(e) => deleteProductFav(p?.id, idUser)}
                    >
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    </button>
                    <img
                      className="object-center w-40 h-40 mx-auto rounded-lg"
                      src={p?.image[0]}
                      alt={`${p}`}
                    />

                    <div className="mt-2">
                      <h3 className="text-lg font-bold">
                        {p?.name}
                      </h3>
                      <span className="mt-1 font-bold">
                        ${p?.price}
                      </span>
                    </div>
                   
                  </div>
                );
              })
            ) : (
              <div>
                <span className="text-xl font-medium font-PT flex justify-center text-primary-300  md:text-2xl">
                  You no have favorites yet D:
                </span>
                <Link to="/categories?category=all&page=1">
                  <button className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1">
                    Go add!
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
  //fixed bottom-2 right-2 w-20 m-5 lg:h-11 lg:w-14
  // const login = localStorage.getItem('login');
// const idUser = window.atob(localStorage.getItem('id'));
// const dispatch = useDispatch();
// const favoritos = useSelector(state=>state.favoritos)

// const initialUserFavs =  JSON.parse(localStorage.getItem('fav'));
// const [userFavs, setUserFavs] = useState(initialUserFavs);

// const handleClickDelete = (e)=>{
//     e.preventDefault();
//     dispatch(deleteProductFavorito(e.target.value,idUser));
//     dispatch(getProductFavorito(idUser));
//     const newArr = JSON.parse(localStorage.getItem('fav'));
//     console.log('soy el id ', e.target.value)
//     const arr = newArr.filter(i=>i!== e.target.value);
//     setUserFavs(arr);
//     localStorage.setItem('fav',JSON.stringify(arr));
// }


// console.log(userFavs)
// console.log(favoritos)
// const productToRender = [];
// favoritos.map((el)=>{
//     userFavs.map((id)=>{
//         if(el.id === id){
//             productToRender.push(el);
//         }
//     })
// })


// useEffect(()=>{
//     login &&
//     dispatch(getProductFavorito(idUser));
//     localStorage.setItem('fav',JSON.stringify(userFavs));
// },[userFavs,dispatch])
// //console.log('soy fav: ', favoritos)

// return (
// <div className='h-screen flex flex-col  overflow-auto items-center bg-primary-200'>
//     <NavBar />
//     <div className='flex justify-center items-center w-full'>
//         <div className='w-3/5 bg-primary-200 h-auto'>
    
//         <div className='flex flex-col items-center'>
//             <h1 className='font-pt font-bold text-primary-300'>FAVORITOS</h1>
//         </div>
    
//         <div className='object-center h-full bg-primary-200 flex flex-col content-center place-content-center text-center'>
//         {productToRender.map((p)=>{
//             return(
//                 <div key={p.id} className='flex h-full justify-start bg-secundary-250 border-b border-primary-200'>
        
//                     <div className='bg-secundary-100'>
//                         <img className='object-contain h-36 w-36' src={p.image[0]} alt='p-foto'/>
//                     </div>

//                     <div className='flex flex-col ml-12 items-start justify-evenly'>
//                     <div>
//                         <p className='font-PT text-xl mt-3'>{p.name}</p>
//                     </div>
                
//                     <div className='left-0'>
//                         <p className='font-PT font-bold  '>${p.price}</p>
//                     </div>
//                     <div>
//                             <button value={p.id} onClick={handleClickDelete}>Delete</button>
//                     </div>
                
//                     </div>
    
//             </div>
//             )
//         })}
//     </div>
//     </div>
// </div>
// </div>
// )
}

export default SeeFavs;
