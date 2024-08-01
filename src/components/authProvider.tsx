"use client"

import { store } from "@/redux/store"
import { SessionProvider } from "next-auth/react"
import React from "react"
import { Provider } from "react-redux"

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    return (

        <Provider store={store}>

            <SessionProvider>{children}</SessionProvider>
        </Provider>
    )
}

export default AuthProvider;