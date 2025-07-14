import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewTodo = () => {

    const [todo, changeTodo] = useState(
        {
            "todos": []
        }
    )

    const fetchData = () => {
        axios.get("https://dummyjson.com/todos").then(
            (response) => {
                changeTodo(response.data)
            }
        ).catch()
    }

    useEffect(() => { fetchData() }, [])


    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



                        <div className="row g-3">
                            {todo.todos.map((value, index) => {
                                return (

                                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">


                                        <div class="card">
                                            <div class="card-header text-center">
                                                {value.id}
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.todo}</h5>
                                                <p class="card-text">{value.userId}</p>

                                                <button
                                                    className={`btn ${value.completed ? 'btn-success' : 'btn-danger'}`}
                                                >
                                                    {value.completed ? 'Completed' : 'Pending'}
                                                </button>

                                            </div>


                                        </div>


                                    </div>

                                )
                            })}

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewTodo