import React from 'react';

export default function BlogCard() {
  return (
    <div className="single-post">
      <div id="date">
        <h5>Feb 17 • 5min read</h5>
      </div>
      <div className="title">
        <h1>Solving Euler Problem 8</h1>
      </div>
      <div className="subtitle">
        <h2>A convoluted solution to a big problem</h2>
      </div>
      <img
        src="https://www.irishtimes.com/polopoly_fs/1.4455419.1610375349!/image/image.jpg_gen/derivatives/box_620_330/image.jpg"
        className="card-img-top"
        alt="..."
      />
      <div id="content">
        <p>
          I have been slowly (and painfully!) moving though the{' '}
          <a href="https://www.freecodecamp.org/learn/coding-interview-prep/">
            Project Euler
          </a>{' '}
          equations on freecodecamp. After starting a few days ago, I figured it
          would be worth while chronicling my progress through the course and
          sharing my solutions and outlook on how to solve a few of them. Today,
          since I just solved this problem and it is still fresh on my mind we
          start with challenge number eight. Here are the instructions:
        </p>
        <div className="instructions">
          <p>
            <strong>
              The four adjacent digits in the 1000-digit number that have the
              greatest product are 9 × 9 × 8 × 9 = 5832. Find the n adjacent
              digits in the 1000-digit number that have the greatest product.
              What is the value of this product?
            </strong>
          </p>
        </div>
        <p>
          Sounds easy enough! However, either because I am slow, or a newbie, or
          perhaps I am just plain bad at this right now, the solution did not
          come to me right away. I busted out my notebook and began scrawling
          what to an outsider must have been ancient germanic runes. It should
          also be noted that this came with a big, one-thousand digit number.
          Something like: thousandDigits = [7,3,1,6,7,1,7,6,5,3,1,3,3,0,6....]
        </p>
        <p>
          The first thing I did during my frantic rune-scratching was to ask
          what tools might I need. Since we are grabbing four numbers at a time
          out of an array, I figured an array.slice() method would work nicely
          here. We can pass arguments to the method for a start and stop like
          so: thousandDigits.slice(0, 3). That will give me the numbers at
          position 0, 1, 2, and 3. So, if we pass in 'n' as 4, that would work
          perfectly. The way we had to tune it was to slowly go through and find
          all the adjacent products and compare them. So a loop will come in
          handy. The final key to the puzzle was to then multiply those four
          numbers together, and check that number against the current highest
          number. The solution came in the form of array.reduce().
        </p>
        <p>
          I was unfamiliar with the reduce method previous to this exercise. But
          I knew in the back of my mind vaguely how it worked. So I then spent a
          good hour going through and reading the docs. Great material if you
          are looking for a quick way to fall asleep! Basically, it would allow
          me to take a new array i had created with the .slice() method and
          quickly multiply all the items in the new array together. A final if
          check, and I was done! Here is a <a href="/resources/problem8.txt">link</a> to my code. I am
          still learning and hopefully one day soon I will have a markdown
          editor capable of publishing the code directly to this site!
        </p>
      </div>
      <hr></hr>
      <div id="icons">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-twitter-square"></i>
        <i className="fas fa-link"></i>
        <div id="category">
          <a href="www.google.com">Software & Development</a>
        </div>
      </div>
    </div>
  );
}
