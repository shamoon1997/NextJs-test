// Installing @emailjs/browser
// Installing animate.css
// Installing loaders.css
// Installing react-leaflet
// Installing react-loaders


// Dynamic Import

// Dynamic imports
// Components that aren’t visible in the initial load of the page and components that are displayed based on certain conditions should be imported dynamically instead of normally. This ensures that these components are sent to the browser only when they are needed. Refer to the following code example.

// import dynamic from 'next/dynamic'

// const Modal = dynamic(() => import('../components/header'));

// export default function Home() {
//   return (
//     {showModal && <Modal />}
//   )
// }
// Open the Network tab. When the condition is fulfilled, you’ll see that a new network request is made to fetch the dynamic component (click the button to open a modal).

// Lazy Load Image

// Lazy load images using next/image
// Next.js has a built-in component named next/image. It loads images only when they are in the viewport.

// import Image from "next/image";

// const Index = () => {
//   return (
//     <>
//       <p>
//         External domains must be configured in <Code>next.config.js</Code> using
//         the <Code>domains</Code> property.
//       </p>
//       <Image
//         alt="Next.js logo"
//         src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
//         width={1200}
//         height={400}
//       />
//     </>
//   );
// };





// Optimize Link
// Optimize next/link
// If you are using next/link in your project, add the prefetch prop to it and set it to false. Next.js by default prefetches the pages whose links are in the viewport. Let’s say you have a header with two links, ‘/home’ and ‘/about’. Even though the users are on the home page, assets of the about page will also be loaded because the about link can be seen in the viewport.

// When prefetch is set to false, prefetching will still occur but only when the link is hovered over.

// <li>
// 	<Link href="/about" prefetch={false}>
// 		<a>About Us</a>
//     </Link>
// </li>
// <li>
// 	<Link href="/blog/hello-world" prefetch={false}>>
// 		<a>Blog Post</a>
//     </Link>
// </li>


// Optimize fonts
// When we use icon libraries like font-awesome, we only use a maximum of 15 icons, but the full library is loaded. The problem is that it is render-blocking resources. So, instead of loading the complete library, you can just download the required icons as SVG files and use them. You can also lazy load these SVG images.

// You can also use font-display: swap; for your fonts because it doesn’t block the rendering. The font face is instead given an infinite swap period and a minimal block period.

// @font-face {
//   font-family: ExampleFont;
//   src: url(/path/to/fonts/examplefont.woff) format('woff'),
//        url(/path/to/fonts/examplefont.eot) format('eot');
//   font-weight: 400;
//   font-style: normal;
//   font-display: swap;
// }
// If you are using Google Fonts directly from the link, then download the fonts and self-host them




// Lazy load React components (optional)
// We can also load a component only when it is in the viewport using the react-lazyload library, which also supports SSR. We can provide offset, too, so users will be unaware of this lazy-loading behavior.

// import LazyLoad from 'react-lazyload';

// <LazyLoad offset={100}>
//     <Footer />
// </LazyLoad>
// Exclude big libraries from bundle
// As I discussed earlier, libraries are added to First Load JS. In our project, we are using the Syncfusion Charts library on multiple pages, so the Syncfusion charts library was bundled into the first load.

// Pages that were not using Syncfusion charts were also loading the Syncfusion charts library, since it was added into to First Load JS or the main bundle. In order to optimize it, we followed this awesome article by Robert S on how to exclude big libraries.