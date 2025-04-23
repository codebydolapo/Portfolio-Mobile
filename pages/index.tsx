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

const Home: NextPage = () => {



  return (
    <div className={`${styles.main} font-montserrat text-[#4b4f56] relative scroll-smooth`}>
      <Head>
        <title>codebydolapo</title>
        <meta name="description" content="codebydolapo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={`min-w-[100vw] min-h-[100vh] w-[100vw] mx-0 h-auto relative text-[#000000a9]`}>
        <Menu />
        <Intro />
        <About/>
        <Sliders
        data = {projects}
        title = {"Projects"}
        id = {"projects"}
        />
         <Sliders
        data = {blogs}
        title = {"Blog Posts"}
        id = {"blogPosts"}
        />
        <Footer/>
      </div>
    </div>
  )
}

export default Home
