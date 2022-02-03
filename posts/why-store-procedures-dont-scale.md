---
title: "Why Store Procedures Don't Scale"
date: "Nov 20 2021"
excerpt: "Too much SQL is never a good thing"
cover_image: "/images/posts/img1.jpg"
---
Accommodating large increases in load, with less than half a couple of hours worth of work.
Growing your technology team up to hundreds or thousands of application developers.
The cost of your hardware infrastructure, does on correlate linearly with how much your 
product gets used. Rather the relationship should be Log(n).

Also in this post deals with propriety database management systems as well. Specifically I mention SQL Server, 
however the same can be said about Oracle, etc.

Now with that out of the way lets get going.

Store Procedures don’t scale (in terms of people, cost, and infrastructure)

And here’s why:

Points <strong>“1”</strong> and <strong>“2”</strong> won’t really matter, if you work for an industry that has 
more money than it knows what to do with, and or has no competition, like government agencies, hospitals, big telecom, 
etc.

1) The supply of people who know <strong>TSQL</strong> (Sql Server Dialect) or <strong>PL/SQL</strong> (Oracle Dialect)
,and know it well isn’t as large as, the number of people who know modern object-oriented programming languages like 
Java, Python, etc. If you start dumping business logic into SQL that sits in a database, you are going to have to 
start hiring DBAs who specialize in your database of choice which is <strong>expensive</strong>.

2) If you don’t hire people who specialize in SQL or database tuning, you’re going to have to increase size of the 
hardware that the database runs on. If you use a proprietary database technology like Oracle or SQL server, it's 
licensing is tied to the amount of hardware it runs on. So, if you want to run a bunch of poorly optimized SQL on 
bigger infrastructure, you must <strong>pay more for additional hardware, and licensing (since its per core)</strong>.

3) Let’s say you’re okay with both points <strong>“1”</strong> and <strong>“2”</strong>. There is going to be a hard 
limit of the hardware you can run it on. Which stems from both the licensing costs (for proprietary databases) &amp; 
the physical limits of how big a single server can get. At that point if the SQL is still not optimized, and your data 
set is big enough, you’re still not going to have lighting fast query times. <strong>Which really means that dumping 
core business logic into SQL for performance reasons, was just covering up an underlying problem of bad schema design 
and or system design.</strong>

4) When you use SQL store procedures, everything is inside the database. Now there are some problems with that:
A) <strong>Your business logic does not live in GIT, its changes are not tracked, and there is no autonomous 
log of who changed what, and when</strong>. You may say “<em>My store procedures do live in GIT, inside a DB 
project</em>”, that may be true. However, that does not guarantee, what's being tracked by source control is the 
same exact thing as what's inside your database instances. Since someone could always login to a database and change 
a store procedure, without anyone knowing. Now to stop this from happening, you could have an experienced DBA that 
acts as the guardian of your database, however that again is <strong>expensive</strong>.
B) Now if you have multiple “Staging”, “Prod”, and “Dev”  database instances. <strong>You can never be 100% sure that 
all the Store Procedures are the same across the environments, or reliably determine how out of date a store  
<strong>procedures </strong> is.</strong>.
C) <strong>Using SQL a lot, leads to abusing SQL (unless you have a good set of DBAs)</strong>, with no checks or 
balances in your data tier. Like cross DB actions, synonyms, sending out emails, doing large ETL jobs, creating 
functions, etc. <strong>At this point the database stops being becoming you Data Tier, and is pretty much you 
application tier. Except it's a lot more expensive to maintain, run, and scale (Licensing, hardware,  DBAs), then a web 
app that does the same sort of stuff, and can scale horizontally.</strong>