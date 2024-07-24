import { useState, useEffect } from "react"
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { login, reset } from "../features/Auth/authSlice"
import { toast } from 'react-toastify'
import LoadingAnimation from "./LoadingAnimation"

const Login = () => {
    const [formData, setForm] = useState({
        email: '',
        password: '',
    })
    const onChange = (e) => {
        setForm((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const { email, password } = formData
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const {user, isLoading, isError, isSuccess , message} = useSelector((state)=> state.auth )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    if(isLoading){
        return <LoadingAnimation />
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                    <p>Login And Build Your Plans</p>
                </h1>
                <p>Create Your Own Discipline</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn submit-btn">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login
