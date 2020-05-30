import React, { createContext, useMemo, useContext } from 'react';

import socketio from 'socket.io-client';
import { useAuth } from './auth';

interface SocketContextData {
  socket: SocketIOClient.Socket;
}

const SocketContext = createContext<SocketContextData>({} as SocketContextData);

const SocketProvider: React.FC = ({ children }) => {
  const { user } = useAuth();

  const socket = useMemo(
    () =>
      socketio('http://localhost:3333', {
        query: {
          user_id: user.id,
        },
      }),
    [user],
  );

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

function useSocket(): SocketContextData {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error('useSocket must be used withing a SocketProvider');
  }

  return context;
}

export { SocketProvider, useSocket };
