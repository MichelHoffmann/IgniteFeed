import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

interface Post {
  id: number;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  content: Content[];
  publishedAt: Date;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

const posts: Post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/MichelHoffmann.png",
      name: "Michel Hoffmann",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que eu fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-06-05 05:32:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl:
        "https://scontent.frbr3-1.fna.fbcdn.net/v/t39.30808-6/274859847_4818919924895858_4106229609446794739_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEyHEmMUGWsVB0usbAL05ep8TXe24KFT0zxNd7bgoVPTCUDWVEKYtTG9G0eooZOliDMSv5W9Wd93ORI-295qoot&_nc_ohc=9GQ1Pvsf5m0AX_r2y6E&_nc_ht=scontent.frbr3-1.fna&oh=00_AfAiNHa4O0bWXHMRXohZ4-yOOm4C4SWMWNffegzKHuPFlQ&oe=64847D1B",
      name: "Lorrana Rodrigues",
      role: "Engenheira Agrônoma",
    },
    content: [
      { type: "paragraph", content: "Oii Pessual" },
      {
        type: "paragraph",
        content:
          "lorem ipsum sit dolor amet lorem ipsum sit dolor amet, lorem ipsum sit dolor amet, lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-06-04 08:13:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
