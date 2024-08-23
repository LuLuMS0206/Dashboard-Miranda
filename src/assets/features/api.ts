const apiBack = import.meta.env.VITE_BACKEND_URL;

export async function backendAPIcall(path: string, method = 'GET', data: any = null) {
    const token = localStorage.getItem("authToken");
    try {
        const response = await fetch(`${apiBack}${path}`, {
            method,
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json',
            },
            body: data ? JSON.stringify(data) : undefined
        });

        console.log("Response status:", response.status);
        console.log("Response body:", await response.clone().text()); 

        if ([401, 403].includes(response.status)) {
    
            throw new Error("Unauthorized or forbidden");
        } else if (!response.ok) {

            const errorText = await response.text();
            throw new Error(`Network response was not ok: ${errorText}`);
        }

        return await response.json();
    } catch (e) {
        console.error("Error in backendAPIcall:", e);
        throw e;
    }
}
