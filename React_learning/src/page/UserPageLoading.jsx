export default function UserPageLoading(){
    return(
        <h1>barinda</h1>
    )
}


async function getAllData() {
  try {
    const res = await fetch('https://fakestoreapi.com/users');
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
    throw err; 
  }
}