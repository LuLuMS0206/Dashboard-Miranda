const apiBack = import.meta.env.VITE_BACKEND_URL;

export async function backendAPIcall(path: string, method = 'GET', data: any = null) {
    const token = localStorage.getItem("authToken");
    try {
        const response = await fetch(`${apiBack}${path}`, {
            method,
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json',
            },
            body: data ? JSON.stringify(data) : undefined
        });
 console.log(response)
        if ([401, 403].includes(response.status)) {
            // localStorage.clear();
            // location.reload();
            return;
        } else if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        return await response.json();
    } catch (e) {
        console.log(e)
        throw e;
    }
}

export async function login(user: { email: string, password: string }) {
    try {
        const response = await backendAPIcall('/login', 'POST', user);

        localStorage.setItem('TOKEN_KEY', response.Token);
        localStorage.setItem('user', JSON.stringify(response.User));
        
        return response.User;
    } catch (error) {
        window.alert(error);
        throw error;
    }
}
