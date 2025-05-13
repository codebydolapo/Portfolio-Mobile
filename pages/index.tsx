import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/mainbody.module.css'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import Intro from '../components/Intro';
import About from '../components/About'
import blogs from '../data/blogs'
import Sliders from '../components/Sliders'
import Footer from '../components/Footer'
import projects from '../data/projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {



  return (
    <div className={`${styles.main} w-screen overflow-y-scroll overflow-x-hidden font-montserrat text-[#4b4f56] scroll-smooth scrollbar-hidden `}>
      <Head>
        <title>codebydolapo</title>
        <meta name="description" content="codebydolapo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={`min-w-screen min-h-[100vh] mx-0 h-auto relative text-[#000000a9] ${styles.mainbody}`}>
        <Menu />
        <Intro />
        <About />
        <Sliders
          data={projects}
          title={"Projects"}
          id={"projects"}
        />
        <Sliders
          data={blogs}
          title={"Blog Posts"}
          id={"blogPosts"}
        />
        <Skills />
        <Footer />
      </div>
    </div>
  )
}

export default Home
