---
title: "4 Reasons to choose React !"
date: "Nov 11 2021"
excerpt: "React React React React"
cover_image: "/images/posts/img1.jpg"
---
<!-- wp:heading {"level":3} -->
<h3>1) Don’t Touch the DOM — Imperative Vs Declarative</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Hey don’t touch the DOM&nbsp;! React will do that for you. You might be wondering what I mean by that. You see React shields you from manually interacting (Imperative) with the DOM using Java Script. Instead React uses something called the “Virtual DOM”. The Virtual DOM is a representation of the actual DOM that React uses to figure out what to actually change on the screen. React will always be like "<em>Oh you made that change&nbsp;? Let me handle the best way that update</em>". So when you use React you are using a Declarative way of programming.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>2) Hair Balls Vs Lego — Component Architecture</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Front end Apps these days are pretty complex, for example take Netflix, Facebook, or AirBnB. They all have complex user interactions and require a large number of cross interacting entities. If you tried to build any one of these applications using vanilla Java Script, and then tried to add more and more features to them, you would end up with a large hair ball of code. That would feature large chunks of CSS, JS, and HTML all over the place. And when anyone ever tried to add a new feature, they would have to copy and past code (the horror&nbsp;!). Components to the rescue&nbsp;! With components you can encapsulated each and every aspect of your app into little manageable chunks, that can be imported into other parts of your application. Making building new features as easy as building with Lego.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>3) One Way Data&nbsp;Flow</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Every application has <em>"State</em>". This can be anything from how many times you clicked a button, to your current permissions inside the app. Now in traditional front end apps this state is spread around different chunks of the app. And are not shareable across different areas of the app. For example if you had a news editor app, it would have to know who has permissions to actually publish the content, and give the user some categories to publish it under.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>React deals with this problem by enforcing a centralized state. Once the <em>"State</em>" of the app changes, React automatically reacts and makes the necessary DOM changes to reflect the change. With this centralization you minimize the places where potential bugs show up. And you have a better idea where the bugs are in your application. Since data only flows one through your application, from your "State" to the components.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>4) Just the&nbsp;UI</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>React is a library for building UIs, plain and simple. It does not try to be a large massive framework that has every single feature you could want. Therefor you can just add the extra features you want as third party libraries. This way your app becomes highly customized towards your use, rather than you needing to bend a framework, to work the way you want it too.</p>
<!-- /wp:paragraph -->