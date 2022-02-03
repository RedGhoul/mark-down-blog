---
title: "Questions People have Asked Me — Part 2"
date: "Nov 11 2021"
excerpt: "Loops without the while or for"
cover_image: "/images/posts/img1.jpg"
---
<!-- wp:paragraph -->
<p><strong>What is the binary search</strong> <strong>algorithm and how does it&nbsp;work?</strong>&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;binary search algorithm&nbsp;(BSA)&nbsp;is used to effectively sort data.&nbsp;It works&nbsp;on the principle of continuously&nbsp;cutting the data set in half, until&nbsp;it finds what it is searching&nbsp;for.&nbsp;However,&nbsp;this&nbsp;algorithm only works on data sets that are already sorted.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>First the BSA&nbsp;checks the middle of the data&nbsp;set&nbsp;and&nbsp;compares the value it is searching&nbsp;for. If this value is the&nbsp;value&nbsp;it is searching for then it stops.&nbsp;However,&nbsp;if it is not equal,&nbsp;it&nbsp;checks if&nbsp;the value it found is bigger or smaller&nbsp;then&nbsp;the value it is trying to find. If the value is&nbsp;smaller, the&nbsp;BSA repeats the process on the left, whereas if the value&nbsp;is&nbsp;bigger&nbsp;it&nbsp;repeats&nbsp;the process on the right.&nbsp;This process is&nbsp;repeated multiple times until the&nbsp;value that the BSA is looking for&nbsp;is found.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It has a <strong>time complexity</strong> of O(log(n)) &amp; <strong>space complexity </strong>of O(1)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>What is recursion and how is it used?</strong>&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Recursion in programming is when the program starts calling&nbsp;its&nbsp;self, from inside&nbsp;its self.&nbsp;This programming technique is usually used when a single large program can be solved in smaller&nbsp;parts and&nbsp;has a valid base case. Such as computing the&nbsp;Fibonacci&nbsp;Sequence&nbsp;or&nbsp;traversing a binary search tree.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>What is polymorphism and what is its&nbsp;purpose?</strong>&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Polymorphism is an&nbsp;aspect of&nbsp;Object-Oriented&nbsp;Programming where&nbsp;a “object” can take on many different forms,&nbsp;if&nbsp;all the forms are&nbsp;its&nbsp;children.&nbsp;&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Explain when you should use interfaces and when you should use abstract base classes.</strong>&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Both interfaces and abstract classes are a type of contract,&nbsp;in the class structures of a&nbsp;software application.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Interfaces </strong>are a form of contract between two different entities, where you want to separate the functions from the implementations. This is&nbsp;done such that your existing application does not need to change much if&nbsp;a certain part of it is changed. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You would want to use interfaces when you want a guarantee that entities have to have the same exact method signatures but different implementations. This is extremely helpful when making extendable and reusable software. For example lets say your writing a new Connection class for a new database type, that is used by the DatabaseManager class, if the Connection class implements the IDBConnection interface we have a guarantee that it would have all the methods required for  use by the  DatabaseManager class.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Where as&nbsp;<strong>Abstract classes</strong> are a less extreme version of interfaces,&nbsp;where certain methods defined in it&nbsp;can have real&nbsp;implementations.&nbsp;This&nbsp;allows any child class that inherits&nbsp;from the abstract class&nbsp;to get those method implementations, and have the ability to provide their own implementations of abstract methods. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The difference between the two can be further seen in how&nbsp;their&nbsp;child methods are derived. Since&nbsp;interfaces&nbsp;are&nbsp;“implemented”,&nbsp;where as&nbsp;abstract&nbsp;classes are “extended”.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>When should you use static methods and static variables? And when shouldn't you use them.</strong>&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Static methods and variables can be used from a class without having to instantiate it. This is usually used&nbsp;when,&nbsp;you want to group a set of functionality or utility functions together. An example of this is the “Math” class in Java, which gives the user all the math related functions they need. You wouldn’t want to use them when you would be creating your inheritance-based class structures, most of the time.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>What are some principles you follow for writing quality code and coming up with good class designs?</strong>&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I feel like a list is the most appropriate why of answering this question.&nbsp;&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><li>Follow&nbsp;a style guide for the specific language you are using.&nbsp;(like&nbsp;PEP 8 for Python)&nbsp;</li></ol>
<!-- /wp:list -->

