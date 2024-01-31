import React,{useState} from "react";

import AppContext from "./AppContext";

const AppContextProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [settings, setSettings] = useState(null);
    const [theme, setTheme] = useState(null);
    const [notifications, setNotifications] = useState(null);
    const [token, setToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    return(
        <AppContext.Provider value={{
            token,
            setToken,
            refreshToken,
            setRefreshToken,
            notifications,
            setNotifications,
            theme,
            setTheme,
            settings,
            setSettings,
            user,
            setUser
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider