import AppLogo from '@/components/AppLogo'
import PageHead from '@/components/PageHead'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const Home: NextPage = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            location.href = "/dashboard";
        }, 2000)
    }

    return (
      <div className="login__page">

          <PageHead title='Login' />

          {loading && 
              <div className="loading">
                  <AiOutlineLoading3Quarters className='animate-spin text-5xl' />
              </div>
          }

          <div className="wrapper">
              <div className="logo_container">
                <AppLogo />
              </div>

                <div className="main">
                    
                    <div className="mockup_container relative w-12">
                        <Image src='/images/mockup.svg' alt="MOCKUP IMAGE" layout='fill' />
                    </div>

                    <div className="form__wrapper">
                        <h1 className="heading">Welcome!</h1>
                        <p className="paragraph">Enter Login Details</p>

                        <form className="form" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Email Address" className="form_input" />
                            <div className="input_box">
                                <input type={show ? "text" : "password"} placeholder="Password" />
                                <button type="button" onClick={() => setShow(!show)}>
                                    {show ? "Hide" : "Show"}
                                </button>
                            </div>
                            <a href="#" className="forgot_password">Forgot password?</a>
                            <button type="submit" className="submit_btn">Log in</button>
                        </form>
                    </div>
                </div>
          </div>
      </div>
    )
}

export default Home
