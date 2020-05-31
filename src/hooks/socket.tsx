import React, { createContext, useContext, useMemo } from 'react';

import socketio from 'socket.io-client';
import { useAuth } from './auth';

interface SocketContextData {
  connection: SocketIOClient.Socket | undefined;
}

const SocketContext = createContext<SocketContextData>({} as SocketContextData);

const SocketProvider: React.FC = ({ children }) => {
  const { user } = useAuth();

  const socket = useMemo<SocketIOClient.Socket>(() => {
    const connection = socketio('http://localhost:3333', {
      query: {
        user_id: user.id,
      },
    });
    return connection;
  }, [user.id]);

  return (
    <SocketContext.Provider value={{ connection: socket }}>
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
