# server.py
import asyncio
import websockets

async def echo(websocket, path):
    try:
        async for message in websocket:
            print(f"Received message: {message}")
            await websocket.send(f"Received: {message}")
    except websockets.exceptions.ConnectionClosedError:
        print("클라이언트 종료.")
    finally:
        await websocket.close()

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    server = websockets.serve(echo, "208.205.1.7", 7090)
    print("run server....")
    loop.run_until_complete(server)
    loop.run_forever()