import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { register, reset } from "../features/Auth/authSlice"
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import LoadingAnimation from "./LoadingAnimation"

const Register = () => {
    const [formData, setForm] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const { name, email, password, password2 } = formData
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

    const onChange = (e) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            toast.error('Wrong Password!')
        } else {
            const userData = {
                name,
                email,
                password,
                password2
            }

            dispatch(register(userData))
        }
    }

    if(isLoading){
        return <LoadingAnimation />
    }
    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Create Your Own Discipline</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Enter your BEAUTIFUL name"
                            onChange={onChange} />
                    </div>
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
                            placeholder="Enter password"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password2"
                            name="password2"
                            value={password2}
                            placeholder="Conform password"
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

export default Register
