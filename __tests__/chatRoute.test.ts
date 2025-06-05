import { describe, it, expect, vi } from 'vitest';
import { POST } from '../app/api/chat/route';
import type { Message } from 'ai';

vi.mock('@langchain/openai', () => {
  return {
    ChatOpenAI: class {
      async stream() {
        return new ReadableStream({
          start(controller) {
            controller.enqueue({ content: 'test' });
            controller.close();
          }
        });
      }
    }
  };
});

describe('POST /api/chat', () => {
  it('responds with a readable stream', async () => {
    const messages: Message[] = [
      { role: 'user', content: 'Hello' }
    ];
    const req = new Request('http://localhost/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages })
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(ReadableStream);

    const reader = res.body?.getReader();
    const { done, value } = await reader!.read();
    expect(done).toBe(false);
    expect(value).toBeInstanceOf(Uint8Array);
  });
});
