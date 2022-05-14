import { AnyMap } from "immer/dist/internal";
import { io } from "socket.io-client";

class SocketService {
  private socket: any;
  constructor() {
    this.socket = io("http://localhost:5000");
  }
  public subscribeTo(eventName: string, callback: any) {
    this.socket.on(eventName, callback);
  }
  public sendEvent(eventName: string, body: any, callback: any) {
    this.socket.emit(eventName, body, callback);
  }
}
export default new SocketService();
