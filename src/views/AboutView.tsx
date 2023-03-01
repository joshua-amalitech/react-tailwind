import React, { FC } from 'react'
import { FaArrowLeft } from 'react-icons/fa';

async function getUsers(
  setState: React.Dispatch<React.SetStateAction<[]>>
) {
  try {
    let response: Response = await fetch("https://jsonplaceholder.typicode.com/users");
    setState(await response.json());

  } catch (error) {
    return setState([]);

  }
}

async function getPosts(
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  user: Number,
  setState: React.Dispatch<React.SetStateAction<[]>>
) {
  try {
    let response: Response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let posts = await response.json()

    posts = posts.filter((post: any) => post.userId == user)
    setState(posts);

  } catch (error) {
    return setState([]);

  }
}

const getClassName = (isUser: boolean) => {
  return `relative px-4 py-3 my-2 rounded-md ${isUser ? 'bg-[#4c1d9599] text-gray-200' : 'bg-[#4c1d9555] text-gray-700'} hover:bg-[#4c1d95aa] hover:text-gray-100 active:top-0.5 cursor-pointer transition-all ease-in-out`;
}

export const AboutView: FC = () => {
  const [userid, setUserId]: [number, React.Dispatch<React.SetStateAction<number>>] = React.useState(0);
  const [users, setUsers]: [[], React.Dispatch<React.SetStateAction<[]>>] = React.useState([]);
  const [posts, setPosts]: [[], React.Dispatch<React.SetStateAction<[]>>] = React.useState([]);

  React.useEffect(() => {
    getUsers(setUsers)
  }, [])


  if (users.length > 0) {
    return (
      <>
        <header className='shadow-md'>
          <nav className='max-w-6xl mx-auto flex justify-between items-center p-4'>
            <FaArrowLeft />
            <div>POSTS - JSONPlaceholder</div>
          </nav>
        </header>
        <main className='max-w-6xl mx-auto flex p-6'>
          <section className='w-[300px] h-fit shadow-thin-edge p-4 rounded-md'>
            {users.map((user: any) => {
              return <div className={getClassName(user.id == userid)}
                key={user.id} onClick={(e) => {
                  setUserId(user.id)
                  return getPosts(e, user.id, setPosts);
                }}>
                {user.name}
              </div>
            })}
          </section>
          <section className='flex-1 p-4 m-2 h-fit flex flex-col justify-center items-center'>
            {posts.length > 0 ? posts.map((post: any) => {
              return <div className='shadow-thin-edge p-4 m-2 rounded-md'>{post.body}</div>
            }) : <div className='h-6 w-6 animate-ping bg-[#8b5cf6] rounded-full'></div>}
          </section>
        </main>
      </>
    );
  }

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-[#1e293bcc]'>
      <div className='h-6 w-6 animate-ping bg-[#8b5cf6] rounded-full'></div>
    </div>
  )
}
