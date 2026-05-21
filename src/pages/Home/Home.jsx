import React from 'react'
import { Layout } from '../../components/Layouts/Layout';
import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import "../../styles/HomeStyle.css"

const Home = () => {
  
  return (
    <Layout>
      <Section1 />
      <Section2/>
    </Layout>
  )
}

export default Home;