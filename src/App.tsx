import { Post, PostType } from './components/Post'
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/116582484?v=4',
      name: 'Lucas Loureiro',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera'  },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'  },
    ],
    publishedAt: new Date ('2023-06-13 15:27:58')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/39869298?v=4',
      name: 'Gabriel Loureiro',
      role: 'Front-End Developer'
    },
    content: [
      { type: 'paragraph', content: 'Olá, me chamo Gabriel'  },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'  },
    ],
    publishedAt: new Date ('2023-06-12 15:37:58')
  }
];

export function App(){
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {
          posts.map(post => {
            return (
            <Post 
              key={post.id}
              post={post}

            />
            )
          })
        }
        </main>
      </div>
    </>
  )
}




