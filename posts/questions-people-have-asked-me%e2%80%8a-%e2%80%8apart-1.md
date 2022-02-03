---
title: "Questions People Have Asked Me"
date: "Dec 1 2020"
excerpt: "After going through some interviews, here are the questions I got"
cover_image: "/images/posts/img1.jpg"
---
<!-- wp:heading {"level":3} -->
<h3>What is the root object in the base class library ?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For Java and C# that would be “Object”.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>What methods does “Object” have ?</h3>
<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->
<h4>For C#</h4>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li><strong>Equals </strong>— Supports comparisons between two objects</li><li><strong>Finalize </strong>— Used to perform cleanup operations on un-managed resources being used by the object. Before the object is destroyed.</li><li><strong>GetType </strong>- Gets the current type of the current instance of the object.</li><li><strong>GetHashCode</strong> — Generates a number based on the value of an object. Used to supported hash tables.</li><li><strong>ToString</strong> — Create a human readable piece of text that describes the object.</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4>For Java</h4>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li><strong>equals</strong> - Determines if the objects are equals.</li><li><strong>getClass </strong>- Returns the runtime class of this object.</li><li><strong>hashCode</strong> - Returns the hash code value of the object, used in hash tables.</li><li><strong>toString</strong> - Returns a string representation of the object.</li><li><strong>notify</strong> - Wakes up a single thread that is waiting on this objects monitor.</li><li><strong>notifyAll </strong>- Wakes up all threads waiting on this objects monitor.</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3>Is “String” mutable ?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For C# &amp; Java strings are always <strong>IMMUTABLE</strong></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>What is Boxing and Un Boxing ?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>For C#:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Process of converting a value type to the type of object or any interface type implemented by this value type. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Storing <strong>int </strong>in a object which would be “<strong>Boxing</strong>” (implicit aka do it with out thinking about it). </p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>int iii = 123;
object one = iii;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>And then taking that object, and “<strong>Un-Boxing</strong>” it explicitly. Example of this would be something like :</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>object x = 99;
int i = (int)x; 
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Why would you ever want to do this ? Well that’s cause value types get stored in the stack, whereas reference types get stored in the heap. So if your running into a performance problem by having a lot of value types either floating around in the stack or heap.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>For Java:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Autoboxing </strong>is the automatic conversion that the java compiler makes between primitive types and their object wrapper classes. </p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>List&lt;Integer> ll = new ArrayList&lt;Integer>();

for(int i =0; i &lt; 100; i++){
   ll.add(i); // auto boxing to convert int to Integer
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Un-boxing </strong> is the conversion of object wrapper classes to their  primitive types.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>
int sum = 0;
List&lt;Integer> ll = new ArrayList&lt;Integer>();

for(int i =0; i &lt; 100; i++){
   sum = sum + ll.get(i); // unboxing
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Here is a table of the mappings:</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table><tbody><tr><th>Primitive type</th><th>Wrapper class</th></tr><tr><td>boolean</td><td>Boolean</td></tr><tr><td>byte</td><td>Byte</td></tr><tr><td>char</td><td>Character</td></tr><tr><td>float</td><td>Float</td></tr><tr><td>int</td><td>Integer</td></tr><tr><td>long</td><td>Long</td></tr><tr><td>short</td><td>Short</td></tr><tr><td>double</td><td>Double</td></tr></tbody></table></figure>
<!-- /wp:table -->
