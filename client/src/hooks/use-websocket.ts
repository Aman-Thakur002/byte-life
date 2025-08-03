import { useEffect, useRef } from 'react';
import { useToast } from './use-toast';

export const useWebSocket = () => {
  const { toast } = useToast();
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    const wsUrl = `ws://${window.location.host}`;
    ws.current = new WebSocket(wsUrl);

    ws.current.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'NEW_MESSAGE') {
        toast({
          title: 'New Contact Message',
          description: `From: ${message.payload.name}`,
        });
      }
    };

    ws.current.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      ws.current?.close();
    };
  }, [toast]);
};
