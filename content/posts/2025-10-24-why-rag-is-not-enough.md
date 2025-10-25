+++
date = '2025-10-24T22:30:43-04:00'
draft = false
title = 'My First Post'
+++



# Why RAG is not enough?

Last year, I built a knowledge bot POC that had this written on the landing page. 

{{ $image := .Resources.Get "wombot.png" }}

At the time, I was aware that function (tool) calling was something that could address these limitations. However, since RAG was commoditizing quickly, we halted the exploration and looked at off the shelf solutions.

Fast forward to a year, I attended the Microsoft's AI tour[^1] to see what they're up to and was glad to see that knowledge bot ecosystem has well defined solutions for all these limitations.

Before looking at how Microsoft's solutions to these limitations, let's understand these limitations.

# What most knowledge bots do?
- Most knowledge bots use RAG (Retrieval augmented generation), and some even use the web search APIs to add the web search results to the mix.

How will such a bot answer the following question?

> Find me all the workplace themed LEED certified projects in Sydney done by design principal John Doe. 
### Semantic Search

How does it work?
1. We take the private company documents and split their text into chunks and generate numerical vectors for these chunks using an encoder model.
2. These vectors are indexed in a relational database.
3. The user's question is also turning into a numerical vector using the same encoder model.
4. A similarity search is performed in the database to find the vectors that are semantically nearest to the numerical vector from the question.
5. From these similar vectors, we retrieve K number of vectors and the chunks associated with them.
6. These chunks along with the original question, context, and conversation history are passed to an LLM for inference.

Assuming numerical factors were generated from project information documents, the chunks returned by the semantic search may resemble the following.
![[Pasted image 20251022150108.png]]
While all of them are semantically relevant, not all of them are helpful.

Chunk 3 is only a partial match. While not led by John Doe, this project demonstrates similar sustainability practices in workplace design.

Chunk 5 is a distractor. Although certified under LEED, this project is a residential development and not categorized as workplace.
### Web search
Here, the bot is going to try to find the information from the blogs, company website, public project directories, green project databases, etc. And the results may resemble the following.
![[Pasted image 20251022173540.png]]
Here, Green design weekly, is an example of an irrelevant web result.

# Limitations of RAG

When these chunks and web results are passed to an LLM, it will be able to give you a list of projects. However, we don't confidently know if the bot was able to find **all** the projects that met the criteria mentioned in the question.

What if, instead of seeking to get the names of all the projects, the user sought to know the **total** number of projects that met the criteria mentioned in the question. In this case too, while the bot may fetch the similar information, we will not have the confidence in the number it will report.

Lastly, imagine asking this bot the following question

>"What are the average man hours spent on workplace projects in 2025 Q1 at company X? 

Since the question involves fetching relevant data and performing some computation on top of that, the bot will most likely not able to answer this question.

As more and more businesses are experiencing these limitations, the ecosystem has come up with some solutions.

# Advanced Search Strategies
- Most knowledge bots use RAG + internet search to handle all types of queries.
- The limitations of these bots can be addressed by using techniques specific to query types.
## Simple queries
- A query is simple when it mostly consist of a single question.
- It typically does not involve
	- Multiple questions
	- Data aggregation
	- Data filtering
	- Further computation on gathered results
### Keyword Search
- Best for exact phrase matches
- Builds an inverted index from the documents using algorithms such as BIM25 and others.
![[Slide1 2.png]]
Think of inverted index as a HashMap or a Python dictionary where a word is mapped to an array of document ids it appears in.
```python
inverted_index = {
	"25": [1, 3, 5],
	"foot": [0, 1, 2, 3, 5],
	"hose": [5]
	...
}
```

### Vector Search
- This is something that most RAG bots already do.
- Great for conceptually similar searches.
![[Slide2 1.png]]

### Reciprocal Rank Fusion (RRF)
Merge the results from the keyword search and the vector search and rank the results based off their relative ranks.
![[Slide3 1.png]]
### Re-Ranking
- Use a specifically trained ranker model to give documents a relevant score according to the query.
- Cross-encoder models like Cohere ranker are best, but LLMs can be used as well.
![[Slide4 1.png]]
It has been observed that for most queries, the hybrid approach outperforms either just RAG, or just keyword search.
![[Slide6 2.png]]

Hybrid search is not always enough. How do you handle more complex types of queries?
## Relational Queries
When your query involves relations. For example,
![[Slide8 2.png]]
Here, we can use the LLM to come up with a Graph or an SQL query to run on our Graph or a relational database respectively.

The modern LLMs are becoming increasingly better at translating a user query into an SQL or a Graph query given the context and the database schemas.

Using this approach assumes that the company is at at least the state-1[^2] of the data maturity journey.
![[Slide9 5.png]]
## Multiple Queries in One
When a query involves multiple queries. For example,
![[Slide10 2.png]]
This is where the search start becoming agentic and the idea of query planning comes into play.

**Query planning**[^3]
- The LLM breaks down a complex query into smaller, focused subqueries. 
- These subqueries can be
	- A hybrid search
	- A web search
	- A relational search
- The LLM runs the queries in parallel
- Combines the results
- Ranks them based on the original query
- Finally, a uniform response is provided to the client (user).
![[Slide11 2.png]]
![[Slide12 2.png]]
![[Slide13 2.png]]

# Managed Search Solution
Interesting to see that the Azure AI search offers all of this as a managed service[^4]. Where you are only responsible for
1. Bringing your data
2. Building your clients

The rest of the heavy lifting involving
- Building and updating search indexes,
- Building and updating database indexes,
- Query planning
Is done by a managed service.
![[Pasted image 20251023164912.png]]



# Making Search Cheaper
How to use fine tuning to make search cheaper
![[Slide1 4.png]]
What is fine tuning?
- It refers to customizing a pre-trained LLM with additional training on a specific task or new dataset for enhanced performance, new skills, or improved accuracy.
![[Slide2 3.png]]

Why should you consider fine-tuning?
![[Slide3 3.png]]

How can you use fine-tuning for optimization?
![[Slide4 3.png]]
What are the fine-tuning options?
![[Slide5 3.png]]

What are the advantages of fine-tuning?
![[Slide6 4.png]]


How can we fine-tune for tone?
![[Slide7 3.png]]


How can you use distillation to reduce cost of operation?
![[Slide8 4.png]]

Query
![[Slide9 4.png]]

How does RAFT help?
![[Slide10 4.png]]
![[Slide11 4.png]]

![[Slide12 4.png]]


[^1]: https://aitour.microsoft.com/flow/microsoft/toronto26/sessioncatalog/page/sessioncatalog
[^2]: https://pipeline2insights.substack.com/i/150965082/stage-starting-with-data
[^3]: https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview#:~:text=to%2Dagent%20workflows.-,Here%27s%20what%20it%20does,-%3A
[^4]: https://learn.microsoft.com/en-us/azure/search/search-what-is-azure-search


