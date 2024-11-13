# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![preview](./public/preview.png)

### Links

- Solution URL: [github](https://github.com/oloude)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
function Image() {
  return (
    <div className="relative group rounded-md h-60 w-full overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-cyan  opacity-0 group-hover:opacity-40 transition-opacity"></div>

      {/* Centered icon that appears on hover */}
      <img
        src={viewIcon}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden z-20 group-hover:block"
      />

      {/* NFT Image */}
      <img
        src={nftImage}
        alt="nft"
        className="block h-60 w-full object-cover rounded-md"
      />
    </div>
  );
}
```

## Author

- Frontend Mentor - [@oloude](https://www.frontendmentor.io/profile/oloude)
- Twitter - [@AbosedeOloude](https://www.twitter.com/AbosedeOloude)
