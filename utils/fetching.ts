export const configfetch = {
    post:{
        method:"POST",
        headers: {
            "Content-Type": "application/json", // Tipo de contenido
          },
    }
}

export async function fetchGetData<T>(path:string = "") : Promise<T>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_ROUTE_API}${path}`);
    const data: T = await res.json();
    return data;
}

export async function fetchPostData<T>(path:string = "", body:any) : Promise<T>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_ROUTE_API}${path}`,
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Tipo de contenido
            },
            body: JSON.stringify(body),
        }
    );
    const data: T = await res.json();
    return data;
}

