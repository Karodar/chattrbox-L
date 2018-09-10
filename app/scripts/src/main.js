import ApplicationForChat from './app';
import socketClient from './ws-client';

new ApplicationForChat();
socketClient.registerCloseHandler(() => new ApplicationForChat());
