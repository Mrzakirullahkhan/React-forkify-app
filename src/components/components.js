import React from "react";
import mycss from "./css/style.css"
import pizzapic from "./pizza.jpeg"
import { useState } from "react"
import { useEffect } from "react";





const Forkifycomp = () => {

    const [allTheData, setdata] = useState([])
    const [mysearch, setsearch] = useState()


    useEffect(() => {
        const fetchApis = async () => {

            const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${mysearch}`
            const responce = await fetch(url);
            const data = await responce.json()
            const allRecipes = data.data.recipes
            setdata(allRecipes)


            console.log(allRecipes)


        }

        fetchApis();

    }, [mysearch])



    return (
        <div className="child-Div">
            <h1 className="heading">--FAST REACT PIZZA CO. --</h1>
            <h1 className="menu-heading">OUR MENU</h1>
            <input className="inputValue" type="search" onChange={(event) => {
                setsearch(event.target.value)
            }}></input>

            <div className="all-content">
            
                {
                    allTheData.map((item) => <div className="Item">
                    <img src={item.image_url} alt="MyImage" className="myimage" />
                    <div className="infromation">
                        <p className="title">{item.title}</p>
                        <p className="discription">{item.publisher}</p>
                        <p className="moreInfo">AB restaurent</p>
                    </div>
                </div> )
                }

            </div>
        </div>
    )
}











// function  Item () {
//     return(
//         <div className="Item">
//                 <img src={pizzapic} alt="MyImage" className="myimage"  />
//                 <div className="infromation">
//                     <p className="title">pizza</p>
//                     <p className="discription">this is one of the best pizza</p>
//                     <p className="moreInfo">01</p>
//                 </div>
//                 </div>
//     )
// }
export default Forkifycomp;