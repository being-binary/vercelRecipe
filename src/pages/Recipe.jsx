import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";


const Recipe = () => {
    let [display, setDisplay] = useState(true)
    let [displaytwo, setDisplayTwo] = useState(true)
    let [pagination, setPagination] = useState(1)
    let noOfList = 5
    let lastIndex = noOfList * pagination
    let firstIndex = noOfList * (pagination - 1)
    let location = useLocation()
    let recipe = location.state
    // console.log(recipe)
    // console.log(Object.entries(recipe.totalDaily))

    let mineralArray = Object.entries(recipe.totalDaily).slice(firstIndex, lastIndex)
    let noOfBtn = Math.ceil(Object.entries(recipe.totalDaily).length / noOfList)
    let totalPrecent = () => {
        let sum = 0
        Object.entries(recipe.totalDaily).forEach((mineral) => {
            sum += +(mineral[1].quantity)
        })
        return sum
    }
    let handleNext = () => {
        // console.log(pagination)
        if (pagination >= noOfBtn) {
            pagination = 1
        }
        else {
            setPagination(pagination + 1)
        }
    }
    let handlePrev = () => {
        // console.log(pagination)
        if (pagination > 1) {
            setPagination(pagination - 1)
        }
        else {
            pagination = noOfBtn
        }
    }
    return (
        <div className='py-[70px] container font-sans p-4 mx-auto lg:max-w-6xl md:max-w-4xl'>
            <div className='flex flex-row px-9 py-5 gap-10 '>
                <div className=''>
                    <img src={recipe.image} alt="" className='m-auto border border-black p-2' />
                    <p className='text-xl capitalize mt-3'>source&nbsp;:&nbsp;{recipe.source}</p>

                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-4xl capitalize'>{recipe.label}</p>
                    <p className='text-xl capitalize'>calories&nbsp;:&nbsp;{recipe.calories.toFixed(2)}</p>
                    <p className='text-xl capitalize'>cuisine&nbsp;Type&nbsp;:&nbsp;{recipe.cuisineType}</p>
                    <p className='text-xl capitalize'>dish&nbsp;Type&nbsp;:&nbsp;{recipe.dishType}</p>
                    <p className='text-xl capitalize'>meal&nbsp;type&nbsp;:&nbsp;{recipe.mealType}</p>
                    <p className='text-xl capitalize'>total&nbsp;Weight&nbsp;:&nbsp;{recipe.totalWeight.toFixed(2)}</p>
                    <div className='border border-gray-400 rounded-2xl px-2 py-2 mt-3'>
                        <p className='text-xl capitalize'>diet Labels</p>
                        <span className='grid grid-cols-2 gap-1 py-4   '>
                            {
                                recipe.dietLabels.map((value, index) => {
                                    return <p key={index} className='bg-purple-400 w-max flex flex-row px-4 py-3 rounded-2xl items-center m-auto gap-1'><FaCheckCircle />{value}</p>
                                })

                            }
                        </span>
                    </div>
                </div>
            </div>
            <div className='py-4 border border-gray-400 rounded-2xl px-4 flex flex-col gap-2'>
                <span className='flex flex-row gap-5 mb-5'>
                    <p className='text-2xl capitalize underline' onClick={() => displaytwo ? setDisplay(!display) : setDisplayTwo(!displaytwo)}>health Labels</p>
                    <p className='text-2xl capitalize underline' onClick={() => displaytwo ? setDisplay(!display) : setDisplayTwo(!displaytwo)}>ingredient</p>
                    <p className='text-2xl capitalize underline' onClick={() => setDisplayTwo(!displaytwo)}>total Daily</p>
                </span>

                {displaytwo ? (display ? <span className='grid grid-cols-4 gap-1 '>
                    {
                        recipe.healthLabels.map((value, index) => {
                            return <p key={index} className='bg-purple-400 h-min w-max flex flex-row px-1 py-1 rounded-2xl items-center m-auto'><FaCheckCircle />{value}</p>
                        })

                    }
                </span>
                    :
                    <span className='grid grid-cols-4 gap-2 '>
                        {
                            recipe.ingredientLines.map((value, index) => {
                                return <p>{value}</p>
                            })

                        }
                    </span>)
                    :
                    (

                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 rounded-s-lg">
                                            Mineral Short Form
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Mineral Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 rounded-e-lg">
                                            Unit
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        mineralArray.map((mineral, index) => {
                                            return <tr key={index} className="bg-white dark:bg-gray-800">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {mineral[0]}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {mineral[1].label}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {mineral[1].quantity.toFixed(2) + mineral[1].unit}
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                                <tfoot>
                                    <tr className="font-semibold text-gray-900 dark:text-white">
                                        <th scope="row" className="px-6 py-3 text-base">Total</th>
                                        <td className="px-6 py-3">{Object.entries(recipe.totalDaily).length}</td>
                                        <td className="px-6 py-3">{totalPrecent().toFixed(2)}%</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <div className='text-center'>
                                <button className='px-2 py-1 border mx-0.5 rounded-md' onClick={handlePrev}>Last</button>
                                {
                                    Array(noOfBtn).fill(0).map((v, i) => {
                                        return <button key={i} onClick={() => setPagination(i + 1)} className='px-2 py-1 border mx-0.5 rounded-md'>{i + 1}</button>
                                    })
                                }
                                <button className='px-2 py-1 border mx-0.5 rounded-md' onClick={handleNext}>Next</button>

                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default Recipe
