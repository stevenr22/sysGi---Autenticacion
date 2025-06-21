import { useEffect, useState } from "react";

function useUser(){
    const [user, setUser] = useState({ nombre: "", apellido: ""});
    useEffect(() => {
        const stored = localStorage.getItem("user");
        if(stored){
            try{
                const parsed = JSON.parse(stored);
                setUser(parsed);

            }catch (error) {
                console.error("Error al parsear el usuario:", error);
            }
        }
    }, []);
    return user;

};
export default useUser;