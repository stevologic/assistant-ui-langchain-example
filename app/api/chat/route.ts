import { ChatOpenAI } from '@langchain/openai';
import { LangChainAdapter, Message } from 'ai';
import { AIMessage, HumanMessage } from '@langchain/core/messages';

// Allow streaming responses up to 60 seconds
export const maxDuration = 60;


export async function POST(request: Request) {
  // message formatting
  const { messages, }: { messages: Message[] } = await request.json();
  const formattedMessages = messages.map(message =>
    message.role == 'user'
        ? new HumanMessage({content: message.content})
        : new AIMessage({content: message.content}),
  );
   
  // model definition
  const model = new ChatOpenAI({
    model: 'gpt-3.5-turbo-0125',
    temperature: 0,
  });

  // model execution
  const stream = await model.stream(formattedMessages);
  return LangChainAdapter.toDataStreamResponse(stream);
}