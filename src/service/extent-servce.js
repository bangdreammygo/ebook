

const getAuthor=async (name)=>{    
    const res=await fetch(`http://localhost:8081/extent/get/${name}`);
    const data=await res.json();
    const authors=data.data;
    return authors;
}






export {getAuthor};