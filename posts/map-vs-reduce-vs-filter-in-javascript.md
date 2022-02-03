---
title: "Map vs Reduce vs Filter in JavaScript"
date: "Nov 11 2021"
excerpt: "Loops without the while or for"
cover_image: "/images/posts/img1.jpg"
---
<!-- wp:separator -->
<hr class="wp-block-separator"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>So these methods are part of the “functional” aspect of JavaScript. JavaScript is a strange language in a good way. Before we get into this, know that all these methods above try to replace the “for” loop, or any other type of loop you can think of.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Some of you might be saying, “I like my loops thank you very much, it is in every language out there&nbsp;!”. And yes that is very true, however these make writing a whole loop for something trivial a thing of the past. So lets get on with it, its not as hard as you probably things it is.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>All these methods only working on arrays. And they never modify the array you apply them to. They just return a new array.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As in Mapping “X” to “Y”, or transforming X into Y. In the case of JavaScript you are making a map of your values. You basically just give it a function (could be anonymous) and it applies it to each array element, and forms a new array.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<script src="https://gist.github.com/RedGhoul/d31d5603346da88d69da8af4123cb72c.js"></script>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>As in reducing something to its essence, or compressing something down. In the case of JavaScript you are taking all your values in an array, and compressing them into something useful.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<script src="https://gist.github.com/RedGhoul/9bd80e04f031a85ef6214d735138be96.js"></script>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>As in finding something based on a certain set of parameters. I think you guys kinda already know what this particular method does.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<script src="https://gist.github.com/RedGhoul/51948a1faa3cabb5b3dee37fd26cd9c8.js"></script>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>I hope this helped you better understand Reduce, Map, and Filter ?</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator"/>
<!-- /wp:separator -->