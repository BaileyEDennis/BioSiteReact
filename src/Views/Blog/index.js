import React from 'react';
import BlogCard from '../../Components/Cards/blogCard';

export default function Blog() {
  return (
      <div id="blog">
        <h2 id="smallHead">
          LIFE: ONE BOOK, PROJECT, ADVENTURE, OR MEAL AT A TIME
        </h2>
        <h1 id="bigHead">Self Aware & Startled</h1>
        <div id="mini-nav">
          <div>
            <a href="www.google.com">All Topics</a>
          </div>
          <div>
            <a href="www.google.com">Software & Development</a>
          </div>
          <div>
            <a href="www.google.com">Outdoor Adventures</a>
          </div>
          <div>
            <a href="www.google.com">Cooking</a>
          </div>
        </div>
        <BlogCard />
      </div>
  );
}
