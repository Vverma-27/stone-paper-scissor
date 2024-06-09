import { AnyMap } from "immer/dist/internal";
import { io } from "socket.io-client";

class SocketService {
  private socket: any;
  constructor() {
    this.socket = io(
      process.env.NODE_ENV === "production"
        ? "https://naval-marchelle-vihaan-verma-bb9103a3.koyeb.app/"
        : "http://localhost:5000"
    );
  }
  public subscribeTo(eventName: string, callback: any) {
    this.socket.on(eventName, callback);
  }
  public sendEvent(eventName: string, body: any, callback: any) {
    this.socket.emit(eventName, body, callback);
  }
}
export default new SocketService();
