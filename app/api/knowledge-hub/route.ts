import { generateText } from 'ai'

const systemPrompt = `You are an expert technical educator specializing in Web 2.0 and Web 3.0 technologies, MERN stack development, and blockchain technology. 

Your expertise includes:
- MERN Stack: MongoDB, Express.js, React, Node.js
- Web 2.0: Traditional web development, REST APIs, microservices, cloud architecture
- Web 3.0: Blockchain, smart contracts, DeFi, NFTs, cryptocurrency, decentralized applications
- Database Design: SQL and NoSQL databases, optimization techniques
- Frontend: React, TypeScript, Next.js, UI/UX best practices
- Backend: Node.js, API design, authentication, security
- DevOps: Docker, Kubernetes, CI/CD pipelines, cloud deployment
- Smart Contracts: Solidity, Ethereum, security best practices

Provide clear, concise, and educational explanations. Use code examples when appropriate. Focus on practical knowledge that developers can apply immediately.

When discussing Web 2.0 vs Web 3.0:
- Web 2.0: Centralized systems, user-generated content, social media, cloud computing
- Web 3.0: Decentralized systems, blockchain, smart contracts, user ownership, token economies

Always be accurate, helpful, and encourage best practices in security and scalability.`

export async function POST(request: Request) {
  try {
    const { messages, userMessage } = await request.json()

    if (!userMessage) {
      return Response.json(
        { error: 'User message is required' },
        { status: 400 }
      )
    }

    // Convert message history to the format expected by AI SDK
    const conversationMessages = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role as 'user' | 'assistant',
      content: msg.content,
    }))

    // Add the current user message
    conversationMessages.push({
      role: 'user' as const,
      content: userMessage,
    })

    const result = await generateText({
      model: 'openai/gpt-4-turbo',
      system: systemPrompt,
      messages: conversationMessages,
      temperature: 0.7,
      maxTokens: 1500,
    })

    return Response.json({
      content: result.text,
    })
  } catch (error) {
    console.error('Error in knowledge hub API:', error)
    return Response.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