<!-- wp:list {"ordered":true,"start":2} -->
<ol start="2"><li>Use a linter&nbsp;and&nbsp;refactoring tool&nbsp;in your IDE/Text editor&nbsp;of choice.&nbsp;(like&nbsp;Visual Studio + ReSharper)&nbsp;</li></ol>
<!-- /wp:list -->

<!-- wp:list {"ordered":true,"start":3} -->
<ol start="3"><li>“Simplicity is the ultimate complexity” make things easy to understand, not just for you but for everyone.&nbsp;And only use design patterns when you&nbsp;really&nbsp;need to use them.&nbsp;</li></ol>
<!-- /wp:list -->

<!-- wp:list {"ordered":true,"start":4} -->
<ol start="4"><li>Use an&nbsp;effective ORM/ Database/ UML solution&nbsp;because it gets harder and harder to maintain as time goes on. Since people leave,&nbsp;code changes, and new people come in with little to no idea of how things work.&nbsp;I like to use a combination of Entity&nbsp;Frame work&nbsp;(ORM)/ MSSQL/ and EF power tools, which allow you to generate&nbsp;Entity&nbsp;Relationship models&nbsp;from your&nbsp;POCO&nbsp;classes.&nbsp;</li></ol>
<!-- /wp:list -->

<!-- wp:list {"ordered":true,"start":5} -->
<ol start="5"><li>There is no such thing as a golden&nbsp;catch all&nbsp;rule&nbsp;for writing quality code.&nbsp;You&nbsp;must&nbsp;find something that fits the needs&nbsp;of the&nbsp;company, people,&nbsp;and&nbsp;place.&nbsp;</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Write a SQL statement to create a table called "author" with the&nbsp;columns&nbsp;"id", "name", "age" (for MySQL or SQL Server).</strong>&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>CREATE TABLE author (
 id int NOT NULL AUTO_INCREMENT,
 name varchar(255) NOT NULL,
 age int,
 PRIMARY KEY (id)
);</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Write a SQL statement to create a table called "book" with the&nbsp;columns&nbsp;"id", "title", "genre", "author_id" (for MySQL or SQL Server).</strong>&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>
CREATE TABLE book (
 id int NOT NULL AUTO_INCREMENT,
 title varchar(255) NOT NULL,

 genre varchar(255),
 author_id int,
 PRIMARY KEY (id),
 FOREIGN KEY (`author_id`) REFERENCES `author` (`id`) ON DELETE CASCADE
);</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>For the "author" and "book" tables created above, write a SQL statement to tell you the number of books each author has written, but only for authors who have written 2 or more books. The output should not show authors that have written only 1 book. The output should have the author's name and the number of books they have written.</strong>&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>SELECT author.name,&nbsp;COUNT(*) AS '# books' FROM author, book WHERE author.id =&nbsp;book.author_id&nbsp;GROUP BY author.name HAVING&nbsp;COUNT(*) &gt;&nbsp;1;&nbsp;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>In databases, what are indexes used for and how to you decided how to use them effectively.</strong>&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Indexes in databases are used to speed&nbsp;up data retrieval.&nbsp;However,&nbsp;they come at the additional cost of&nbsp;space, and added complexity to database maintenance.&nbsp;They should be created based on the usage patterns of queries, and database performance data that can found in the "Perfromance Schema" for MySQL &amp; "Dynamic mangement views" in SQL Server.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>At some point when the performance returns from database optimizations, have reduced impact on application performance, is probably when there&nbsp;should  be some sort of caching layer&nbsp;for application&nbsp;queries, such that it doesn’t need to query the SQL database directly.&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>What is the value of unit testing and what are some of your strategies for writing good unit tests?</strong>&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Unit testing&nbsp;is&nbsp;used to test the functionality of the different parts of an application.&nbsp;Its&nbsp;value lies in the fact that they make the programmer,&nbsp;test their code in a systematic way. And feeds into a workflow where tests are run before anything&nbsp;gets committed to&nbsp;the&nbsp;master&nbsp;branch.&nbsp;I think the best way to write a test case,&nbsp;is to write&nbsp;the&nbsp;test&nbsp;before&nbsp;writing the application logic, since it gets you thinking about what&nbsp;edge/special cases&nbsp;to consider.&nbsp;This is also known as the&nbsp;test-driven&nbsp;development approach.&nbsp;</p>
<!-- /wp:paragraph -->