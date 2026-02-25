import { useEffect, useState } from "react";

export default function useOnlineStatus(){
    const[isOnline,setIsOnline] = useState(true);
    useEffect(() => {
         const handleOnline = () => {setIsOnline(true)}
         const handleOffline = () => {setIsOnline(false)}

         window.addEventListener('online',handleOnline);
         window.addEventListener('offline',handleOffline);

         return () => {
            window.removeEventListener('online',handleOnline)
            window.removeEventListener('offline',handleOffline)
         }
    },[])
    return isOnline;
}import { useState, useEffect } from 'react';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return isOnline;
}
