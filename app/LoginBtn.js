'use client'
import { signIn,signOut } from 'next-auth/react'

export default function LoginBtn({login}) {
    return(
        <div>
            {
                login === undefined 
                ? 
                <div>
                    <button onClick={()=>{signIn()}}>로그인</button> 
                </div> //로그인안한 상태
                : 
                <div>

                    <button onClick={()=>{signOut()}}>로그아웃</button> {login.name}님 안녕하세요.
                </div>
                //로그인 한 상태
            }
        </div>
    )
}