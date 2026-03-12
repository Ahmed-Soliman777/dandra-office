"use client"
import { useEffect, useState } from "react"
import { Provider } from "react-redux"
import { makeStore, AppStore } from "@/lib/store"
import { useDispatch } from "react-redux"
import { setToken, setPayload } from "@/lib/features/userSlice"
import { JWTPayload } from "../utils/types"

function InitializeAuth({ token, payload }: { token: string | undefined, payload: JWTPayload | null }) {
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            dispatch(setToken(token))
            dispatch(setPayload(payload))
        }
    }, [token, payload, dispatch])

    return undefined
}

export default function StoreProvider({
    children,
    initialToken,
    initialPayload
}: {
    children: React.ReactNode,
    initialToken: string | undefined,
    initialPayload: JWTPayload | null
}) {
    const [store] = useState<AppStore>(() => makeStore())
    return <Provider store={store}>
        <InitializeAuth token={initialToken} payload={initialPayload} />
        {children}
    </Provider>;
}