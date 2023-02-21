import {useRef,useState,useEffect,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import style from './AdminLogin.module.css'
import AuthContext from '../../context/AuthProvider'

const AdminLogin = () => {
    const {setAuth} = useContext(AuthContext);

    const userRef = useRef();
    const errRef = useRef();

    const [user,setUser] = useState('');
    const [pwd,setPwd] = useState('');
    const [errMsg,setErrMsg] = useState('');
    const [success,setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user,pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user,pwd)
        setUser('');
        setPwd('');
        setSuccess(true);
    }

  return (
    <div>
        <section className={style.section}>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Sign In</h1>
                    <form   className={style.content} onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
        </section>
    </div>
  )
}

export default AdminLogin