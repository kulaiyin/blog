# Websocket

[在nest中使用websocket](../../frameworks/nest/redis.md)

[在浏览器中使用websocket](#在浏览器中使用websocket)

## 在浏览器中使用websocket

```js
export class KWebSocket {
  private socket: WebSocket;
  constructor() {
    this.socket = new WebSocket("ws://localhost:3050");

    this.socket.onopen = (e: Event) => {
      console.log("Connected to server");

      // this.socket
      setTimeout(() => {
        this.send("message", "hello wrold from web");
      }, 2000);
    };

    this.socket.onmessage = (e: Event) => {
      console.log("onmessage to server");
    };

    this.socket.onerror = (e: Event) => {
      console.log("onerror to server");
    };
  }

  send(event: string, data: any) {
    if (Array.isArray(data) || typeof data === "object") {
      data = JSON.stringify(data);
    }
    console.log("send to server: ", event, data);
    this.socket.send(JSON.stringify({ event, data }));
  }
}
```
