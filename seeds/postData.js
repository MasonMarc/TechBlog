const { Post } = require('../models');

const postdata = [
  {
    title: 'Google’s Flutter showcases new graphics capabilities, WebAssembly and RISC-V support',
    contents: 'Flutter, Google’s open-source framework for building multi-platform apps for mobile, web and desktop, is hosting its Flutter Forward event in Nairobi, Kenya today.',
  },
  {
    title: 'Madrid selects Dott, Lime and Tier for scooter licenses',
    contents: 'Madrid has renewed the operating licenses for scooter-sharing services in the city. The city council has chosen three operators for the next three years — Dott, Lime and Tier. This trio of companies will sound familiar as these companies also won tender processes in several European cities in recent years.',
  },
  {
    title: 'AtomicJar opens public beta of Testcontainers Cloud, cloud version of open source testing tool',
    contents: 'Working with, microservices-based development environments presents a unique set of testing challenges. Richard North developed an open source solution called Testcontainers in 2015 to help ease this problem for developers. Today, the open source project is used by companies like Uber, Netflix, Spotify and Capital One.',
  },
  
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;