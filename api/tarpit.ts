export const config = { runtime: 'edge' };

export default function handler() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        while (true) {
          controller.enqueue(encoder.encode('.'));
          await new Promise((r) => setTimeout(r, 10_000));
        }
      } catch {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    status: 200,
    headers: { 'Content-Type': 'text/html', 'Transfer-Encoding': 'chunked' },
  });
}